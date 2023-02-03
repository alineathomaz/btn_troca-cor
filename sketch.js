var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() 
{
  createCanvas(400, 400);

  //botão que chama a função para trocar fundo para vermelho
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  //botão que chama a função para trocar fundo para verde
  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);  
}

function draw() 
{
  //a cor de fundo forma a cor de acordo com o sistema RGB com base nas variáveis
  background(r, g, b);
}

//função para o fundo vermelho
function red_bg()
{
  r = 255;
  g = 0;
  b =0;
}

//função para o fundo verde
function green_bg()
{
  r = 0;
  g = 255;
  b =0;
}