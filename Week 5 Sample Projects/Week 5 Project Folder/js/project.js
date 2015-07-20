// Constants
var body_element = document.querySelector("body");
var ensembles_ids = ["orchestra","concert-wind", "choir", "jazz-band","chamber-music","percussion","theater-opera","other"];

// Audition variables
var audition_other_checkbox;
var audition_other_desc;

// show|hideCompoBackgroundDesc variables
var has_composed_radio;
var compo_textarea;

// show|hideYearsPlayingPiano variables
var plays_piano_button;
var years_playing_piano_div;

//Add and remove current private lesson field variables
var current_plesson_field;
var private_lesson_div;

//Add new private class variables
var div_array_classes;
var input_ids_array;
var input_placeholder_array;
var input_title_array;
var label_text;
var input_type;

//Add instrument variables
var instrumentCounter;
var instrumentFieldset;

function init(){
  //Get other checkbox and show assign function to show description
  audition_other_checkbox = document.getElementById('audition-other');
  audition_other_desc = document.getElementById("other-description");
  audition_other_checkbox.onchange = describeDegree;

  // Get plays-piano radio button and assign function to show how many years
  plays_piano_button = document.getElementById("plays-piano");
  years_playing_piano_div = document.getElementById("years-playing-piano-div")

  //Get radio button confirming applicant has composed and show textarea to describe experience
  has_composed_radio = document.getElementById("has-composed-yes");
  compo_textarea = document.getElementById("compo-background-div");

  //Add and remove current lesson field by getting #private-lessons-div and adding fields using :after
  current_plesson_field = 2;
  private_lesson_div = document.getElementById("private-lessons-div");

  //
  div_array_classes = ["col-md-4", "col-md-2", "col-md-3", "col-md-3"];
  input_ids_array = ["instrument-voice", "years", "teachers-name","teachers-email"];
  input_placeholder_array = ["Voice Type or Instrument","","Name","Email"];
  input_title_array = ["Please type your voice type or instrument.","","Please type in your teacher's full name","Please type in your teacher's email."];
  label_text = ["Instrument/Voice","No. of Years","Teacher\'s Name","Teacher\'s Email"];
  input_type= ["text","number","text","email"];

  //
  instrumentCounter = 1;
  instrumentFieldset = document.getElementById("instrument-list-fieldset");
}

function describeDegree(){
  if(audition_other_checkbox.checked){
    audition_other_desc.style.display = "block";
    audition_other_desc.focus();
  }else{
    audition_other_desc.style.display = "none";
  }
}

function showYears(id){
  if(ensembles_ids.indexOf(id) > -1){
    var id_owner = document.getElementById(id);
    var years_div = document.getElementById("years-"+id);
    if(id_owner.checked){
      if(id == "other"){
        var other_desc = document.getElementById("mback-other-desc");
        other_desc.style.display = "block" ;
        other_desc.focus();
      }
      years_div.className="col-xs-7 col-md-3";
    }else{
      if(id == "other"){
        var other_desc = document.getElementById("mback-other-desc");
        other_desc.style.display = "none";
      }
      years_div.className="hidden-xs hidden-sm hidden-md hidden-lg";
    }
  }else{
    console.log("invalid id");
  }
}

function showCompoBackgroundDesc(){
  compo_textarea.className = "col-xs-12";
  }

function hideCompoBackgroundDesc(){
  compo_textarea.className = "hidden-xs hidden-sm hidden-md hidden-lg";
}

function showYearsPlayingPiano(){
  years_playing_piano_div.className = "col-xs-3";
}

function hideYearsPlayingPiano(){
  years_playing_piano_div.className = "hidden-xs hidden-sm hidden-md hidden-lg";
}

