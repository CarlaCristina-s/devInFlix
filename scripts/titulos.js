function carregarDados() {
  const filmesNaMemoria = JSON.parse(localStorage.getItem("filmes"))
  const lista = document.getElementById('form-film')

  filmesNaMemoria.forEach((filme) => {  
    const filmeDiv = document.createElement('div')
    filmeDiv.classList.add("item-filme")

    const img = document.createElement('img')
    img.setAttribute("width", "230px")
    img.setAttribute("height", "250px")
    img.style.objectFit = "cover"
    img.setAttribute('src', filme.foto)

    filmeDiv.append(img)

    const filmeH3 = document.createElement('h3')
    filmeH3.innerText = filme.nome

    filmeDiv.append(filmeH3)

    // const button = document.createElement('button')
    // button.innerText = "Deletar"
    // button.onclick = () => deletar(filme.id)
    
    // filmeDiv.append(button)

    lista.append(filmeDiv)
  })
}

document.addEventListener('DOMContentLoaded', carregarDados)

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav-hamburger").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}