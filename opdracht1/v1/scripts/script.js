// function getRVBN(rName) {
//     var radioButtons = document.getElementsByName(rName);
//     for (var i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) return radioButtons[i].value;
//     }
//     return '';
// }

// function getValues() {
//     var alertKleur = getRVBN('kleur');
//     alert(alertKleur);
// }

 var grid = document.querySelector('#grid');
 var blauwKnop = document.querySelector('input[name=blauw]');
 var roodKnop = document.querySelector('input[name=rood]');
 var groenKnop = document.querySelector('input[name=groen]');

 blauwKnop.onclick = function () {
 	grid.classList.toggle('blauw');
 }

roodKnop.onclick = function () {
	grid.classList.toggle('rood');
}

groenKnop.onclick = function () {
	grid.classList.toggle('groen');
}