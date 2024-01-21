package com.desafio.fullstack.desafiofullstack.v1.controller;

import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.controller.IController.IIdentificadorController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/identificador")
public class IdentificadorController implements IIdentificadorController {

    @Override
    public ResponseEntity<?> buscarTodos() {
        return ResponseEntity.ok(IdentificadorEnum.values());
    }
}
