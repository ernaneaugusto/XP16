const contentItems = document.querySelector("#content-items");
const url = "http://airbnb.douglasmaia.com/api/properties";
let response = "";

fetch("http://airbnb.douglasmaia.com/api/properties")
    .then(response => response.json())
    .then(data => getHomes(data));

function getHomes(dados){
    dados.map(item => {
        response += `<article class="col-lg-4 col-12">
            <div class="item-quarto">
                <img src="${item.photo}" title="${item.name}" alt="${item.name}" class="img-fluid img-quarto" />
                <div class="infos-quarto d-flex">
                    <h2 class="titulo-quarto">${item.name}</h2>
                    <p class="tipo-quarto">${item.property_type}</p>
                    <p class"local-quarto">${item.city} / ${item.state}</p>
                    <p class="preco-quarto">
                        <span class="promo-quarto">Por apenas</span>
                        <span class="valor-quarto">R$ ${item.price}</span>
                    </p>        
                </div>
            </div>
        </article>`;
    });
    contentItems.innerHTML = response;    
}
