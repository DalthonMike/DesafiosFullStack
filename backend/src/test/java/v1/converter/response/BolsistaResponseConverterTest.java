package v1.converter.response;

import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusAtividade;
import com.desafio.fullstack.desafiofullstack.v1.converter.response.BolsistaResponseConverter;
import com.desafio.fullstack.desafiofullstack.v1.converter.response.PagamentoResponseConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.BolsistaResponse;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class BolsistaResponseConverterTest {

    @Mock
    private Bolsista bolsista;

    @Mock
    private PagamentoResponseConverter pagamentoResponseConverter;

    @InjectMocks
    private BolsistaResponseConverter bolsistaResponseConverter;

    @Test
    void testToResponse() {
        MockitoAnnotations.initMocks(this);

        when(bolsista.getId()).thenReturn(1L);
        when(bolsista.getNome()).thenReturn("Fulano");
        when(bolsista.getDataCadastro()).thenReturn(LocalDate.now());
        when(bolsista.getNumeroAgencia()).thenReturn(1234L);
        when(bolsista.getNumeroConta()).thenReturn(56789L);
        when(bolsista.getIdentificador()).thenReturn(IdentificadorEnum.CPF);
        when(bolsista.getBanco()).thenReturn(BancoEnum.BANCO_DO_BRASIL);
        when(bolsista.getNumeroIdentificador()).thenReturn(12345678901L);
        when(bolsista.getAtividade()).thenReturn(StatusAtividade.ATIVO);

        List<PagamentoResponse> pagamentos = new ArrayList<>();
        when(pagamentoResponseConverter.toResponse(bolsista.getPagamentos())).thenReturn(pagamentos);

        BolsistaResponse bolsistaResponse = bolsistaResponseConverter.toResponse(bolsista);

        assertEquals(1L, bolsistaResponse.getId());
        assertEquals("Fulano", bolsistaResponse.getNome());
        assertEquals(LocalDate.now(), bolsistaResponse.getDataCadastro());
        assertEquals(1234, bolsistaResponse.getNumeroAgencia());
        assertEquals(56789, bolsistaResponse.getNumeroConta());
        assertEquals(IdentificadorEnum.CPF, bolsistaResponse.getIdentificador());
        assertEquals(BancoEnum.BANCO_DO_BRASIL, bolsistaResponse.getBanco());
        assertEquals(12345678901L, bolsistaResponse.getNumeroIdentificador());
        assertEquals(pagamentos, bolsistaResponse.getPagamentos());
        assertEquals(StatusAtividade.ATIVO, bolsistaResponse.getAtividade());

        verify(pagamentoResponseConverter).toResponse(bolsista.getPagamentos());
    }
}


