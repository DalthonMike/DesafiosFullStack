package v1.controller;

import com.desafio.fullstack.desafiofullstack.v1.repository.BolsistaRepository;
import com.desafio.fullstack.desafiofullstack.v1.service.BolsistaService;
import org.mockito.InjectMocks;
import org.mockito.Mock;

public class PagamentoControllerTest {

    @Mock
    private BolsistaRepository bolsistaRepository;

    @InjectMocks
    private BolsistaService bolsistaService;
}
