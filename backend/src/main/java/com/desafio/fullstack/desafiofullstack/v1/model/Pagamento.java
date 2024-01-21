package com.desafio.fullstack.desafiofullstack.v1.model;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalDate;

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
    private LocalDate dataPagamento;

    @Column(nullable = false)
    private BigDecimal valor;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StatusPagamentoEnum status;

    @ManyToOne
    @JoinColumn(name = "bolsista_id")
    private Bolsista bolsista;

}
