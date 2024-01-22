package com.desafio.fullstack.desafiofullstack.v1.service;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.desafio.fullstack.desafiofullstack.v1.converter.request.PagamentoRequestConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.PagamentoRequest;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import com.desafio.fullstack.desafiofullstack.v1.exception.NegocioException;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import com.desafio.fullstack.desafiofullstack.v1.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PagamentoService {

    @Autowired
    private PagamentoRepository pagamentoRepository;

    @Autowired
    private PagamentoRequestConverter pagamentoRequestConverter;

    public List<Pagamento> buscarTodos() {
        return pagamentoRepository.findAll();
    }

    public List<Pagamento> buscarTodosPorIdBolsista(Long idBolsista) {
        return pagamentoRepository.findAllByBolsistaId(idBolsista);
    }

    public Pagamento buscarPorId(Long id) {
        Pagamento pagamento = pagamentoRepository.findById(id).orElseThrow(() -> new NegocioException("Não existe um pagamento com o id: " + id + "informado"));
        return pagamento;
    }

    public Pagamento cadastrar(PagamentoRequest pagamentoRequest) {
        pagamentoRequest.setStatus(StatusPagamentoEnum.NAO_REALIZADO);
        return pagamentoRepository.save(pagamentoRequestConverter.toEntity(pagamentoRequest));
    }

    public Pagamento editar(PagamentoRequest pagamentoRequest) {
        preCondicaoParaEditar(pagamentoRequest);
        return pagamentoRepository.save(pagamentoRequestConverter.toEntity(pagamentoRequest));
    }

    public void deletar(Pagamento pagamento) {
        pagamentoRepository.delete(pagamento);
    }

    public void preCondicaoParaEditar(PagamentoRequest pagamentoEdicao) {
        Pagamento pagamentoVersaoAtual = buscarPorId(pagamentoEdicao.getId());

        switch (pagamentoVersaoAtual.getStatus()) {
            case NAO_REALIZADO:
                if (!(StatusPagamentoEnum.SOLICITADO.equals(pagamentoEdicao.getStatus()) || StatusPagamentoEnum.CANCELADO.equals(pagamentoEdicao.getStatus()))) {
                    throw new NegocioException("O pagamento não pode ser alterado para " + pagamentoEdicao.getStatus() + " pois está com o status: " + pagamentoVersaoAtual.getStatus());
                }
                break;
            case SOLICITADO:
                if (!(StatusPagamentoEnum.PAGO.equals(pagamentoEdicao.getStatus()) || StatusPagamentoEnum.CANCELADO.equals(pagamentoEdicao.getStatus()))) {
                    throw new NegocioException("O pagamento não pode ser alterado para " + pagamentoEdicao.getStatus() + " pois está com o status: " + pagamentoVersaoAtual.getStatus());
                }
                break;
            case PAGO:
            case CANCELADO:
                throw new NegocioException("O pagamento com o status " + pagamentoVersaoAtual.getStatus() + " não pode ser alterado");
            default:
        }
    }
}
