litsa_categorias = []

class categoria {
    constructor(titulo, img, desc, marca) {
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca        
    }
}

lista_categorias.push(new categoria(`DANDANDAN`, `img/okarun.jpg`, `Anime de assombrações, maldições e tetas.`, `12 episodios`))

lista_categorias.forEach(categoria => {
    document.querySelector(`#categoriasItens`).innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                  <img src="${categoria.img}" class="img-fluid rounded-start" alt="Velha Turbo">
            </div>
            <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                  </div>
            </div>
        </div>
     </div>
    
    `
});