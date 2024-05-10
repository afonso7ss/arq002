// EscolaFacade.js

import Aluno from './Aluno.js';
import Disciplina from './Disciplina.js';

class EscolaFacade {
    constructor() {
        this.alunos = [];
        this.disciplinas = [];
    }

    adicionarAluno(nome, disciplinasAluno) {
        const aluno = new Aluno(nome);
        for (const disciplina of disciplinasAluno) {
            aluno.adicionarDisciplina(disciplina);
        }
        this.alunos.push(aluno);
        console.log("Aluno adicionado com sucesso!");
    }

    removerAluno(nomeAluno) {
        const index = this.alunos.findIndex(aluno => aluno.getNome() === nomeAluno);
        if (index !== -1) {
            this.alunos.splice(index, 1);
            console.log("Aluno removido com sucesso!");
        } else {
            console.log("Aluno não encontrado!");
        }
    }

    adicionarDisciplina(nomeDisciplina) {
        const disciplina = new Disciplina(nomeDisciplina);
        this.disciplinas.push(disciplina);
        console.log("Disciplina adicionada com sucesso!");
    }

    listarAlunos() {
        console.log("Lista de Alunos:");
        for (const aluno of this.alunos) {
            console.log(`- ${aluno.getNome()}`);
            const disciplinasAluno = aluno.getDisciplinas();
            if (disciplinasAluno.length > 0) {
                console.log("  Disciplinas:");
                for (const disciplina of disciplinasAluno) {
                    console.log(`    - ${disciplina.getNome()}`);
                }
            }
        }
    }

    atualizarDisciplinasAluno(aluno, novasDisciplinas) {
        aluno.limparDisciplinas();
        for (const disciplina of novasDisciplinas) {
            aluno.adicionarDisciplina(disciplina);
        }
        console.log("Disciplinas do aluno atualizadas com sucesso!");
    }
}

// Exportar a classe para ser utilizada em outros arquivos
export default EscolaFacade;
