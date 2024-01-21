package com.desafio.fullstack.desafiofullstack.v1.converter.request;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractEntityMapper;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.springframework.stereotype.Component;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;
import java.util.Date;

@Component
public class BolsistaRequestConverter extends AbstractEntityMapper<BolsistaRequest, Bolsista> {
    @Override
    public Bolsista toEntity(BolsistaRequest request) {
        return Bolsista.builder()
                .id(request.getId())
                .nome(request.getNome())
                .dataCadastro(LocalDate.now())
                .codigoBanco(request.getCodigoBanco())
                .numeroAgencia(request.getNumeroAgencia())
                .numeroConta(request.getNumeroConta())
                .identificador(request.getStatusAgendamentoTreinamento())
                .numeroIdentificador(request.getNumeroIdentificador())
                .build();
    }
}
