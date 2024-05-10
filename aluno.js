// Aluno.js

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.disciplinas = [];
    }

    getNome() {
        return this.nome;
    }

    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }

    getDisciplinas() {
        return this.disciplinas;
    }

    limparDisciplinas() {
        this.disciplinas = [];
    }
}

// Exportar a classe para ser utilizada em outros arquivos
export default Aluno;
