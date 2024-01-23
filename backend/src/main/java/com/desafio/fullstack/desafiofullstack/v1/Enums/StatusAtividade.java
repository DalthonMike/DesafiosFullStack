package com.desafio.fullstack.desafiofullstack.v1.Enums;

public enum StatusAtividade {

    ATIVO("ATIVO", "Ativo"),
    INATIVO("INATIVO", "Inativo");

    private String codigo;
    private String descricao;

    StatusAtividade(String codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
