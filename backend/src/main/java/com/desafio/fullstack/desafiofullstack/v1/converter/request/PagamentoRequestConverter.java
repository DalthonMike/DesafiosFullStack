package com.desafio.fullstack.desafiofullstack.v1.converter.request;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractEntityMapper;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.PagamentoRequest;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import com.desafio.fullstack.desafiofullstack.v1.service.BolsistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PagamentoRequestConverter extends AbstractEntityMapper<PagamentoRequest, Pagamento> {

    @Autowired
    private BolsistaService bolsistaService;

    @Override
    public Pagamento toEntity(PagamentoRequest request) {
        return Pagamento.builder()
                .id(request.getId())
                .bolsista(bolsistaService.buscarPorId(request.getIdBolsista()))
                .dataPagamento(request.getDataPagamento())
                .valor(request.getValor())
                .status(request.getStatus())
                .build();
    }
}
