const button = document.getElementById('button')
const weight = document.getElementById('weight')
const height = document.getElementById('height')


button.addEventListener('click', function () {

    const w = Number(weight.value)
    const h = Number(height.value)

    const vki = (w / (h * h))*10000      // vücut kitle indeksi, kilo / boy^2 olarak hesaplanır. 

    const result = document.getElementById('result')    // ekranda gösterilecek yazıyı seçiyoruz. 
    console.log(h)



    if (vki < 18.5) { 
        result.innerHTML = 'Vücut Kitle İndexin: '+'<br>' + vki.toFixed(2) + '<br>' + 'Zayıfsın' 

    } else if (vki > 18.5 && vki < 24.99) {
        result.innerHTML = 'Vücut Kitle İndexin: '+'<br>' + vki.toFixed(2) + '<br>' + 'Normal kilolusun' 

    } else if (vki > 24.99 && vki < 29.99) {
        result.innerHTML = 'Vücut Kitle İndexin: '+'<br>' +  vki.toFixed(2) + '<br>' + 'Fazla kilolusun' 

    } else if (vki > 29.99 && vki < 39.99) {
        result.innerHTML = 'Vücut Kitle İndexin: '+'<br>' + vki.toFixed(2) + '<br>' + 'Obezsin' 

    }

    // ideal kilo hesaplama alanı

    const gender = document.getElementById('gender')
    const ideal = document.getElementById('ideal')
    

    if (gender.value == "Erkek"){

        const idealWeight = 50 + 2.3 * ((h / 2.54) - 60) // erkek için ideal kilo değeri hesaplanır. 
        ideal.innerHTML = 'İdeal kilon: '+'<br>' + idealWeight.toFixed(2) + ' ' + 'kg' + '<br>' + 'Spor yapmayı ve düzenli beslenmeyi unutma.' 

    } else if (gender.value == "Kadın") {

        const idealWeight = 45.5 + 2.3 * ((h / 2.54) - 60) // kadın için ideal kilo değeri hesaplanır.
        ideal.innerHTML = 'İdeal kilon: '+'<br>' + idealWeight.toFixed(2) + ' ' + 'kg' + '<br>' + 'Spor yapmayı ve düzenli beslenmeyi unutma.'  
    }

   
})