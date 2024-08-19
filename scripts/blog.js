function carregarDados() {
  const filmes = JSON.parse(localStorage.getItem("filmes"));

  filmes.forEach((filme) => {
    const tr = document.createElement("tr");

    const nomeTituloTd = document.createElement("td");
    nomeTituloTd.innerText = filme.nome;
    tr.append(nomeTituloTd);

    const categoriaTituloTd = document.createElement("td");
    categoriaTituloTd.innerText = filme.categoria;
    tr.append(categoriaTituloTd);

    const dataTituloTd = document.createElement("td");
    dataTituloTd.innerText = filme.data;
    tr.append(dataTituloTd);

    const descricaoTituloTd = document.createElement("td");
    descricaoTituloTd.innerText = filme.descricao;
    tr.append(descricaoTituloTd);

    const acoesTd = document.createElement("td");
    const excluirBtn = document.createElement('button');
    excluirBtn.innerText = "Excluir"
    excluirBtn.id = filme.id
    acoesTd.appendChild(excluirBtn);

    excluirBtn.onclick = function() {
      const filmesSalvos = JSON.parse(localStorage.getItem("filmes"));
      const filmesFiltrados = filmesSalvos.filter((item) => item.id != this.id)

      localStorage.setItem('filmes', JSON.stringify(filmesFiltrados));

      carregarDados()
      location.reload()
    }

    tr.append(acoesTd);

    document.getElementById("dados-tabela").append(tr);
  });
}

document.addEventListener("DOMContentLoaded", carregarDados);

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav-hamburger").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}