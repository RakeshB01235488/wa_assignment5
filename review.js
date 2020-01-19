
$(document).ready(function(){
    $('#nextBtn').click(function() {
       console.log("Called Review Button Next")
       $("#nextBtn").html('Continue');
	   
    }); 
});


//function to update progress
function loadGraph() {
	//get the progress element
	loadData = [1,2,3,4,5];
	
	//alert("Demo Button Change");
	var x = document.getElementById("nextBtn").textContent;
	//alert(x);
	var i;
	for (i = 0; i < loadData.length; i++) { 
	  if(x == "Continue")
		window.location.href = 'download.html';
	}

	
}