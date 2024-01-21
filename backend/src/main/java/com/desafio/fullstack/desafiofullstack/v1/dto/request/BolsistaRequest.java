package com.desafio.fullstack.desafiofullstack.v1.dto.request;

import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
public class BolsistaRequest {

    private Long id;

    @NotNull
    private String nome;

    @NotNull
    private String cpf;

    @NotNull
    private String cnh;

    @NotNull
    private long codigoBanco;

    @NotNull
    private long numeroAgencia;

    @NotNull
    private long numeroConta;

    @NotNull
    @Enumerated(EnumType.STRING)
    private IdentificadorEnum statusAgendamentoTreinamento;

    @NotNull
    @Enumerated(EnumType.STRING)
    private BancoEnum banco;

    @NotNull
    private Long numeroIdentificador;

}
