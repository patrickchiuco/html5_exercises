var body_element;
var canvas_element;
var video_element;
var render_button;
var pause_button;
var restart_button
var filter_toggle;
var ctx;



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
  body_element = document.getElementById("document-body");
  canvas_element = document.getElementById("video-canvas");
  video_element = document.getElementById("video-footage");
  render_button = document.getElementById("render-video");
  pause_button = document.getElementById("pause-video");
  restart_button = document.getElementById("restart-video");
  filter_toggle = document.getElementById("filter-select");

  ctx = canvas_element.getContext("2d");
  render_button.onclick = renderVideoOnCanvas;
  pause_button.onclick = pauseVideo;
  restart_button.onclick = restartVideo;
  filter_toggle.onchange = filterVideo
}

function renderVideoOnCanvas(){
  video_element.play();
  window.setInterval(function(){
    ctx.drawImage(video_element,0,0,400,300)
  },20);
}

function pauseVideo(){
  video_element.pause();
}

function restartVideo(){
  video_element.currentTime = 0;

}

function filterVideo(){
  var filter_value = filter_toggle.value;
  console.log(filter_value);
  if(filter_value == "default"){
    canvas_element.className = "";
  }else if(filter_value == "grayscale"){
    canvas_element.className = "grayscale";
  }else if(filter_value == "sepia"){
    canvas_element.className = "sepia";
  }else if(filter_value == "blur"){
    canvas_element.className = "blur";
  }else{
    console.log("Invalid Value");
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
