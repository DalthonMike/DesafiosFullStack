package com.desafio.fullstack.desafiofullstack.v1.converter.response;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractResponseMapper;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.BolsistaResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Objects;

@Component
public class BolsistaResponseConverter extends AbstractResponseMapper<Bolsista, BolsistaResponse> {

    @Autowired
    private PagamentoResponseConverter pagamentoResponseConverter;

    @Override
    public BolsistaResponse toResponse(Bolsista response) {
        return BolsistaResponse.builder()
                .id(response.getId())
                .nome(response.getNome())
                .dataCadastro(response.getDataCadastro())
                .codigoBanco(response.getCodigoBanco())
                .numeroAgencia(response.getNumeroAgencia())
                .numeroConta(response.getNumeroConta())
                .identificador(response.getIdentificador())
                .banco(response.getBanco())
                .numeroIdentificador(response.getNumeroIdentificador())
                .pagamentos(Objects.nonNull(response.getPagamentos()) ? pagamentoResponseConverter.toResponse(response.getPagamentos()) : new ArrayList<>())
                .build();
    }
}
