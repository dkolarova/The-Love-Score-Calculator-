document.getElementById("calculate").addEventListener('click', function() {
var yourName = document.getElementById('your-name')
var value1 = yourName.value

var firstLatter = value1.slice(0,1)
var capitalizeFisrtLatter = firstLatter.toUpperCase();
var restOfName = value1.slice(1,value1.length)
restOfName = restOfName.toLowerCase();
var capitalisedFisrtName = capitalizeFisrtLatter + restOfName;

var calculation = Math.floor(Math.random() * 100) + 1;

var crushName = document.getElementById('crush-name')
var value2 = crushName.value

var firstLatter2 = value2.slice(0,1)
var capitalizeFisrtLatter2 = firstLatter2.toUpperCase();
var restOfName2 = value2.slice(1,value2.length)
restOfName2 = restOfName2.toLowerCase();
var capitalisedSecondName = capitalizeFisrtLatter2 + restOfName2;

  if(value1 === '' || value2 === ''){
    alert('Please, type both names!')
    return
  }else if(calculation > 70){
    document.getElementById('result-percentage').innerHTML = `${calculation}% ${capitalisedFisrtName} & ${capitalisedSecondName}, You love each other like Kanye loves Kanye!💘`
    document.getElementById('reset-btn').setAttribute("id", "reset-btn-active")
  }else if(calculation > 35 && calculation <= 70){
    document.getElementById('result-percentage').innerHTML = `${capitalisedFisrtName} & ${capitalisedSecondName}, Your love score is: ${calculation}% 💞`
    document.getElementById('reset-btn').setAttribute("id", "reset-btn-active")
  }else if(calculation < 35){
    document.getElementById('result-percentage').innerHTML =`${capitalisedFisrtName} & ${capitalisedSecondName}, Your love score is: ${calculation}% You go together like oil and water.💔`
    document.getElementById('reset-btn').setAttribute("id", "reset-btn-active")
  }
 
})


document.getElementById('reset-btn').addEventListener('click', function(){
  var yourName = document.getElementById('your-name')
  var crushName = document.getElementById('crush-name')

  yourName.value = ''
  crushName.value = ''

  document.getElementById('result-percentage').innerHTML = '';

})





