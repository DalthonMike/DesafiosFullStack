package v1.converter.response;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.desafio.fullstack.desafiofullstack.v1.converter.response.PagamentoResponseConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class PagamentoResponseConverterTest {

    @Mock
    private Pagamento pagamento;

    @Mock
    private Bolsista bolsista;

    @InjectMocks
    private PagamentoResponseConverter pagamentoResponseConverter;

    @Test
    void testToResponse() {
        MockitoAnnotations.initMocks(this);

        when(pagamento.getId()).thenReturn(1L);
        when(pagamento.getBolsista()).thenReturn(bolsista);
        when(pagamento.getStatus()).thenReturn(StatusPagamentoEnum.PAGO);
        when(pagamento.getValor()).thenReturn(new BigDecimal("1000.00"));
        when(pagamento.getDataPagamento()).thenReturn(LocalDate.now());

        when(bolsista.getId()).thenReturn(1L);

        PagamentoResponse pagamentoResponse = pagamentoResponseConverter.toResponse(pagamento);

        assertEquals(1L, pagamentoResponse.getId());
        assertEquals(1L, pagamentoResponse.getIdBolsista());
        assertEquals(StatusPagamentoEnum.PAGO, pagamentoResponse.getStatus());
        assertEquals(new BigDecimal("1000.00"), pagamentoResponse.getValor());
        assertEquals(LocalDate.now(), pagamentoResponse.getDataPagamento());
    }
}

