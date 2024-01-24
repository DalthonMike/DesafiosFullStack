package com.desafio.fullstack.desafiofullstack.v1.dto.response;

import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusAtividade;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BolsistaResponse {

    private Long id;

    private String nome;

    private LocalDate dataCadastro;

    private Long numeroAgencia;

    private Long numeroConta;

    private IdentificadorEnum identificador;

    private BancoEnum banco;

    private Long numeroIdentificador;

    private List<PagamentoResponse> pagamentos;

    private StatusAtividade atividade;

}
