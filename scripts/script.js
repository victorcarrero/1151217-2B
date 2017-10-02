
var sec;
var i=0;
	function mostra(con){
		
		var contenido=$(con).html();
		
		
		$("#mostrar").html(contenido);
			
		$("#myModal").modal();
	}
	 
	$(document).ready(function(){
	    $("#registry").click(function(){
	    	if(i==0){
	    		sec=$("section").html();
	    		i++;
	    	}
	    	
	       $("section").load("forms/form.html");
	    });
	});

	$(document).ready(function(){
	    $("#contacto").click(function(){
	    	
	       $("section").load("forms/contacto.html");
	    });
	});
	
	$(document).ready(function(){
	    $("#index").click(function(){
	       $("section").html(sec);
	    });
	});