package com.desafio.fullstack.desafiofullstack.v1.controller;

import com.desafio.fullstack.desafiofullstack.v1.controller.IController.IBolsistaController;
import com.desafio.fullstack.desafiofullstack.v1.converter.request.BolsistaRequestConverter;
import com.desafio.fullstack.desafiofullstack.v1.converter.response.BolsistaResponseConverter;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.BolsistaResponse;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import com.desafio.fullstack.desafiofullstack.v1.repository.BolsistaRepository;
import com.desafio.fullstack.desafiofullstack.v1.service.BolsistaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bolsista")
public class BolsistaController implements IBolsistaController {

    private final BolsistaService bolsistaService;
    private final BolsistaRepository bolsistaRepository;
    private final BolsistaResponseConverter bolsistaResponseConverter;
    private final BolsistaRequestConverter bolsistaRequestConverter;

    public BolsistaController(BolsistaService bolsistaService, BolsistaRepository bolsistaRepository, BolsistaResponseConverter bolsistaResponseConverter, BolsistaRequestConverter bolsistaRequestConverter) {
        this.bolsistaService = bolsistaService;
        this.bolsistaRepository = bolsistaRepository;
        this.bolsistaResponseConverter = bolsistaResponseConverter;
        this.bolsistaRequestConverter = bolsistaRequestConverter;
    }

    @Override
    public ResponseEntity<List<BolsistaResponse>> buscarTodos() {
        List<BolsistaResponse> bolsistaResponses = bolsistaResponseConverter.toResponse(bolsistaService.buscarTodos());
        return ResponseEntity.ok(bolsistaResponses);
    }

    @Override
    public ResponseEntity<BolsistaResponse> buscarPorId(Long id) {
        Bolsista bolsista = bolsistaService.buscarPorId(id);
        return ResponseEntity.ok(bolsistaResponseConverter.toResponse(bolsista));
    }

    @Override
    public ResponseEntity<BolsistaResponse> cadastrar(BolsistaRequest request) {
        Bolsista bolsistaCadastrado = bolsistaService.cadastrar(bolsistaRequestConverter.toEntity(request));
        return ResponseEntity.ok(bolsistaResponseConverter.toResponse(bolsistaCadastrado));
    }

    @Override
    public ResponseEntity deletar(Long id) {
        bolsistaService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<List<BolsistaResponse>> buscarTodosAtivos() {
        List<BolsistaResponse> bolsistaResponses = bolsistaResponseConverter.toResponse(bolsistaService.buscarTodosAtivos());
        return ResponseEntity.ok(bolsistaResponses);
    }

}
