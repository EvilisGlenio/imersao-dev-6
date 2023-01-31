/* var valorEmDolar = 60
 var cotacaoDoDolar = 5.32
 var valorEmReal = valorEmDolar*cotacaoDoDolar

 alert('$ '+valorEmDolar+' dolares está cotado em R$ '+(valorEmReal.toFixed(2))+ ' reais.')
 */

 const usuario = document.querySelector('.name')
 const star = document.querySelector('.star')
 var lightYears = document.querySelector('.distance')//4.35
 const res = document.getElementById('res')

 function calcular() {
    let distance = lightYears.value
   let convertorLY = distance * 9460536068.016
   res.innerText = "A distância entre "+star.value+" e a terra é de "+lightYears.value+" anos luz, que é equivalente à "+convertorLY.toFixed(1)+" km."
 }

