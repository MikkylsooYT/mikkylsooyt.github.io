$("#save").click(function(){
	saveGame();
});

$("#load").click(function(){
	loadGame();
});

$("#delete").click(function(){
	deleteGame();
});

function saveGame(){
	localStorage['save'] = btoa(JSON.stringify(data));
	alert("Game Saved");
};

function loadGame(){
	if (!localStorage['save']) return;
    var save_data = JSON.parse(atob(localStorage['save']));
    data = save_data;
	alert("Game Loaded");
};

function deleteGame(){
	localStorage.removeItem('save');
	data = start;
	alert("Game Deleted");
}