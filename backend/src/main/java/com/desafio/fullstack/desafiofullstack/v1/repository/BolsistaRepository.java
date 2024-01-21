package com.desafio.fullstack.desafiofullstack.v1.repository;

import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BolsistaRepository extends JpaRepository<Bolsista, Long> {

    List<Bolsista> findAll();

    Optional<Bolsista> findById(Long id);

    Bolsista findByIdentificadorAndNumeroIdentificador(IdentificadorEnum identificadorEnum, String numeroIdentificador);

}
