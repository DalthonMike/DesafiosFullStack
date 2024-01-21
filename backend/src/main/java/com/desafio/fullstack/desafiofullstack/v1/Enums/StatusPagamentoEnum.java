package com.desafio.fullstack.desafiofullstack.v1.Enums;

public enum StatusPagamentoEnum {

    SOLICITADO("SOLICITADO", "Solicitado"),
    PAGO("PAGO", "Pago"),
    NAO_REALIZADO("NAO_REALIZADO", "Não realizado"),
    CANCELADO("CANCELADO", "Cancelado");

    private String codigo;
    private String descricao;

    StatusPagamentoEnum(String codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
