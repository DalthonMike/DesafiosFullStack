package com.desafio.fullstack.desafiofullstack.v1.controller;

import com.desafio.fullstack.desafiofullstack.v1.controller.IController.IPagamentoController;
import com.desafio.fullstack.desafiofullstack.v1.converter.response.PagamentoResponseConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.PagamentoRequest;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import com.desafio.fullstack.desafiofullstack.v1.repository.PagamentoRepository;
import com.desafio.fullstack.desafiofullstack.v1.service.PagamentoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/pagamento")
public class PagamentoController implements IPagamentoController {

    private final PagamentoService pagamentoService;
    private final PagamentoResponseConverter pagamentoResponseConverter;

    public PagamentoController(PagamentoService pagamentoService, PagamentoResponseConverter pagamentoResponseConverter) {
        this.pagamentoService = pagamentoService;
        this.pagamentoResponseConverter = pagamentoResponseConverter;
    }


    @Override
    public ResponseEntity<List<PagamentoResponse>> buscarTodos() {
        List<Pagamento> pagamentos = pagamentoService.buscarTodos();

        return ResponseEntity.ok(pagamentoResponseConverter.toResponse(pagamentos));
    }

    @Override
    public ResponseEntity<List<PagamentoResponse>> buscarPorIdBolsista(Long idBolsista) {
        List<Pagamento> pagamentos = pagamentoService.buscarTodosPorIdBolsista(idBolsista);
        return ResponseEntity.ok(pagamentoResponseConverter.toResponse(pagamentos));
    }

    @Override
    public ResponseEntity<PagamentoResponse> cadastrar(PagamentoRequest request) {
        Pagamento pagamentoCadastrado = pagamentoService.cadastrar(request);
        return ResponseEntity.ok(pagamentoResponseConverter.toResponse(pagamentoCadastrado));
    }
}
