//this file contains additional features written by me

//for variable size of the simulator according to screen size
var x=$(".simcir_outer_div").width();
x=x*0.90;

//the if else block decides which circuit to display according to user settings
if(sessionStorage.getItem("load_SR"))
{
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},
    {"type":"DC"},
    {"type":"OSC"},
    {"type":"NAND"},
    /*{"type":"8bitCounter"},
    {"type":"NumSrc"},
    {"type":"DSO"}*/
  ],
 "devices":[
    {"type":"NAND","id":"dev0","x":184,"y":32,"label":"NAND"},
    {"type":"NAND","id":"dev1","x":184,"y":80,"label":"NAND"},
    {"type":"In","id":"dev2","x":136,"y":24,"label":"~S"},
    {"type":"In","id":"dev3","x":136,"y":88,"label":"~R"},
    {"type":"Out","id":"dev4","x":232,"y":32,"label":"Q"},
    {"type":"Out","id":"dev5","x":232,"y":80,"label":"~Q"},
    {"type":"PushOff","id":"dev6","x":88,"y":24,"label":"PushOff"},
    {"type":"PushOff","id":"dev7","x":88,"y":88,"label":"PushOff"},
    {"type":"DC","id":"dev8","x":40,"y":56,"label":"DC"}
  ],
   "connectors":[
    {"from":"dev0.in0","to":"dev2.out0"},
    {"from":"dev0.in1","to":"dev1.out0"},
    {"from":"dev1.in0","to":"dev0.out0"},
    {"from":"dev1.in1","to":"dev3.out0"},
    {"from":"dev2.in0","to":"dev6.out0"},
    {"from":"dev3.in0","to":"dev7.out0"},
    {"from":"dev4.in0","to":"dev0.out0"},
    {"from":"dev5.in0","to":"dev1.out0"},
    {"from":"dev6.in0","to":"dev8.out0"},
    {"from":"dev7.in0","to":"dev8.out0"}
  ]
}

	//sets the Frequency of the OSC.
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[4]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[18]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("SR_module"))
    {
        $("#SRmod").attr("checked", true);
        counter.toolbox.push({
            "type":"SR-FF"
        });
    }

    if(sessionStorage.getItem("JK_module"))
    {
        $("#JKmod").attr("checked", true);
        counter.toolbox.push({
            "type":"JK-FF"
        });
    }

    if(sessionStorage.getItem("T_module"))
    {
        $("#Tmod").attr("checked", true);
        counter.toolbox.push({
            "type":"T-FF"
        }
	}
	//set all the settings as string inside div
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");

}

else if(sessionStorage.getItem("load_JK")){
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    
        {"type":"In"},
    {"type":"Out"},

    {"type":"DC"},
    {"type":"Joint"},




    {"type":"NOT"},
    
    {"type":"NAND"},

    {"type":"NOR"},

    {"type":"OSC"},

  ],
  
	"devices":[
    {"type":"RS-FF","id":"dev0","x":216,"y":112,"label":"RS-FF"},
    {"type":"RS-FF","id":"dev1","x":344,"y":112,"label":"RS-FF"},
    {"type":"NAND","numInputs":3,"id":"dev2","x":168,"y":80,"label":"NAND"},
    {"type":"NAND","numInputs":3,"id":"dev3","x":168,"y":144,"label":"NAND"},
    {"type":"NAND","id":"dev4","x":296,"y":80,"label":"NAND"},
    {"type":"NAND","id":"dev5","x":296,"y":144,"label":"NAND"},
    {"type":"NOT","id":"dev6","x":168,"y":24,"label":"NOT"},
    {"type":"In","id":"dev7","x":120,"y":64,"label":"J"},
    {"type":"In","id":"dev8","x":120,"y":112,"label":"CLK"},
    {"type":"In","id":"dev9","x":120,"y":160,"label":"K"},
    {"type":"Out","id":"dev10","x":424,"y":80,"label":"Q"},
    {"type":"Out","id":"dev11","x":424,"y":144,"label":"~Q"},
    {"type":"Toggle","id":"dev12","x":72,"y":64,"label":"Toggle"},
    {"type":"PushOn","id":"dev13","x":72,"y":112,"label":"PushOn"},
    {"type":"Toggle","id":"dev14","x":72,"y":160,"label":"Toggle"},
    {"type":"DC","id":"dev15","x":24,"y":112,"label":"DC"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev2.out0"},
    {"from":"dev0.in1","to":"dev3.out0"},
    {"from":"dev1.in0","to":"dev4.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev1.out1"},
    {"from":"dev2.in1","to":"dev7.out0"},
    {"from":"dev2.in2","to":"dev8.out0"},
    {"from":"dev3.in0","to":"dev8.out0"},
    {"from":"dev3.in1","to":"dev9.out0"},
    {"from":"dev3.in2","to":"dev1.out0"},
    {"from":"dev4.in0","to":"dev6.out0"},
    {"from":"dev4.in1","to":"dev0.out0"},
    {"from":"dev5.in0","to":"dev0.out1"},
    {"from":"dev5.in1","to":"dev6.out0"},
    {"from":"dev6.in0","to":"dev8.out0"},
    {"from":"dev7.in0","to":"dev12.out0"},
    {"from":"dev8.in0","to":"dev13.out0"},
    {"from":"dev9.in0","to":"dev14.out0"},
    {"from":"dev10.in0","to":"dev1.out0"},
    {"from":"dev11.in0","to":"dev1.out1"},
    {"from":"dev12.in0","to":"dev15.out0"},
    {"from":"dev13.in0","to":"dev15.out0"},
    {"from":"dev14.in0","to":"dev15.out0"}
  ]
};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[7]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[11]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("SR_module"))
    {
        $("#SRmod").attr("checked", true);
        counter.toolbox.push({
            "type":"SR-FF"
        });
    }

    if(sessionStorage.getItem("JK_module"))
    {
        $("#JKmod").attr("checked", true);
        counter.toolbox.push({
            "type":"JK-FF"
        });
    }

    if(sessionStorage.getItem("T_module"))
    {
        $("#Tmod").attr("checked", true);
        counter.toolbox.push({
            "type":"T-FF"
        }
    }

	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}



