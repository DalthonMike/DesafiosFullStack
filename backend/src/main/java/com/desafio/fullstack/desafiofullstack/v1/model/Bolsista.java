package com.desafio.fullstack.desafiofullstack.v1.model;

import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "TBL_BOLSISTA")
public class Bolsista {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOLSISTA_SEQ")
    @SequenceGenerator(name = "BOLSISTA_SEQ", sequenceName = "BOLSISTA_SEQ", allocationSize = 1)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private Date dataCadastro;

    @Column(nullable = false)
    private Long codigoBanco;

    @Column(nullable = false)
    private Long numeroAgencia;

    @Column(nullable = false)
    private Long numeroConta;

    @Enumerated(EnumType.STRING)
    private IdentificadorEnum identificador;

    @Column(nullable = false)
    private String numeroIdentificador;

    @OneToMany(mappedBy = "bolsista")
    private List<Pagamento> pagamentos;
}

