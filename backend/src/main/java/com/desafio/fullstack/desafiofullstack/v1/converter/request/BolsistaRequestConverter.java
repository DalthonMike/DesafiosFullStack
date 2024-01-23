package com.desafio.fullstack.desafiofullstack.v1.converter.request;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractEntityMapper;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusAtividade;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class BolsistaRequestConverter extends AbstractEntityMapper<BolsistaRequest, Bolsista> {
    @Override
    public Bolsista toEntity(BolsistaRequest request) {
        return Bolsista.builder()
                .id(request.getId())
                .nome(request.getNome())
                .dataCadastro(LocalDate.now())
                .numeroAgencia(request.getNumeroAgencia())
                .numeroConta(request.getNumeroConta())
                .identificador(request.getIdentificador())
                .banco(request.getBanco())
                .numeroIdentificador(request.getNumeroIdentificador())
                .atividade(StatusAtividade.ATIVO)
                .build();
    }
}
