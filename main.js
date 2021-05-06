song = "";
song2= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("frozen.mp3")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Initialized')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);


        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY)
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY)
    }

}

function draw() {
    image(video, 0,0,600,500);

    fill("79c5e7");
    stroke("79c5e7");

    songPlayTrueOrFalse = song.isPlaying();


    if(scoreLeftWrist > 0.2) {
        circle(leftWristX,leftWristY,20);
        song2.stop();
    }
  
    if(song.isPlaying() = false) { 
        song2.play();
        document.getElementById("songname").innerHTML = "harry potter remix";
    }


}
