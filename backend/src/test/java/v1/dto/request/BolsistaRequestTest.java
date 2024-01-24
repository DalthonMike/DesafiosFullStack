package v1.dto.request;

import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class BolsistaRequestTest {

    @Test
    void testGetterAndSetter() {
        BolsistaRequest bolsistaRequest = new BolsistaRequest();
        bolsistaRequest.setId(1L);
        bolsistaRequest.setNome("Fulano");
        bolsistaRequest.setNumeroAgencia(1234L);
        bolsistaRequest.setNumeroConta(56789L);
        bolsistaRequest.setIdentificador(IdentificadorEnum.CPF);
        bolsistaRequest.setBanco(BancoEnum.BANCO_DO_BRASIL);
        bolsistaRequest.setNumeroIdentificador(12345678901L);

        assertThat(bolsistaRequest.getId()).isEqualTo(1L);
        assertThat(bolsistaRequest.getNome()).isEqualTo("Fulano");
        assertThat(bolsistaRequest.getNumeroAgencia()).isEqualTo(1234L);
        assertThat(bolsistaRequest.getNumeroConta()).isEqualTo(56789L);
        assertThat(bolsistaRequest.getIdentificador()).isEqualTo(IdentificadorEnum.CPF);
        assertThat(bolsistaRequest.getBanco()).isEqualTo(BancoEnum.BANCO_DO_BRASIL);
        assertThat(bolsistaRequest.getNumeroIdentificador()).isEqualTo(12345678901L);
    }


    @Test
    void testEqualsAndHashCode() {
        BolsistaRequest bolsistaRequest1 = new BolsistaRequest();
        bolsistaRequest1.setId(1L);
        bolsistaRequest1.setNome("Fulano");
        bolsistaRequest1.setNumeroAgencia(1234L);
        bolsistaRequest1.setNumeroConta(56789L);
        bolsistaRequest1.setIdentificador(IdentificadorEnum.CPF);
        bolsistaRequest1.setBanco(BancoEnum.BANCO_DO_BRASIL);
        bolsistaRequest1.setNumeroIdentificador(12345678901L);

        BolsistaRequest bolsistaRequest2 = new BolsistaRequest();
        bolsistaRequest2.setId(1L);
        bolsistaRequest2.setNome("Fulano");
        bolsistaRequest2.setNumeroAgencia(1234L);
        bolsistaRequest2.setNumeroConta(56789L);
        bolsistaRequest2.setIdentificador(IdentificadorEnum.CPF);
        bolsistaRequest2.setBanco(BancoEnum.BANCO_DO_BRASIL);
        bolsistaRequest2.setNumeroIdentificador(12345678901L);

        assertThat(bolsistaRequest1).isEqualTo(bolsistaRequest2);
        assertThat(bolsistaRequest1.hashCode()).isEqualTo(bolsistaRequest2.hashCode());
    }

    @Test
    void testToString() {
        BolsistaRequest bolsistaRequest = new BolsistaRequest();
        bolsistaRequest.setId(1L);
        bolsistaRequest.setNome("Fulano");
        bolsistaRequest.setNumeroAgencia(1234L);
        bolsistaRequest.setNumeroConta(56789L);
        bolsistaRequest.setIdentificador(IdentificadorEnum.CPF);
        bolsistaRequest.setBanco(BancoEnum.BANCO_DO_BRASIL);
        bolsistaRequest.setNumeroIdentificador(12345678901L);

        assertThat(bolsistaRequest.toString())
                .contains("id=1", "nome=Fulano", "numeroAgencia=1234", "numeroConta=56789",
                        "identificador=CPF", "banco=BANCO_DO_BRASIL", "numeroIdentificador=12345678901");
    }
}

