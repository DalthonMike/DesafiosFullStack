package v1.response;

import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusAtividade;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.BolsistaResponse;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class BolsistaResponseTest {

    @Test
    void testEquals() {
        BolsistaResponse bolsista1 = BolsistaResponse.builder().id(1L).nome("João").build();
        BolsistaResponse bolsista2 = BolsistaResponse.builder().id(1L).nome("João").build();
        BolsistaResponse bolsista3 = BolsistaResponse.builder().id(2L).nome("Maria").build();

        assertThat(bolsista1).isEqualTo(bolsista2);
        assertThat(bolsista1).isNotEqualTo(bolsista3);
    }

    @Test
    void testHashCode() {
        BolsistaResponse bolsista1 = BolsistaResponse.builder().id(1L).nome("João").build();
        BolsistaResponse bolsista2 = BolsistaResponse.builder().id(1L).nome("João").build();
        BolsistaResponse bolsista3 = BolsistaResponse.builder().id(2L).nome("Maria").build();

        assertThat(bolsista1.hashCode()).isEqualTo(bolsista2.hashCode());
        assertThat(bolsista1.hashCode()).isNotEqualTo(bolsista3.hashCode());
    }

    @Test
    void testBuilder() {
        LocalDate dataCadastro = LocalDate.now();
        List<PagamentoResponse> pagamentos = Collections.singletonList(new PagamentoResponse());

        BolsistaResponse bolsista = BolsistaResponse.builder()
                .id(1L)
                .nome("João")
                .dataCadastro(dataCadastro)
                .numeroAgencia(123L)
                .numeroConta(456L)
                .identificador(IdentificadorEnum.CPF)
                .banco(BancoEnum.BANCO_DO_BRASIL)
                .numeroIdentificador(789L)
                .pagamentos(pagamentos)
                .atividade(StatusAtividade.ATIVO)
                .build();

        assertThat(bolsista.getId()).isEqualTo(1L);
        assertThat(bolsista.getNome()).isEqualTo("João");
        assertThat(bolsista.getDataCadastro()).isEqualTo(dataCadastro);
        assertThat(bolsista.getNumeroAgencia()).isEqualTo(123L);
        assertThat(bolsista.getNumeroConta()).isEqualTo(456L);
        assertThat(bolsista.getIdentificador()).isEqualTo(IdentificadorEnum.CPF);
        assertThat(bolsista.getBanco()).isEqualTo(BancoEnum.BANCO_DO_BRASIL);
        assertThat(bolsista.getNumeroIdentificador()).isEqualTo(789L);
        assertThat(bolsista.getPagamentos()).isEqualTo(pagamentos);
        assertThat(bolsista.getAtividade()).isEqualTo(StatusAtividade.ATIVO);
    }
}

