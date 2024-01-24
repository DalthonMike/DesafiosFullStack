package v1.converter.request;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractEntityMapper;
import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusAtividade;
import com.desafio.fullstack.desafiofullstack.v1.converter.request.BolsistaRequestConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class BolsistaRequestConverterTest {

    @Mock
    private BolsistaRequest bolsistaRequest;

    @InjectMocks
    private BolsistaRequestConverter bolsistaRequestConverter;

    @Test
    void testToEntity() {
        MockitoAnnotations.initMocks(this);

        when(bolsistaRequest.getId()).thenReturn(1L);
        when(bolsistaRequest.getNome()).thenReturn("Fulano");
        when(bolsistaRequest.getNumeroAgencia()).thenReturn(1234L);
        when(bolsistaRequest.getNumeroConta()).thenReturn(56789L);
        when(bolsistaRequest.getIdentificador()).thenReturn(IdentificadorEnum.CPF);
        when(bolsistaRequest.getBanco()).thenReturn(BancoEnum.BANCO_DO_BRASIL);
        when(bolsistaRequest.getNumeroIdentificador()).thenReturn(12345678901L);

        Bolsista bolsista = bolsistaRequestConverter.toEntity(bolsistaRequest);

        assertEquals(1L, bolsista.getId());
        assertEquals("Fulano", bolsista.getNome());
        assertEquals(LocalDate.now(), bolsista.getDataCadastro());
        assertEquals(1234, bolsista.getNumeroAgencia());
        assertEquals(56789, bolsista.getNumeroConta());
        assertEquals(IdentificadorEnum.CPF, bolsista.getIdentificador());
        assertEquals(BancoEnum.BANCO_DO_BRASIL, bolsista.getBanco());
        assertEquals(12345678901L, bolsista.getNumeroIdentificador());
        assertEquals(StatusAtividade.ATIVO, bolsista.getAtividade());
    }
}

