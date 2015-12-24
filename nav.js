$(function(){
		  $("#includedContent").load("bryanram.github.io/navigation-bar.html"); 
		  var sPath = window.location.pathname;
		  var sPage = sPath.substring(sPath.indexOf('/'), sPath.lastIndexOf('/'));
		  switch(sPage)
		  {
			case "index.html":
			break;
			
			case "WebProjects":
			var doc = document.getElementById("web");
			doc.className = doc.className + " active";
			break;
			
			case "Games":
			var doc = document.getElementById("game");
			doc.className = doc.className + " active";
			break;
		  }
});