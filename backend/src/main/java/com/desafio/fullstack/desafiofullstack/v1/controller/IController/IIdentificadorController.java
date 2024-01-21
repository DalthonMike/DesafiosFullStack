package com.desafio.fullstack.desafiofullstack.v1.controller.IController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public interface IIdentificadorController {

    @GetMapping("/todos")
    ResponseEntity<?> buscarTodos();
}
