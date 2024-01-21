package com.desafio.fullstack.desafiofullstack.v1.Enums;

public enum IdentificadorEnum {

    CPF("CPF", "Cadastro de Pessoas Física"),
    RG("CPF", "Registro Geral"),
    CNH("CNH", "Carteira Nacional de Habilitação"),
    PASSAPORTE("PASSAPORTE", "Passaporte");

    private String codigo;
    private String descricao;

    IdentificadorEnum(String codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
