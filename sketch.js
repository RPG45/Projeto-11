var path, pathImg;
var boy, boyImg;
var leftBoundary, rightBoundary;

function preload() {
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
    createCanvas(400, 400);

    //Fundo em movimento - codigo na plataforma
    path=createSprite (200,200);
    path.addImage(pathImg)
    path.velocityY = 4;
    path.scale = 1.2;

    //Menino que corre
    boy = createSprite(180, 340, 30, 30);
    boy.addAnimation("JakeRunning", boyImg);
    boy.scale = 0.08;
    
    //Boundary (Limite) esquerdo
    leftBoundary = createSprite(0, 0, 100, 800);
    leftBoundary.visible = false;

    //Crie Boundary direito 
    rightBoundary = createSprite(400, 0, 100, 800);
    rightBoundary.visible = false;

}

function draw() {
    background(0);

    path.velocityY = 4;

    //Menino se movendo no eixe X com o mouse - codigo na plataforma
    boy.x = World.mouseX;

    //Criar bordas e colisão - codigo na plataforma
    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);

    //código para reiniciar o fundo - Usar condicional do projeto 10 como refencia 

    if(path.y>400){
        path.y = height/2;
    }


    drawSprites();
}



