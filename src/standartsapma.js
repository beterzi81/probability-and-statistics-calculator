function islem1(ortalama,dizi) {
    var diziboyutu = dizi.length;
    temp=0;
    for (let i = 0; i < diziboyutu; i++) {
       temp += (Math.abs(ortalama - dizi[i]))*(Math.abs(ortalama - dizi[i]));
       
    }
    temp = temp / (diziboyutu - 1);
 
    return Math.sqrt(temp);
 }
 
 function aritOrt(dizi){
 
     var toplam=0;
     var diziboyutu = dizi.length;
     for(var i =0;i<diziboyutu;i++){
 
         dizi[i]=Number(dizi[i]);
 
         toplam = dizi[i] + toplam;
     }
 
     toplam=toplam/diziboyutu;
 
     return toplam;
 }
 
 function hesapla() {
 
    var ay = document.getElementById('InputDataStandartSapma').value;
     var ayp = ay.split(",");
     var diziboyutu = ayp.length;
     for (let i = 0; i < diziboyutu; i++) {
        ayp[i] = Number(ayp[i]);
        
     }
 
    const tut = aritOrt(ayp);
    const sonuc = islem1(tut,ayp);
 
    h1sonuc.innerHTML="<font color='red'>" + sonuc + "</font>";
 }
 