package com.desafio.fullstack.desafiofullstack.v1.dto.response;


import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PagamentoResponse {

    private Long id;

    private Long idBolsista;

    private LocalDate dataPagamento;

    private StatusPagamentoEnum status;
}
