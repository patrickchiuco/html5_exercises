var videoelement;
var audioelement;

var current_video;
var current_audio;

var playtvideobutton;
var stopvideobutton;
var nextvideobutton;

var playaudiobutton;
var stopvideobutton;
var nextaudiobutton;


var video_files = [
  {"video_name": "Mallard", "file_path":"footage/mallard.mp4", "poster":"images/mallard.png"},
  {"video_name": "Bird", "file_path":"footage/bird.mp4","poster":"images/bird.png"},
  {"video_name": "Bridge", "file_path":"footage/bridge.mp4","poster":"images/bridge.png"},
  {"video_name": "Clownfish", "file_path":"footage/clownfish.mp4","poster":"images/clownfish.png"},
  {"video_name": "Forest", "file_path":"footage/forest.mp4","poster":"images/forest.png"},
  {"video_name": "Squirrel", "file_path":"footage/squirrel.mp4","poster":"images/squirrel.png"},
];

var audio_files = [
  {"audio_name": "Dog", "file_path": "sounds/dog.mp3"},
  {"audio_name": "Barnowl","file_path":"sounds/barnowl.mp3"},
  {"audio_name": "Bees", "file_path": "sounds/bees.mp3"},
  {"audio_name": "Dolphin","file_path":"sounds/dolphin.mp3"},
  {"audio_name": "Elephant", "file_path": "sounds/elephant.mp3"},
];

function init(){
  videoelement = document.getElementById("video-element");
  audioelement = document.getElementById("audio-element");

  current_video = 0;
  current_audio = 0;

  playtvideobutton = document.getElementById("playvideo");
  stopvideobutton = document.getElementById("stopvideo");
  nextvideobutton = document.getElementById("nextvideo");
  prevvideobutton = document.getElementById("prevvideo");

  playaudiobutton = document.getElementById("playaudio");
  stopaudiobutton = document.getElementById("stopaudio");
  nextaudiobutton = document.getElementById("nextaudio");
  prevaudiobutton = document.getElementById("prevaudio");

  mallardlink = document.getElementById("mallard-thumb");
  birdlink = document.getElementById("bird-thumb");
  bridgelink = document.getElementById("bridge-thumb");
  clownfishlink = document.getElementById("clownfish-thumb");
  forestlink = document.getElementById("forest-thumb");
  squirrellink = document.getElementById("squirrel-thumb");


  playtvideobutton.onclick = playvideo;
  stopvideobutton.onclick = pausevideo;
  nextvideobutton.onclick = nextvideo;
  prevvideobutton.onclick = prevvideo;

  playaudiobutton.onclick = playaudio;
  stopaudiobutton.onclick = pauseaudio;
  nextaudiobutton.onclick = nextaudio;
  prevaudiobutton.onclick = prevaudio;

  name_of_current_video();
}

function set_name_of_current_video(name_of_video){
  var video_name_header = document.getElementById("name-of-video");
  if(typeof name_of_video == "undefined"){
    var current_video_name = video_files[current_video % video_files.length].video_name;

    if(video_name_header.innerHTML != ""){
      video_name_header.innerHTML = "";
    }
    video_name_header.innerHTML = current_video_name;
  }else{
    video_name_header.innerHTML = name_of_video;
  }

}

function playvideo(){
  videoelement.play();
}

function pausevideo(){
  videoelement.pause();
}

function nextvideo(){
  current_video++;
  videoelement.src = video_files[current_video % video_files.length].file_path;
  videoelement.load();
  set_name_of_current_video();
}

function loadVideo(name){
  if (name == "Mallard"){
    videoelement.src = video_files[0].file_path;
    videoelement.load();
    set_name_of_current_video("Mallard");
  }else if(name == "Bird"){
    videoelement.src = video_files[1].file_path;
    videoelement.load();
    set_name_of_current_video("Bird");
  }else if(name == "Bridge"){
    videoelement.src = video_files[2].file_path;
    videoelement.load();
    set_name_of_current_video("Bridge");
  }else if(name == "Clownfish"){
    videoelement.src = video_files[3].file_path;
    videoelement.load();
    set_name_of_current_video("Clownfish");
  }else if(name == "Forest"){
    videoelement.src = video_files[4].file_path;
    videoelement.load();
    set_name_of_current_video("Forest");
  }else if(name == "Squirrel"){
    videoelement.src = video_files[5].file_path;
    videoelement.load();
    set_name_of_current_video("Squirrel");
  }else{
    console.log("Unknown name");
  }

}

function prevvideo(){
  if(current_video-1 < 0){
    current_video = video_files.length-1;
  }else{
    --current_video;
  }
  videoelement.src = video_files[current_video % video_files.length].file_path;
  videoelement.load();
  set_name_of_current_video();
}

function playaudio(){
  audioelement.play();
}

function pauseaudio(){
  audioelement.pause();
}

function nextaudio(){
  current_audio++;
  audioelement.src = audio_files[current_audio % audio_files.length];
  audioelement.load();
}

function prevaudio(){
  if(current_audio - 1 < 0){
    current_audio = audio_files.length - 1;

  }else{
    --current_audio;
  }
  audioelement.src = audio_files[current_audio % audio_files.length];
  audioelement.load();
}

function set_current_audio_name(name_of_audio){
  var audio_header = document.getElementById("name-of-audio");
  var header_contents = audio_header.innerHTML;
  if(header_contents != ""){
    audio_header.innerHTML = "";
  }
  if(typeof name_of_audio == "undefined"){
    var current_audio_name = audio_files[current_audio % audio_files.length].audio_name;
    audio_header.src = current_audio_name;
  }else{
    audio_header.src = name_of_audio;
  }
}

function loadAudio(name){
  if (name == "Dog"){
    audioelement.src = audio_files[0].file_path;
    audioelement.load();
    set_current_audio_name("Dog");
  }else if (name == "Barnowl") {
    audioelement.src = audio_files[1].file_path;
    audioelement.load();
    set_current_audio_name("Barnowl");
  }else if (name == "Bees"){
    audioelement.src = audio_files[2].file_path;
    audioelement.load();
    set_current_audio_name("Bees");
  }else if (name == "Dolphin"){
    audioelement.src = audio_files[3].file_path;
    audioelement.load();
    set_current_audio_name("Dolphin");
  }else if (name == "Elephant"){
    audioelement.src = audio_files[4].file_path;
    audioelement.load();
    set_current_audio_name("Elephant");
  }else{
    console.log("Invalid name");
  }
}
