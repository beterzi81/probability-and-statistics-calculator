function geometrikortf() {
	var ay = document.getElementById('InputDataGeometrik').value;
	var ayp = ay.split(",");
	var diziboyutu = ayp.length;

	let sum = 1

	for (let i = 0; i < diziboyutu; i++) {
		sum *= ayp[i]
	}

	sum = Math.pow(sum, 1 / diziboyutu)
	h1sonuc.innerHTML="<font color='#dc3545'>" + sum + "</font>";




}