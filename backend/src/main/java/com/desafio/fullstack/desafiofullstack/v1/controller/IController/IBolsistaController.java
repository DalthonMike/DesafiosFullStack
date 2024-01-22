package com.desafio.fullstack.desafiofullstack.v1.controller.IController;

import com.desafio.fullstack.desafiofullstack.v1.dto.response.BolsistaResponse;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface IBolsistaController {
    
    @GetMapping("/todos")
    ResponseEntity<List<BolsistaResponse>> buscarTodos();

    @GetMapping("/{id}")
    ResponseEntity<BolsistaResponse> buscarPorId(@PathVariable Long id);

    @PostMapping("/cadastrar")
    ResponseEntity<BolsistaResponse> cadastrar(@RequestBody BolsistaRequest request);

    @DeleteMapping("/{id}")
    ResponseEntity deletar(@PathVariable Long id);
}
