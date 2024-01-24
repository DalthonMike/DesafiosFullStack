package v1.enums;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class StatusPagamentoEnumTest {

    @Test
    void testGetCodigo() {
        StatusPagamentoEnum solicitado = StatusPagamentoEnum.SOLICITADO;

        String codigo = solicitado.getCodigo();

        assertEquals("SOLICITADO", codigo);
    }

    @Test
    void testGetDescricao() {
        StatusPagamentoEnum pago = StatusPagamentoEnum.PAGO;

        String descricao = pago.getDescricao();

        assertEquals("Pago", descricao);
    }
}

