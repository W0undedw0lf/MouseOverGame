let points = 0
let targetRoll = 5
 document.querySelector('.target').addEventListener('mouseover',targetHit())
 
 function targetThree() {
    document.getElementById('four').style.display = 'initial'
    document.getElementById('three').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('one').style.display = 'none'
 }

 function targetTwo() {
    document.getElementById('four').style.display = 'none'
    document.getElementById('three').style.display = 'initial'
    document.getElementById('two').style.display = 'none'
    document.getElementById('one').style.display = 'none'
 }

 function targetOne() {
    document.getElementById('four').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('two').style.display = 'initial'
    document.getElementById('one').style.display = 'none'
 }

 function targetZero() {
    document.getElementById('four').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('one').style.display = 'initial'
 }

 
 function targetHit() {
    targetRoll = Math.floor(Math.random()*4)
    points++;
    console.log(points)
    if (targetRoll === 3) {
        targetThree()
    } else if (targetRoll === 2) {
        targetTwo()
    } else if (targetRoll === 1) {
        targetOne()
    } else if (targetRoll === 0) {
        targetZero()
    }


 }
