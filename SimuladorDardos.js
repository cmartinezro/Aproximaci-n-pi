function line(x1,y1,x2,y2){
	x1=+x1;
	y1=+y1;
	x2=+x2;
	y2=+y2;

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
}

function circulo(){
	var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 250, 0, 2 * Math.PI);
ctx.stroke();

}
function TotalDardos(dardos){
		document.getElementById("dardos").value= dardos;
}

function DardosDentro(Dardos){
		document.getElementById("dardos_dentro").value= Dardos;
}

function ñau(TG,GDC){
		document.getElementById("ñau").value= 4*parseInt(GDC)/parseInt(TG);
}

function dibujocirc(posx,posy,size,color){
	var canvas = document.getElementById("canvas1");
	var context = canvas.getContext('2d');
	context.beginPath();
	context.fillStyle = color;
	context.strokeStyle="black";
	context.arc(posx, posy, size, 0, 2 * Math.PI, false);
	context.fill();
	context.stroke();
}

function MakeRandom(){
	var NumeroDardos = document.getElementById("dardos").value;
	var DardosDentroCirculo = document.getElementById("dardos_dentro").value;
	if (NumeroDardos >=300000){
		return;
	}
	var recta =0;

	posx = Math.floor(Math.random() * 500);
	posy= Math.floor(Math.random() * 500);
	size=Math.floor(Math.random() * 20);
	if(posx>0||posy>0){
		
		
		NumeroDardos = parseInt(NumeroDardos)+1;
		
		recta = Math.sqrt(Math.pow(posx-250,2)+Math.pow(posy-250,2));

		if(recta<250){
			DardosDentroCirculo = parseInt(DardosDentroCirculo)+1;
			dibujocirc(posx,posy,2,"red");
		}else{

			dibujocirc(posx,posy,2,"blue");
		}
		}
		TotalDardos(String(NumeroDardos));
		DardosDentro(String(DardosDentroCirculo));
		ñau(String(NumeroDardos),String(DardosDentroCirculo));
		circulo();
}
window.setInterval("MakeRandom()",10);