else if(sessionStorage.getItem("load_T")){
	var counter={
  "width":x,
  "height":800,
  "showToolbox":true,
  "toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},
    {"type":"DC"},
    
    {"type":"NOT"},
    {"type":"AND"},
    {"type":"NAND"},
    {"type":"OR"},
    {"type":"NOR"},
   
    {"type":"OSC"},
    
  ],
 "devices":[
    {"type":"JK-FF","id":"dev0","x":168,"y":48,"label":"JK-FF"},
    {"type":"In","id":"dev1","x":120,"y":32,"label":"T"},
    {"type":"In","id":"dev2","x":120,"y":80,"label":"CLK"},
    {"type":"Out","id":"dev3","x":248,"y":32,"label":"Q"},
    {"type":"Out","id":"dev4","x":248,"y":80,"label":"~Q"},
    {"type":"Toggle","id":"dev5","x":72,"y":32,"label":"Toggle"},
    {"type":"PushOn","id":"dev6","x":72,"y":80,"label":"PushOn"},
    {"type":"DC","id":"dev7","x":24,"y":56,"label":"DC"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev1.out0"},
    {"from":"dev0.in1","to":"dev2.out0"},
    {"from":"dev0.in2","to":"dev1.out0"},
    {"from":"dev1.in0","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev6.out0"},
    {"from":"dev3.in0","to":"dev0.out0"},
    {"from":"dev4.in0","to":"dev0.out1"},
    {"from":"dev5.in0","to":"dev7.out0"},
    {"from":"dev6.in0","to":"dev7.out0"}
  ]
};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[9]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[0]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("SR_module"))
	{
		$("#SRmod").attr("checked", true);
		counter.toolbox.push({
			"type":"SR-FF"
		});
	}

	if(sessionStorage.getItem("JK_module"))
	{
		$("#JKmod").attr("checked", true);
		counter.toolbox.push({
			"type":"JK-FF"
		});
	}

	if(sessionStorage.getItem("T_module"))
	{
		$("#Tmod").attr("checked", true);
		counter.toolbox.push({
			"type":"T-FF"
		});
	}

/*	if(sessionStorage.getItem("sipo_module"))
	{
		$("#sipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SIPO 3-Register"
		});
	}*/
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}




	

	var html=JSON.stringify(obj);
	document.querySelector(".simcir").innerHTML=html;
}





$("#SRmod").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("SR_module",1);
	}
	else
	{
		sessionStorage.removeItem("SR_module");
		
	}
});

$("#JKmod").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("JKmodule",1);
	}
	else
	{
		sessionStorage.removeItem("JK_module");
		
	}
});

$("#Tmod").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("T_module",1);
	}
	else
	{
		sessionStorage.removeItem("T_module");
		
	}
});




$("#load_SR").click(function(event) {
	sessionStorage.setItem("SR",1);
	sessionStorage.removeItem("JK");
	sessionStorage.removeItem("T");


	location.reload();
});

$("#load_JK").click(function(event) {
	sessionStorage.setItem("JK",1);
	sessionStorage.removeItem("SR");
	sessionStorage.removeItem("T");

	location.reload();
});

$("#load_T").click(function(event) {

	sessionStorage.setItem("T",1);
	sessionStorage.removeItem("SR");
	sessionStorage.removeItem("JK");
	
	location.reload();
});



$("#clear_workspace").click(function(event) {
	sessionStorage.removeItem("SR");
	sessionStorage.removeItem("JK");
	sessionStorage.removeItem("T");
	location.reload();
});

$("#freq").change(function(event) {
	sessionStorage.setItem("OSCfreq", parseInt(this.value,10));
});

$("#clear_settings").click(function(event) {
	sessionStorage.clear();
});