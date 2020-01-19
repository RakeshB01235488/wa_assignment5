
$(document).ready(function(){
    $('#runTest').click(function() {
       console.log("Called RunTest")
       $('#pbar').show();
    });
	$('#prog').on( "progressbarcomplete", function( event, ui ) {
		window.location.href = 'review.html'; 
	} ); 
});

//current progress
var currProgress = 0;
//is the task complete
var done = false;
//total progress amount
var total = 100;

//function to update progress
function startProgress() {
	//get the progress element
	var prBar = document.getElementById("prog");
	//get the start button
	var startButt = document.getElementById("runTest");
	//get the textual element
	var val = document.getElementById("numValue");
	//disable the button while the task is unfolding
	startButt.disabled=true;
	//update the progress level
	prBar.value = currProgress;
	//update the textual indicator
	val.innerHTML = Math.round((currProgress/total)*100)+"%";
	//increment the progress level each time this function executes
	currProgress++;
	//check whether we are done yet
	if(currProgress>100) done=true;
	//check whether we are done yet
	if(!done)
		setTimeout("startProgress()", 100);
	//task done, enable the button and reset variables
	else
	{
		document.getElementById("runTest").disabled = false;
		done = false;
		currProgress = 0;
		//link("review.html");
		
	}
	
	if(currProgress==0)
		window.location.href = 'review.html';
}