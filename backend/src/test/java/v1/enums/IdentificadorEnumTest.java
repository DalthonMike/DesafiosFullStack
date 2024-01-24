package v1.enums;

import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class IdentificadorEnumTest {

    @Test
    void testGetCodigo() {
        IdentificadorEnum cpf = IdentificadorEnum.CPF;

        String codigo = cpf.getCodigo();

        assertEquals("CPF", codigo);
    }

    @Test
    void testGetDescricao() {
        IdentificadorEnum rg = IdentificadorEnum.RG;

        String descricao = rg.getDescricao();

        assertEquals("Registro Geral", descricao);
    }

    @Test
    void testSetCodigo() {
        IdentificadorEnum cnh = IdentificadorEnum.CNH;

        cnh.setCodigo("NOVO_CODIGO");

        assertEquals("NOVO_CODIGO", cnh.getCodigo());
    }

    @Test
    void testSetDescricao() {
        IdentificadorEnum passaporte = IdentificadorEnum.PASSAPORTE;

        passaporte.setDescricao("Nova Descrição");

        assertEquals("Nova Descrição", passaporte.getDescricao());
    }
}
