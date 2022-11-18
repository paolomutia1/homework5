var video = document.querySelector("#videoplayer");

video.src = './assets/marchingband.mov'; 

window.addEventListener("load", function() {
    video.loop = false; 
    video.autoplay = false; 
    video.load(); // preload = "none"
})

//Adding the event listeners here 
document.querySelector("#play").addEventListener("click", 
    function() {
        video.play();  
        console.log("Current video speed: ", video.playbackRate);
        let videoTime = video.duration-video.currentTime; 
        console.log("Current time of the video: ", videoTime);
});
document.querySelector("#pause").addEventListener("click", 
    function() {
        video.pause();
        let videoTime = video.duration-video.currentTime; 
        console.log("Current time of the video: ", videoTime);
});

// Slow down the speed (2, 1, 0.5)
document.querySelector("#slower").addEventListener("click", function() { 
    if(video.playbackRate === 0.5) {
        console.log("Slowed down to: ", video.playbackRate);
        document.querySelector('#slower').innerHTML = "Video is at slowest speed!";
        document.querySelector('#faster').innerHTML = "Speed Up";
    } else if(video.playbackRate === 2) {
        video.playbackRate = 1;
        console.log("Slowed down to: ", video.playbackRate);
        document.querySelector('#faster').innerHTML = "Speed Up";
    } else if (video.playbackRate === 1) {
        video.playbackRate = 0.5;
        console.log("Slowed down to: ", video.playbackRate);
        document.querySelector('#faster').innerHTML = "Speed Up";
    } 
});

// Increase the speed (0.5, 1, 2)
document.querySelector("#faster").addEventListener("click", function() {
    if(video.playbackRate === 0.5) {
        video.playbackRate = 1;
        document.querySelector('#slower').innerHTML = "Slow Down";
        console.log("Video Speed Increased: ", video.playbackRate);
    } else if(video.playbackRate === 1) {
        video.playbackRate = 2;
        console.log("Fastest speed: expected value 2 ", video.playbackRate);
    } else if (video.playbackRate === 2) {
        document.querySelector('#faster').innerHTML = "Video is at fastest speed!";
    }
});

// Skip Ahead button 
function skip(value) {
    var video = document.querySelector("#videoplayer");
    video.currentTime += value; 
} 

document.querySelector("#skip").addEventListener('click', function(){
    let videoTime = video.currentTime; 
    console.log("Current time left: ", videoTime);
    if(videoTime >= video.duration) {
        video.pause();
        document.querySelector('#skip').innerHTML = "Restarted, skip ahead?";
        video.play();
    } else if (videoTime >= 0) {
        document.querySelector('#skip').innerHTML = "Skip Ahead";
        video.currentTime += 15;
        video.play();
        console.log("Current time left: ", videoTime);
        console.log("Video Duration: ", video.duration);
    }
});

var muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
    
    if(video.muted === true) {
        console.log("Video muted!");
        video.muted = false; 
        muteButton.innerHTML = 'Mute';
    } else {
        console.log("Video unmuted!");
        video.muted = true; 
        muteButton.innerHTML = 'Unmute';
    }
});

// Volume slider adjustment 
var slider = document.querySelector("#slider");

// Change is value changing constantly 
slider.addEventListener("change", function() { 
    video.volume = slider.value / 100; 
    document.querySelector('#volume').innerHTML = slider.value+"%"; 
}); 




