package v1.converter.request;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractEntityMapper;
import com.desafio.fullstack.desafiofullstack.v1.converter.request.PagamentoRequestConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.PagamentoRequest;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import com.desafio.fullstack.desafiofullstack.v1.service.BolsistaService;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class PagamentoRequestConverterTest {

    @Mock
    private PagamentoRequest pagamentoRequest;

    @Mock
    private BolsistaService bolsistaService;

    @InjectMocks
    private PagamentoRequestConverter pagamentoRequestConverter;

    @Test
    void testToEntity() {
        MockitoAnnotations.initMocks(this);

        when(pagamentoRequest.getId()).thenReturn(1L);
        when(pagamentoRequest.getIdBolsista()).thenReturn(2L);
        when(pagamentoRequest.getDataPagamento()).thenReturn(LocalDate.now());
        when(pagamentoRequest.getValor()).thenReturn(BigDecimal.valueOf(1000.00));
        when(pagamentoRequest.getStatus()).thenReturn(StatusPagamentoEnum.SOLICITADO);

        Bolsista bolsista = new Bolsista();
        bolsista.setId(2L);
        when(bolsistaService.buscarPorId(2L)).thenReturn(bolsista);

        Pagamento pagamento = pagamentoRequestConverter.toEntity(pagamentoRequest);

        assertEquals(1L, pagamento.getId());
        assertEquals(bolsista, pagamento.getBolsista());
        assertEquals(LocalDate.now(), pagamento.getDataPagamento());
        assertEquals(BigDecimal.valueOf(1000.00), pagamento.getValor());
        assertEquals(StatusPagamentoEnum.SOLICITADO, pagamento.getStatus());
    }
}

