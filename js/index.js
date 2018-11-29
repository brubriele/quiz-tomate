function resposta() {
	let validaRadio = document.getElementsByName("options");
	if (validaRadio[0].checked == true) {
		document.getElementById("resposta").innerHTML = "Sim!";
	} else if (validaRatio[1].checked == true) {
		document.getElementById("resposta").innerHTML = "não =(";
	} else if (validaRatio[2].checked == true) {
		document.getElementById("resposta").innerHTML = "Quaaaase isso...";
	} else if (validaRatio[3].checked == true) {
		document.getElementById("resposta").innerHTML = "Com certeza!";
	}
}