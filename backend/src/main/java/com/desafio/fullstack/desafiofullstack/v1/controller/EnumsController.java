package com.desafio.fullstack.desafiofullstack.v1.controller;

import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.desafio.fullstack.desafiofullstack.v1.controller.IController.IIdentificadorController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/enums")
public class EnumsController implements IIdentificadorController {

    @Override
    public ResponseEntity<IdentificadorEnum[]> buscarTodosIdentificadores() {
        return ResponseEntity.ok(IdentificadorEnum.values());
    }

    @Override
    public ResponseEntity<BancoEnum[]> bucarTodosBancos() {
        return ResponseEntity.ok(BancoEnum.values());
    }

    @Override
    public ResponseEntity<StatusPagamentoEnum[]> buscarTodosStatusPagamento() {
        return ResponseEntity.ok(StatusPagamentoEnum.values());
    }
}
