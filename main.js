noseX=0;
noseY=0;

function preload() {
ball=loadImage("https://i.postimg.cc/L84vPHsF/icons8-red-circle-48.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet= ml5.poseNet(
    video, modelloaded
);

poseNet.on("pose", gotposees);
}

function modelloaded(){
 console.log("modalloaded");
}

function gotposees(results){
    if(results.length > 0){
        console.log(results);
    console.log("nose x="+ results [0].pose.nose.x);
    console.log("nose y="+ results [0].pose.nose.y);
    noseX=results[0].pose.nose.x-10;
    noseY=results[0].pose.nose.y-10;
    }
    }

function draw() {
image (video, 0, 0, 300, 300);
image ( ball, noseX, noseY, 25, 25);
}

function Take_Snap(){
    save('image.png');
}
