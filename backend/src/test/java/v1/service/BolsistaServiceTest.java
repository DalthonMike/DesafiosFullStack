package v1.service;

import com.desafio.fullstack.desafiofullstack.v1.repository.BolsistaRepository;
import com.desafio.fullstack.desafiofullstack.v1.service.BolsistaService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

public class BolsistaServiceTest {

    @Mock
    private BolsistaRepository bolsistaRepository;

    @InjectMocks
    private BolsistaService bolsistaService;

    @Test
    void testBuscarTodos() {}
    @Test
    void testBuscarTodosAtivos() {}

    @Test
    void testBuscarPorId() {}

    @Test
    void testCadastrarBolsista() {}


}
