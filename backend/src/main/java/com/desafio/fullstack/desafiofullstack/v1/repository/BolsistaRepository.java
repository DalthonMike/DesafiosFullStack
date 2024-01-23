package com.desafio.fullstack.desafiofullstack.v1.repository;

import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.Enums.StatusAtividade;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BolsistaRepository extends JpaRepository<Bolsista, Long> {

    @Query("SELECT b FROM Bolsista b ORDER BY CASE WHEN b.atividade = 'INATIVO' THEN 1 ELSE 0 END, b.atividade")
    List<Bolsista> findAll();

    List<Bolsista> findAllByAtividade(StatusAtividade status);

    Optional<Bolsista> findById(Long id);

    Bolsista findByIdentificadorAndNumeroIdentificador(IdentificadorEnum identificadorEnum, Long numeroIdentificador);

}
