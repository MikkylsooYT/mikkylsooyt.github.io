function levelCheck(){
	if(data.woodExp>=83){
		data.woodLevel = 2;
	}
	if(data.woodExp>=174){
		data.woodLevel = 3;
	}
	if(data.woodExp>=276){
		data.woodLevel = 4;
	}
	if(data.woodExp>=388){
		data.woodLevel = 5;
	}
	if(data.woodExp>=512){
		data.woodLevel = 6;
	}
	if(data.woodExp>=650){
		data.woodLevel = 7;
	}
	if(data.woodExp>=801){
		data.woodLevel = 8;
	}
	if(data.woodExp>=969){
		data.woodLevel = 9;
	}
	if(data.woodExp>=1154){
		data.woodLevel = 10;
	}
	if(data.woodExp>=1358){
		data.woodLevel = 11;
	}
	if(data.woodExp>=1584){
		data.woodLevel = 12;
	}
	if(data.woodExp>=1833){
		data.woodLevel = 13;
	}
	if(data.woodExp>=2107){
		data.woodLevel = 14;
	}
	if(data.woodExp>=2411){
		data.woodLevel = 15;
		$("#woodoak").css("display", "inline");
	}
	};