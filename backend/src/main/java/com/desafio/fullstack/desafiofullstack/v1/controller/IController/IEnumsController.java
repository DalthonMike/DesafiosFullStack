package com.desafio.fullstack.desafiofullstack.v1.controller.IController;

import com.desafio.fullstack.desafiofullstack.v1.Enums.BancoEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public interface IEnumsController {

    @GetMapping("/identificadores")
    ResponseEntity<IdentificadorEnum[]> buscarTodosIdentificadores();

    @GetMapping("/bancos")
    ResponseEntity<BancoEnum[]> bucarTodosBancos();

    @GetMapping("/status-pagamento")
    ResponseEntity<StatusPagamentoEnum[]> buscarTodosStatusPagamento();
}
