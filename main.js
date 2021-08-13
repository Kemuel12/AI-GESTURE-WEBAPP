NoseX=0;
NoseY=0;
Difference=0;
LeftWristX=0;
RightWristX=0;

function setup()
{
    canvas=createCanvas(550,500);
    canvas.position(560,100);

    video=createCapture(VIDEO);
    video.size(550,500)
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialised");
}

function gotPoses(results)
{
 if(results.length>0)
 {
     console.log(results);
     NoseX=results[0].pose.nose.x;
     NoseY=results[0].pose.nose.y;
     console.log("NoseX=" +NoseX+ "NoseY="+NoseY);
    
    LeftWristX=results[0].pose.leftWrist.x;
    RightWristX=results[0].pose.rightWrist.x;
    Difference=floor(LeftWristX-RightWristX);

    console.log("LeftWristX=" +LeftWristX+"RightWristX="+RightWristX+"Difference="+Difference);
}

}


function draw()
{
    background('#e08536');
    fill("#42d4f5");
    stroke("#42d4f5");
    square(NoseX, NoseY, Difference);    
    document.getElementById("square_side_width").innerHTML="Width and Height of the square will be = "+Difference+"px";
}