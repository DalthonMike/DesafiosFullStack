package com.desafio.fullstack.desafiofullstack.v1.repository;

import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PagamentoRepository extends JpaRepository<Pagamento, Long> {

    List<Pagamento> findAll();

    Optional<Pagamento> findById(Long id);

    List<Pagamento> findAllByBolsistaId(Long idBolsista);
}
