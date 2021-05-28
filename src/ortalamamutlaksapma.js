
function ortmutlaksapmaf() {
	var ay = document.getElementById('InputDataOrtalamaMS').value;
	var ayp = ay.split(",");
	var diziboyutu = ayp.length;

	let sum = 0
	let ort = 0;
	var toplam = 0;

	for (var i = 0; i < diziboyutu; i++) {
		ayp[i] = Number(ayp[i]);
		toplam = ayp[i] + toplam;

	}
	toplam = toplam / diziboyutu;
	ort = toplam;

	for (let i = 0; i < diziboyutu; i++) {
		sum += Math.abs(ayp[i] - ort)
	}
	sum /= diziboyutu

	h1sonuc.innerHTML="<font color='#dc3545'>" + sum + "</font>";

}