package com.desafio.fullstack.desafiofullstack.v1.model;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "TBL_PAGAMENTO")
public class Pagamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date dataPagamento;

    @Column(nullable = false)
    private BigDecimal valor;

    @Column(nullable = false)
    private StatusPagamentoEnum status;

    @ManyToOne
    @JoinColumn(name = "bolsista_id")
    private Bolsista bolsista;

}
