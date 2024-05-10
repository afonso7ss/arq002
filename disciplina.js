class Disciplina {
    constructor(nome) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    toString() {
        return this.nome;
    }
}

// Exportar a classe para ser utilizada em outros arquivos
export default Disciplina;