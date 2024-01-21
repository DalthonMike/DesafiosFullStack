package com.desafio.fullstack.desafiofullstack.v1.dto.response;

import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BolsistaResponse {

    private Long id;

    private String nome;

    private Date dataCadastro;

    private Long codigoBanco;

    private Long numeroAgencia;

    private Long numeroConta;

    private IdentificadorEnum identificadorEnum;

    private String numeroIdentificador;

    private List<Pagamento> pagamentos;

}
