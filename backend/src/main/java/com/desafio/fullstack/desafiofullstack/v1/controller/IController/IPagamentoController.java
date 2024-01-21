package com.desafio.fullstack.desafiofullstack.v1.controller.IController;

import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.PagamentoRequest;
import com.desafio.fullstack.desafiofullstack.v1.dto.response.PagamentoResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IPagamentoController {

    @GetMapping("/todos")
    ResponseEntity<List<PagamentoResponse>> buscarTodos();

    @GetMapping("/bolsista/{idBolsista}")
    ResponseEntity<List<PagamentoResponse>> buscarPorIdBolsista(@PathVariable Long idBolsista);

    @PostMapping("/cadastrar")
    ResponseEntity<PagamentoResponse> cadastrar(@RequestBody PagamentoRequest request);

    @PostMapping("/editar")
    ResponseEntity editar(@RequestBody PagamentoRequest request);

}
