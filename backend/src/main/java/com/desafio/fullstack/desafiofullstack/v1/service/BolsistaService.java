package com.desafio.fullstack.desafiofullstack.v1.service;


import com.desafio.fullstack.desafiofullstack.v1.Enums.IdentificadorEnum;
import com.desafio.fullstack.desafiofullstack.v1.exception.NegocioException;
import com.desafio.fullstack.desafiofullstack.v1.model.Bolsista;
import com.desafio.fullstack.desafiofullstack.v1.repository.BolsistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BolsistaService {

    @Autowired
    private BolsistaRepository bolsistaRepository;

    public List<Bolsista> buscarTodos() {
        return bolsistaRepository.findAll();
    }

    public Bolsista buscarPorId(Long id) {
        return bolsistaRepository.findById(id).orElseThrow(() -> new NegocioException("Não foi possível encontrar um bolsista com esse identificador: " + id));
    }

    public Bolsista cadastrar(Bolsista bolsista) {

        if (!verificaIdentificadorENumeroJaCadastrado(bolsista.getIdentificador(), bolsista.getNumeroIdentificador())) {
            return bolsistaRepository.save(bolsista);
        } else {
            throw new NegocioException("Já existe um bolsista com o " + bolsista.getIdentificador().getCodigo() + ": " + bolsista.getNumeroIdentificador() + " informado!");
        }

    }

    public boolean verificaIdentificadorENumeroJaCadastrado(IdentificadorEnum identificador, String numeroIdentificador) {
        Bolsista byCpf = bolsistaRepository.findByIdentificadorAndNumeroIdentificador(identificador, numeroIdentificador);
        return Objects.nonNull(byCpf) ? true : false;
    }
}
