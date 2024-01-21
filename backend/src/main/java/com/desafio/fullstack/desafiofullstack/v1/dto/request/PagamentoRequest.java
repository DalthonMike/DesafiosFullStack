package com.desafio.fullstack.desafiofullstack.v1.dto.request;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.sun.istack.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Date;

@Data
public class PagamentoRequest {

    private Long id;

    @NotNull
    private Long idBolsista;

    @NotNull
    private Date dataPagamento;

    @NotNull
    private BigDecimal valor;

    @NotNull
    private StatusPagamentoEnum status;
}
