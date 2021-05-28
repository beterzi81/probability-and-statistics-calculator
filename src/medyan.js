function medyanf(){
	
	var ay = document.getElementById('InputDataMedyan').value;
	var ayp = ay.split(",");
	var diziboyutu = ayp.length;
	var a1=0;


	if(diziboyutu%2==1){
	
		ayp.sort(function(a, b){return a - b});		
	
		
		 a1=(diziboyutu+1)/2;
		sonuc=ayp[a1-1];
		
	}
	else{
		ayp.sort(function(a, b){return a - b});		
		 a1=diziboyutu/2
		var sonuc=(Number(ayp[a1-1])+Number(ayp[a1]))/2;
		
		
		
	}
	/*
	const mid = Math.floor(diziboyutu/ 2);
	nums = [...ayp].sort((a, b) => a - b);
	const a = (diziboyutu % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2).toFixed(4);
	*/
	h1sonuc.innerHTML="<font color='#dc3545'>" + sonuc + "</font>";
	
	
}