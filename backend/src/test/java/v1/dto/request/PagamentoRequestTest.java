package v1.dto.request;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.PagamentoRequest;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

public class PagamentoRequestTest {

    @Test
    void testGetterAndSetter() {
        PagamentoRequest pagamentoRequest = new PagamentoRequest();
        pagamentoRequest.setId(1L);
        pagamentoRequest.setIdBolsista(2L);
        pagamentoRequest.setDataPagamento(LocalDate.now());
        pagamentoRequest.setValor(BigDecimal.valueOf(100.0));
        pagamentoRequest.setStatus(StatusPagamentoEnum.CANCELADO);

        assertThat(pagamentoRequest.getId()).isEqualTo(1L);
        assertThat(pagamentoRequest.getIdBolsista()).isEqualTo(2L);
        assertThat(pagamentoRequest.getDataPagamento()).isEqualTo(LocalDate.now());
        assertThat(pagamentoRequest.getValor()).isEqualTo(BigDecimal.valueOf(100.0));
        assertThat(pagamentoRequest.getStatus()).isEqualTo(StatusPagamentoEnum.CANCELADO);
    }

    @Test
    void testEqualsAndHashCode() {
        PagamentoRequest pagamentoRequest1 = new PagamentoRequest();
        pagamentoRequest1.setId(1L);
        pagamentoRequest1.setIdBolsista(2L);
        pagamentoRequest1.setDataPagamento(LocalDate.now());
        pagamentoRequest1.setValor(BigDecimal.TEN);
        pagamentoRequest1.setStatus(StatusPagamentoEnum.PAGO);

        PagamentoRequest pagamentoRequest2 = new PagamentoRequest();
        pagamentoRequest2.setId(1L);
        pagamentoRequest2.setIdBolsista(2L);
        pagamentoRequest2.setDataPagamento(LocalDate.now());
        pagamentoRequest2.setValor(BigDecimal.TEN);
        pagamentoRequest2.setStatus(StatusPagamentoEnum.PAGO);

        assertThat(pagamentoRequest1).isEqualTo(pagamentoRequest2);
        assertThat(pagamentoRequest1.hashCode()).isEqualTo(pagamentoRequest2.hashCode());
    }

    @Test
    void testToString() {
        PagamentoRequest pagamentoRequest = new PagamentoRequest();
        pagamentoRequest.setId(1L);
        pagamentoRequest.setIdBolsista(2L);
        pagamentoRequest.setDataPagamento(LocalDate.now());
        pagamentoRequest.setValor(BigDecimal.TEN);
        pagamentoRequest.setStatus(StatusPagamentoEnum.PAGO);

        assertThat(pagamentoRequest.toString())
                .contains("id=1", "idBolsista=2", "dataPagamento=" + LocalDate.now(),
                        "valor=10", "status=PAGO");
    }
}

