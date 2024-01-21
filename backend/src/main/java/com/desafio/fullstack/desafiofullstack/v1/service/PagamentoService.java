package com.desafio.fullstack.desafiofullstack.v1.service;

import com.desafio.fullstack.desafiofullstack.v1.converter.request.PagamentoRequestConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.PagamentoRequest;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import com.desafio.fullstack.desafiofullstack.v1.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Pagamento cadastrar(PagamentoRequest pagamentoRequest) {
        return pagamentoRepository.save(pagamentoRequestConverter.toEntity(pagamentoRequest));
    }
}
