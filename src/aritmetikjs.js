

function calistir() {
	var ay = document.getElementById('InputDataAritmetik').value;
	var ayp = ay.split(",");
	//document.write(ay);
	//alert(ay);
	//document.write(ayp[0]);
	//document.write(diziboyutu);
	var diziboyutu = ayp.length;
	var toplam = 0;

	for (var i = 0; i < diziboyutu; i++) {
		ayp[i] = Number(ayp[i]);
		toplam = ayp[i] + toplam;



	}
	toplam = toplam / diziboyutu;
	

	h1sonuc.innerHTML="<font color='#dc3545'>" + toplam + "</font>";



	//document.write(toplam);
}