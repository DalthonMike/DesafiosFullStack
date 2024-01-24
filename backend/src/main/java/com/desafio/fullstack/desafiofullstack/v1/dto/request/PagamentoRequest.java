package com.desafio.fullstack.desafiofullstack.v1.dto.request;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.sun.istack.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class PagamentoRequest {

    private Long id;

    @NotNull
    private Long idBolsista;

    @NotNull
    private LocalDate dataPagamento;

    @NotNull
    private BigDecimal valor;

    private StatusPagamentoEnum status;
}
