package com.desafio.fullstack.desafiofullstack.v1.repository;

import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusPagamentoEnum;
import com.desafio.fullstack.desafiofullstack.v1.model.Pagamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PagamentoRepository extends JpaRepository<Pagamento, Long> {

    List<Pagamento> findAll();

    Optional<Pagamento> findById(Long id);

    List<Pagamento> findAllByBolsistaId(Long idBolsista);

    @Query("SELECT p FROM Pagamento p WHERE p.bolsista.id = :idBolsista AND p.status != :status ORDER BY CASE WHEN p.status = 'CANCELADO' THEN 1 ELSE 0 END, p.status")
    List<Pagamento> findAllByBolsistaIdAndStatusNot(Long idBolsista, StatusPagamentoEnum status);

}
