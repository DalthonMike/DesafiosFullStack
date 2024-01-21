package com.desafio.fullstack.desafiofullstack.v1.Enums;

public enum BancoEnum {

    BANCO_DO_BRASIL("001", "Banco do Brasil S.A."),
    CAIXA_ECONOMICA("104", "Caixa Econômica Federal"),
    BRADESCO("237", "Banco Bradesco S.A."),
    ITAU_UNIBANCO("341", "Banco Itaú Unibanco S.A."),
    SANTANDER("033", "Banco Santander (Brasil) S.A."),
    BTG_PACTUAL("208", "Banco BTG Pactual S.A."),
    VOTORANTIM("655", "Banco Votorantim S.A."),
    SAFRA("422", "Banco Safra S.A."),
    BANCO_DO_NORDESTE("004", "Banco do Nordeste do Brasil S.A."),
    BANCO_DA_AMAZONIA("003", "Banco da Amazônia S.A.");

    private String codigo;
    private String descricao;

    BancoEnum(String codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
