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
    var permut1=document.getElementById("InputDataPermutasyon1").value;
    permut1 = Number(permut1);
    var permut2=document.getElementById("InputDataPermutasyon2").value;
    permut2 = Number(permut2);
    var fark = permut1 - permut2;
    if (permut1<0 || permut2<0) {
        return alert("Hatalı giriş yaptınız!");
    }
    const sonuc = faktoriyel(permut1)/faktoriyel(fark);

    const ahmet = Math.round(sonuc);
    h1sonuc.innerHTML="<font color='#dc3545'>" + ahmet + "</font>";
    
}

