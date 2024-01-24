package v1.model;

import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

class PagamentoTest {

    @Test
    void testEquals() {
        Pagamento pagamento1 = Pagamento.builder().id(1L).dataPagamento(LocalDate.now()).valor(BigDecimal.TEN).build();
        Pagamento pagamento2 = Pagamento.builder().id(1L).dataPagamento(LocalDate.now()).valor(BigDecimal.TEN).build();
        Pagamento pagamento3 = Pagamento.builder().id(2L).dataPagamento(LocalDate.now()).valor(BigDecimal.ONE).build();

        assertThat(pagamento1).isEqualTo(pagamento2);
        assertThat(pagamento1).isNotEqualTo(pagamento3);
    }

    @Test
    void testHashCode() {
        Pagamento pagamento1 = Pagamento.builder().id(1L).dataPagamento(LocalDate.now()).valor(BigDecimal.TEN).build();
        Pagamento pagamento2 = Pagamento.builder().id(1L).dataPagamento(LocalDate.now()).valor(BigDecimal.TEN).build();
        Pagamento pagamento3 = Pagamento.builder().id(2L).dataPagamento(LocalDate.now()).valor(BigDecimal.ONE).build();

        assertThat(pagamento1.hashCode()).isEqualTo(pagamento2.hashCode());
        assertThat(pagamento1.hashCode()).isNotEqualTo(pagamento3.hashCode());
    }
}

