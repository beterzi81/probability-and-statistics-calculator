function harmonikortf(){
	var ay = document.getElementById('InputDataHarmonik').value;
	var ayp = ay.split(",");
	var diziboyutu = ayp.length;

	
	let sum = 0

  for (let i = 0; i < diziboyutu; i++) {
    sum += 1 / ayp[i]
  }

  sum = diziboyutu / sum
  h1sonuc.innerHTML="<font color='red'>" + sum + "</font>";
	
	
	
}