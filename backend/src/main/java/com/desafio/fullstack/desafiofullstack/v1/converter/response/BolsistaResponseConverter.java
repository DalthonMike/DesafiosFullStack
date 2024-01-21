package com.desafio.fullstack.desafiofullstack.v1.converter.response;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractResponseMapper;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.BolsistaResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Objects;

@Component
public class BolsistaResponseConverter extends AbstractResponseMapper<Bolsista, BolsistaResponse> {

    @Override
    public BolsistaResponse toResponse(Bolsista response) {
        return BolsistaResponse.builder()
                .id(response.getId())
                .nome(response.getNome())
                .dataCadastro(response.getDataCadastro())
                .codigoBanco(response.getCodigoBanco())
                .numeroAgencia(response.getNumeroAgencia())
                .numeroConta(response.getNumeroConta())
                .identificadorEnum(response.getIdentificador())
                .numeroIdentificador(response.getNumeroIdentificador())
                .pagamentos(Objects.nonNull(response.getPagamentos()) ? response.getPagamentos() : new ArrayList<>())
                .build();
    }
}