function addNewPrivateLessonField(){
  var outer_div_array = document.createElement("div");
  outer_div_array.className="row";
  var inner_div_array = [];
  var label_array = [];
  var test_div = document.querySelector("#private-lessons-div");
  current_plesson_field += 1;
  for(var i=0;i<4;i++){
    var new_div = document.createElement("div");
    var new_label = document.createElement("label");
    var new_input = document.createElement("input");
    var new_text = document.createTextNode(label_text[i]);
    if(i <= 1){
      new_div.className = "col-xs-6 " + div_array_classes[i];
    }else{
      new_div.className =  "col-xs-12 " + div_array_classes[i];
    }
    if(i == 0){
      new_input.setAttribute("list","instrument-voice-list");
    }else if(i == 1){
      new_input.min = 1;
      new_input.max = 90;
      new_input.value = 1;
    }
    new_input.type= input_type[i];
    new_input.className = "form-control";
    new_input.id = input_ids_array[i]+"-item"+current_plesson_field;
    new_input.placeholder = input_placeholder_array[i];
    new_input.title = input_title_array[i];
    new_label.htmlFor = input_ids_array[i] + "-item"+ current_plesson_field;
    outer_div_array.id = "new-item"+current_plesson_field;
    new_label.appendChild(new_text);
    new_div.appendChild(new_label);
    new_div.appendChild(new_input);
    outer_div_array.appendChild(new_div);
    test_div.appendChild(outer_div_array);
  }
}

function removeLatestPrivateLessonField(){
  var id = "new-item"+current_plesson_field
  var currentItems = document.getElementById("new-item"+current_plesson_field);
  if(current_plesson_field == 2){
    window.alert("Minimum number of fields is 2");
  }else{
    currentItems.remove();
    current_plesson_field = current_plesson_field - 1;
  }

}

function addInstrument(){
  //Increment counter before adding
  instrumentCounter += 1;
  //Outer div
  var newInstrumentRow = document.createElement("div");

  //Create Instrument Row
  var newInstrumentDiv = document.createElement("div");
  var newInstrumentLabel = document.createElement("label");
  var newInstrumentInput = document.createElement("input");
  var newInstrumentText = document.createTextNode("Instrument "+instrumentCounter+":")

  //Create years row
  var newYearsDiv = document.createElement("div");
  var newYearsLabel = document.createElement("label");
  var newYearsInput = document.createElement("input")
  var newYearsText = document.createTextNode("Number of Years:")

  newInstrumentRow.className = "row";
  newInstrumentRow.id = "instrument-row-"+instrumentCounter;
  newInstrumentDiv.className = "col-xs-6";
  newInstrumentDiv.setAttribute("id","instrument"+instrumentCounter+"-div")
  newInstrumentLabel.htmlFor = "instrument-item"+instrumentCounter;
  newInstrumentLabel.class="control-label";
  newInstrumentLabel.appendChild(newInstrumentText);
  newInstrumentInput.type="text";
  newInstrumentInput.title = "Please type the instrument's name";
  newInstrumentInput.placeholder = "Instrument name."
  newInstrumentInput.id = "instrument-item"+instrumentCounter;
  newInstrumentInput.className="form-control";

  newYearsDiv.className = "col-xs-3";
  newYearsDiv.setAttribute("id","instrument"+instrumentCounter+"-years-div");
  newYearsLabel.htmlFor = "instrument-item"+instrumentCounter+"-years";
  newYearsLabel.className = "control-label";
  newYearsLabel.appendChild(newYearsText);
  newYearsInput.type="number";
  newYearsInput.setAttribute("min",1);
  newYearsInput.setAttribute("max",90);
  newYearsInput.setAttribute("value",1);
  newYearsInput.setAttribute("id","instrument-item"+instrumentCounter+"-years");
  newYearsInput.setAttribute("title","Please indicate the number of years of experience you have with the instrument.");
  newYearsInput.setAttribute("class","form-control");

  newInstrumentDiv.appendChild(newInstrumentLabel);
  newInstrumentDiv.appendChild(newInstrumentInput);
  newYearsDiv.appendChild(newYearsLabel);
  newYearsDiv.appendChild(newYearsInput);
  newInstrumentRow.appendChild(newInstrumentDiv);
  newInstrumentRow.appendChild(newYearsDiv);

  instrumentFieldset.appendChild(newInstrumentRow);
}

function removeLatestInstrument(){
  var instrumentRow = document.getElementById("instrument-row-"+instrumentCounter);
  if(instrumentCounter == 1){
    window.alert("Minimum number of secondary instrument is 1");
  }else{
    instrumentRow.remove();
    instrumentCounter -= 1;
  }
}
