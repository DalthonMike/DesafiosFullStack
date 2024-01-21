package com.desafio.fullstack.desafiofullstack.v1.converter.response;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractResponseMapper;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PagamentoResponseConverter extends AbstractResponseMapper<Pagamento, PagamentoResponse> {

    @Autowired
    private BolsistaResponseConverter bolsistaResponseConverter;

    @Override
    public PagamentoResponse toResponse(Pagamento response) {
        return PagamentoResponse.builder()
                .id(response.getId())
                .bolsista(bolsistaResponseConverter.toResponse(response.getBolsista()))
                .status(response.getStatus())
                .dataPagamento(response.getDataPagamento())
                .build();
    }
}
