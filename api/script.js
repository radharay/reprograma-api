const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest(); // ou XHR - metodo do js para fazer uma requisição e receber resposta.
  respostaDaBusca.open("GET", 
  `http://api.giphy.com/v1/gifs/search?q=${buscaGif()}&api_key=YHQ3hvTGPV2PFEFPe3oyFOEXYWRKUn1V`);
  respostaDaBusca.onload = carregaPostsComGifs;// não está chamando a função
  respostaDaBusca.onerror = erro; // qualquer coisa que não for 200 
  respostaDaBusca.send(); // enviar todo o pacote




}

function carregaPostsComGifs(){
   listaGifs = JSON.parse(this.responseText)["data"] // parse = converter; this(\escopo no js)= essa resposta; ou seja está convertendo para json.
   exibePosts();   

}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGifs.map(gif => `
        <div class="gif">
          <img src="${gif.images.fixed_height.url}"></img> 
        </div>
        `).join("")}
      </div>`;
}
  


