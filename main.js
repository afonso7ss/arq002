// main.js

const disciplinas = [];

function adicionarDisciplina() {
    const nomeDisciplina = document.getElementById('nomeDisciplina').value;
    if (nomeDisciplina.trim() !== '') {
        disciplinas.push(nomeDisciplina);
        exibirDisciplinas();
        document.getElementById('nomeDisciplina').value = '';
    }
}

function exibirDisciplinas() {
    const disciplinasAlunoSelect = document.getElementById('disciplinasAluno');
    disciplinasAlunoSelect.innerHTML = '';
    disciplinas.forEach((disciplina, index) => {
        const option = document.createElement('option');
        option.value = disciplina; // Use o nome da disciplina como valor
        option.text = disciplina;
        disciplinasAlunoSelect.appendChild(option);
    });
}

function cadastrarAluno() {
    const nomeAluno = document.getElementById('nomeAluno').value;
    const disciplinasAlunoSelect = document.getElementById('disciplinasAluno');
    const disciplinasSelecionadas = Array.from(disciplinasAlunoSelect.selectedOptions).map(option => option.value);

    if (nomeAluno.trim() !== '' && disciplinasSelecionadas.length > 0) {
        const aluno = {
            nome: nomeAluno,
            disciplinas: disciplinasSelecionadas
        };
        exibirAluno(aluno);
        document.getElementById('nomeAluno').value = '';
        disciplinasAlunoSelect.selectedIndex = -1;
    }
    return false; // Impede o envio do formulário
}

function exibirAluno(aluno) {
    const listaAlunos = document.getElementById('listaAlunos');
    const alunoItem = document.createElement('li');
    alunoItem.textContent = `${aluno.nome} - Disciplinas: ${aluno.disciplinas.join(', ')}`;
    listaAlunos.appendChild(alunoItem);
}
