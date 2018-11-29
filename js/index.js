function resposta() {
	let validaRadio = document.getElementsByName("options");
	if (validaRadio[0].checked == true) {
		document.getElementById("resposta").innerHTML = "Sim!";
	} else if (validaRadio[1].checked == true) {
		document.getElementById("resposta").innerHTML = "não =(";
	} else if (validaRadio[2].checked == true) {
		document.getElementById("resposta").innerHTML = "Quaaaase isso...";
	} else if (validaRadio[3].checked == true) {
		document.getElementById("resposta").innerHTML = "Com certeza!";
	}
}
