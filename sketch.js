let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();

}

function palavraAleatoria() {
    let palavras = ["carat cake", "smoothie", "hello future", "hot sauce", "box"];
  return random(palavras);
  
}

function inicializaCores() {
  background("brown");
  fill("orange");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
   let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial
}


function draw() {
  inicializaCores();
  
  let maximo = width;
  let minimo = 0;
  
  
 let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
}

function lugaresBacanasParaPassear(diaDaSemana, bairro)
{
  // return ??
}
