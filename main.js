
var datum = prompt ("Unesite datum rodjenja");
var pol =  prompt("Unesite pol");

var c = datum.split(".");
var check = new Date(parseInt(c[1])-1, c[0]);

//Ovan
var OvanFrom = [21,03];
var OvanTo = [20,04];

//Bik
var BikFrom = [21,04];
var BikTo = [21,05];

//Blicanac
var BlizFrom = [22,05];
var BlizTo = [21,06];

//Rak
var RakFrom = [22,06];
var RakTo = [22,07];

//Lav
var LavFrom = [23,07];
var LavTo = [22,08];

//Devica
var DevFrom = [23,08];
var DevTo = [22,09];

//Vaga
var VagaFrom = [23,09];
var VagaTo = [23,10];

//Skorpija
var SkorpijaFrom = [24,10];
var SkorpijaTo = [22,11];

//Strelac
var StrelacFrom = [22,11];
var StrelacTo = [21,12];

//Jarac
var JaracFrom = [22,12];
var JaracTo = [21,01];

//Vodolija
var VodolijaFrom = [22,01];
var VodolijaTo = [19,02];

//Ribe
var RibeFrom = [20,02];
var RibeTo = [20,03];



function horoskop (){
	if (OvanFrom[0] <= c[0] && OvanFrom[1] == c[1] || OvanTo[0] >= c[0] && OvanTo[1] == c [1]){
		alert("Ovan");
	}
	else if (BikFrom[0] <= c[0] && BikFrom[1] == c[1] || BikTo[0] >= c[0] && BikTo[1] == c [1]){
		alert("Bik");
	}
	else if (BlizFrom[0] <= c[0] && BlizFrom[1] == c[1] || BlizTo[0] >= c[0] && BlizTo[1] == c [1]){
		alert("Blizanac");
	}
		else if (RakFrom[0] <= c[0] && RakFrom[1] == c[1] || RakTo[0] >= c[0] && RakTo[1] == c [1]){
		alert("Rak");
	}
		else if (LavFrom[0] <= c[0] && LavFrom[1] == c[1] || LavTo[0] >= c[0] && LavTo[1] == c [1]){
		alert("Lav \n POSAO: Ne biste trebali da očekujete veće promene kada je u pitanju posao. Današnji dan će vam biti prilično miran.\n LJUBAV: Niste zadovoljni komunikacijom sa voljenom osobom. Moguće je da vam je teško...\n ZDRAVLJE: Povećajte unos vode.");
	}
		else if (DevFrom[0] <= c[0] && DevFrom[1] == c[1] || DevTo[0] >= c[0] && DevTo[1] == c [1]){
		alert("Devica");
	}
		else if (VagaFrom[0] <= c[0] && VagaFrom[1] == c[1] || VagaTo[0] >= c[0] && VagaTo[1] == c [1]){
		alert("Vaga");
	}
		else if (SkorpijaFrom[0] <= c[0] && SkorpijaFrom[1] == c[1] || SkorpijaTo[0] >= c[0] && SkorpijaTo[1] == c [1]){
		alert("Skorpija");
	}
		else if (StrelacFrom[0] <= c[0] && StrelacFrom[1] == c[1] || StrelacTo[0] >= c[0] && StrelacTo[1] == c [1]){
		alert("Strelac");
	}
		else if (JaracFrom[0] <= c[0] && JaracFrom[1] == c[1] || JaracTo[0] >= c[0] && JaracTo[1] == c [1]){
		alert("JARAC \n POSAO: Možete da očekujete veoma povoljan dan za posao i obaveze. Sve biste trebali da rešite u kratkom roku. \n LJUBAV: Očekuju vas manje nesuglasice sa partnerom ali ćete do kraja dana uspeti da nađete kompromis. \n ZDRAVLJE: Naspavajte se.");
	}
		else if (VodolijaFrom[0] <= c[0] && VodolijaFrom[1] == c[1] || VodolijaTo[0] >= c[0] && VodolijaTo[1] == c [1]){
		alert("Vodolija");
	}
		else if (RibeFrom[0] <= c[0] && RibeFrom[1] == c[1] || RibeTo[0] >= c[0] && RibeTo[1] == c [1]){
		alert("Ribe");
	}

	else
		alert ("Pogresili ste prilikom unosa pokrenite ponovo aplikaciju");
}

horoskop ();
