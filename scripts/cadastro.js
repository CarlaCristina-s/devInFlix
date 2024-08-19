function cadastrarFilme(event) {
  const foto = document.getElementById("foto").value;
  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const data = document.getElementById("data").value;
  const descricao = document.getElementById("descricao").value;

  if (foto === "") {
    document.getElementById("foto").style.borderColor = "red";
    document.getElementById("foto").style.borderWidth = "2px";
    document.getElementById("error-foto").innerText = "Banner do filme é obrigatório";
  } 

  if (nome === "") {
    document.getElementById("nome").style.borderColor = "red";
    document.getElementById("nome").style.borderWidth = "2px";
    document.getElementById("error-nome").innerText =
      "Título do filme é obrigatório";
  } 

  if (categoria === "") {
    document.getElementById("categoria").style.borderColor = "red";
    document.getElementById("categoria").style.borderWidth = "2px";
    document.getElementById("error-categoria").innerText =
      "Por favor, selecione a categoria do filme";
  } 

  if (data === "") {
    document.getElementById("data").style.borderColor = "red";
    document.getElementById("data").style.borderWidth = "2px";
    document.getElementById("error-data").innerText =
      "Por favor, adicione a data";
  } 

  if (descricao === "") {
    document.getElementById("descricao").style.borderColor = "red";
    document.getElementById("descricao").style.borderWidth = "2px";
    document.getElementById("error-descricao").innerText =
      "Por favor, insira uma breve descrição do filme";
  } 

  if (foto && nome && categoria && data && descricao) {
    const filme = {
      id: Date.now(),
      foto: foto,
      nome: nome,
      categoria: categoria,
      data: data,
      descricao: descricao
    };

    let listaNoLocalStorage = JSON.parse(localStorage.getItem("filmes")); 
    if (listaNoLocalStorage === null) listaNoLocalStorage = [];
    listaNoLocalStorage.push(filme);
    localStorage.setItem("filmes", JSON.stringify(listaNoLocalStorage)); 

    document.getElementById("form-film").reset();
  }
}

document.getElementById("form-film").addEventListener("submit", cadastrarFilme); 

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav-hamburger").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}