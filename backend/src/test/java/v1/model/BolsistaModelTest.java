package v1.model;

import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class BolsistaTest {

    @Test
    void testEquals() {
        Bolsista bolsista1 = Bolsista.builder().id(1L).nome("João").build();
        Bolsista bolsista2 = Bolsista.builder().id(1L).nome("João").build();
        Bolsista bolsista3 = Bolsista.builder().id(2L).nome("Maria").build();

        assertThat(bolsista1).isEqualTo(bolsista2);
        assertThat(bolsista1).isNotEqualTo(bolsista3);
    }

    @Test
    void testHashCode() {
        Bolsista bolsista1 = Bolsista.builder().id(1L).nome("João").build();
        Bolsista bolsista2 = Bolsista.builder().id(1L).nome("João").build();
        Bolsista bolsista3 = Bolsista.builder().id(2L).nome("Maria").build();

        assertThat(bolsista1.hashCode()).isEqualTo(bolsista2.hashCode());
        assertThat(bolsista1.hashCode()).isNotEqualTo(bolsista3.hashCode());
    }
}



