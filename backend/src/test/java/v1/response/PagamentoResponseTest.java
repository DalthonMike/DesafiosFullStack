package v1.response;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

import java.math.BigDecimal;
import java.time.LocalDate;

class PagamentoResponseTest {

    @Test
    void testEquals() {
        PagamentoResponse pagamento1 = PagamentoResponse.builder().id(1L).build();
        PagamentoResponse pagamento2 = PagamentoResponse.builder().id(1L).build();
        PagamentoResponse pagamento3 = PagamentoResponse.builder().id(2L).build();

        assertThat(pagamento1).isEqualTo(pagamento2);
        assertThat(pagamento1).isNotEqualTo(pagamento3);
    }

    @Test
    void testHashCode() {
        PagamentoResponse pagamento1 = PagamentoResponse.builder().id(1L).build();
        PagamentoResponse pagamento2 = PagamentoResponse.builder().id(1L).build();
        PagamentoResponse pagamento3 = PagamentoResponse.builder().id(2L).build();

        assertThat(pagamento1.hashCode()).isEqualTo(pagamento2.hashCode());
        assertThat(pagamento1.hashCode()).isNotEqualTo(pagamento3.hashCode());
    }

    @Test
    void testBuilder() {
        LocalDate dataPagamento = LocalDate.now();

        PagamentoResponse pagamento = PagamentoResponse.builder()
                .id(1L)
                .idBolsista(2L)
                .dataPagamento(dataPagamento)
                .valor(BigDecimal.TEN)
                .status(StatusPagamentoEnum.PAGO)
                .build();

        assertThat(pagamento.getId()).isEqualTo(1L);
        assertThat(pagamento.getIdBolsista()).isEqualTo(2L);
        assertThat(pagamento.getDataPagamento()).isEqualTo(dataPagamento);
        assertThat(pagamento.getValor()).isEqualTo(BigDecimal.TEN);
        assertThat(pagamento.getStatus()).isEqualTo(StatusPagamentoEnum.PAGO);
    }
}

