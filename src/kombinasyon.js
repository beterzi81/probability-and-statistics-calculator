function faktoriyel(sayi) {
    
    var temp=1;
    
    if (sayi==0) {
        return 1;
    }
    
    if (sayi <0) {
        return alert("Hatalı giriş yaptınız!");
    }
    
    if (sayi>0)
{
       
    while (sayi>0) {
        temp = temp * sayi;
        sayi--;
    }
   
    return temp;
   
}
}

function hesapla() {
    var kombin1=document.getElementById("InputDataKombinasyon1").value;
    kombin1 = Number(kombin1);
    var kombin2=document.getElementById("InputDataKombinasyon2").value;
    kombin2 = Number(kombin2);
    var fark = kombin1 - kombin2;
    if (kombin1<0 || kombin2<0) {
        return alert("Hatalı giriş yaptınız!");
    }
    const sonuc = faktoriyel(kombin1)/(faktoriyel(kombin2)*faktoriyel(fark));

    const ahmet = Math.round(sonuc);
    h1sonuc.innerHTML="<font color='#dc3545'>" + ahmet + "</font>";
    
}

