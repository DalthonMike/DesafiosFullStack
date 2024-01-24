package com.desafio.fullstack.desafiofullstack.v1.Enums;

public enum BancoEnum {

    BANCO_DO_BRASIL("BANCO_DO_BRASIL", "Banco do Brasil S.A."),
    CAIXA_ECONOMICA("CAIXA_ECONOMICA", "Caixa Econômica Federal"),
    BRADESCO("BRADESCO", "Banco Bradesco S.A."),
    ITAU_UNIBANCO("ITAU_UNIBANCO", "Banco Itaú Unibanco S.A."),
    SANTANDER("SANTANDER", "Banco Santander (Brasil) S.A."),
    BTG_PACTUAL("BTG_PACTUAL", "Banco BTG Pactual S.A."),
    VOTORANTIM("VOTORANTIM", "Banco Votorantim S.A."),
    SAFRA("SAFRA", "Banco Safra S.A."),
    BANCO_DO_NORDESTE("BANCO_DO_NORDESTE", "Banco do Nordeste do Brasil S.A."),
    BANCO_DA_AMAZONIA("BANCO_DA_AMAZONIA", "Banco da Amazônia S.A.");

    private String codigo;
    private String descricao;

    BancoEnum(String codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
