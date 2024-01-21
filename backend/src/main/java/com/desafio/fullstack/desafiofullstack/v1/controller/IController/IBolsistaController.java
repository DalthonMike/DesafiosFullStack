package com.desafio.fullstack.desafiofullstack.v1.controller.IController;

import com.desafio.fullstack.desafiofullstack.v1.dto.response.BolsistaResponse;
import com.desafio.fullstack.desafiofullstack.v1.dto.request.BolsistaRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IBolsistaController {
    
    @GetMapping("/todos")
    ResponseEntity<List<BolsistaResponse>> buscarTodos();

    @PostMapping("/cadastrar")
    ResponseEntity<BolsistaResponse> cadastrar(@RequestBody BolsistaRequest request);
}
