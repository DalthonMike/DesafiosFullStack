package com.desafio.fullstack.desafiofullstack.v1.service;


import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusAtividade;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.desafio.fullstack.desafiofullstack.v1.exception.NegocioException;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import com.desafio.fullstack.desafiofullstack.v1.repository.BolsistaRepository;
import com.desafio.fullstack.desafiofullstack.v1.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BolsistaService {

    @Autowired
    private BolsistaRepository bolsistaRepository;

    @Autowired
    private PagamentoRepository pagamentoRepository;

    public List<Bolsista> buscarTodos() {
        return bolsistaRepository.findAll();
    }

    public List<Bolsista> buscarTodosAtivos() {
        return bolsistaRepository.findAllByAtividade(StatusAtividade.ATIVO);
    }

    public Bolsista buscarPorId(Long id) {
        return bolsistaRepository.findById(id).orElseThrow(() -> new NegocioException("Não foi possível encontrar um bolsista com esse identificador: " + id));
    }

    public Bolsista cadastrar(Bolsista bolsista) {

        if (Objects.nonNull(bolsista.getId())) {
            bolsista.setAtividade(StatusAtividade.ATIVO);
            return bolsistaRepository.save(bolsista);
        } else if (!verificaIdentificadorENumeroJaCadastrado(bolsista.getIdentificador(), bolsista.getNumeroIdentificador())) {
            return bolsistaRepository.save(bolsista);
        } else {
            throw new NegocioException("Já existe um bolsista com o " + bolsista.getIdentificador().getCodigo() + ": " + bolsista.getNumeroIdentificador() + " informado!");
        }
    }


    public boolean verificaIdentificadorENumeroJaCadastrado(IdentificadorEnum identificador, Long numeroIdentificador) {
        Bolsista byCpf = bolsistaRepository.findByIdentificadorAndNumeroIdentificador(identificador, numeroIdentificador);
        return Objects.nonNull(byCpf) ? true : false;
    }

    public void deletar(Long id) {
        Bolsista bolsista = buscarPorId(id);
        if (!verificaSeExistePagamentoPagoOuSolicitado(bolsista.getPagamentos())) {
            excluiLogicamenteTodosPagamentosBolsista(id);
            bolsista.setAtividade(StatusAtividade.INATIVO);
            bolsistaRepository.save(bolsista);
        } else {
            throw new NegocioException("O bolsista informado não pode ser excluído pois possui pagamento com o status: " + StatusPagamentoEnum.SOLICITADO.getDescricao() + " ou " + StatusPagamentoEnum.PAGO.getDescricao() + ".");
        }
    }

    boolean verificaSeExistePagamentoPagoOuSolicitado(List<Pagamento> pagamentos) {
        return pagamentos.stream().anyMatch(p -> StatusPagamentoEnum.SOLICITADO.equals(p.getStatus()) || StatusPagamentoEnum.PAGO.equals(p.getStatus()));
    }

    void excluiLogicamenteTodosPagamentosBolsista(Long idBolsista) {
        List<Pagamento> pagamentos = pagamentoRepository.findAllByBolsistaId(idBolsista);
        pagamentos.stream().forEach(p -> {
            p.setStatus(StatusPagamentoEnum.CANCELADO);
            pagamentoRepository.save(p);
        });
    }
}
