package br.com.larrisafalcao.fullstackweek.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.larrisafalcao.fullstackweek.domain.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
