let tarefasSelecionadas = [];

function adicionar() {
  const tarefaSelecionada = document.getElementById(
    "tarefa_selecionada"
  ).value;

  const horaDaTarefa = document.getElementById("hora_da_tarefa").value;
  const dataDaTarefa = document.getElementById("data_da_tarefa").value;

  switch (tarefaSelecionada.toLowerCase()) {
    case "limpeza":
      tarefasSelecionadas.push({
        nome: tarefaSelecionada,
        hora: horaDaTarefa,
        data: dataDaTarefa,
      });
      break;
    default:
      tarefasSelecionadas = tarefasSelecionadas;
  }

  montarTabelaTarefas();
}

function montarTabelaTarefas() {
  const tabelaTarefas = document.getElementById("tabela_tarefas"); // pega a tabela no html pelo id
  tabelaTarefas.innerHTML = ""; // limpa ou zera toda a tabela

  for (let i = 0; i < tarefasSelecionadas.length; i++) {
    tabelaTarefas.innerHTML += `
      <tr>
        <td>${tarefasSelecionadas[i].nome}</td>
        <td>${tarefasSelecionadas[i].hora}</td>
        <td>${tarefasSelecionadas[i].data}</td>
        <td></td>
        <td>
          <button onclick="excluirTarefa(${i})">Excluir</button>
        </td>
      </tr>
    `;
  }
}

function limparMinhasTarefas() {
  document.getElementById("tarefa_selecionada").value = "";
  document.getElementById("hora_da_tarefa").value = "";
  document.getElementById("data_da_tarefa").value = "";
  tarefasSelecionadas = [];
  montarTabelaTarefas();
}

function excluirTarefa(indice) {
  const desejaExcluir = confirm(`Excluir tarefa ${tarefasSelecionadas[indice].nome}?`);
  if(desejaExcluir){
    tarefasSelecionadas.splice(indice, 1);
    montarTabelaTarefas();
  }
}

montarTabelaTarefas();
