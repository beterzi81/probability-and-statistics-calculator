function degiskenkatsayif() {
	var ay = document.getElementById('InputDataDegiskenKS').value;
	var ayp = ay.split(",");
	var diziboyutu = ayp.length;

	let x = 0;
	let toplam = 0;
	let sum = 0;





	for (var i = 0; i < diziboyutu; i++) {
		ayp[i] = Number(ayp[i]);
		toplam = ayp[i] + toplam;



	}
	toplam = toplam / diziboyutu;
	let ort = toplam;





	for (let i = 0; i < diziboyutu; i++) {
		sum += Math.pow(Math.abs(ayp[i] - ort), 2)
	}
	sum /= diziboyutu - 1
	sum = Math.pow(sum, 1 / 2)

	let sapma = sum;



	const a = ((sapma / ort) * 100);

	h1sonuc.innerHTML="<font color='red'>" + a + "</font>";
}