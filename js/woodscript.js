$("#woodlogs").click(function(){
	data.woodExp = data.woodExp + 15;
	data.logs = data.logs + 1;
});

$("#woodoak").click(function(){
	data.woodExp = data.woodExp + 37.5;
	data.oaklogs = data.oaklogs + 1;
});

window.setInterval(function(){
	levelCheck();
	document.getElementById('woodlevel').innerHTML = "Level: " + data.woodLevel;
	document.getElementById('woodexp').innerHTML = "Exp: " + data.woodExp;
	document.getElementById('logtotal').innerHTML = "Logs: " + data.logs;
	document.getElementById('oaktotal').innerHTML = "Oak Logs: " + data.oaklogs;	
}, 1);

