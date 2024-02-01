let tittelitei = `
    
`

function pickUpItem1(bagofholding) {
    document.getElementById('gItem1').innerHTML = /*HTML*/ 
    ``
    tittelitei += bagofholding + ", "
    document.getElementById('iItem1').innerHTML = /*HTML*/
    `<img src="assets/bagofholding.gif"/>`
    console.log(tittelitei)
}
function pickUpItem2(boots) {
    tittelitei += boots + ", "
    document.getElementById('gItem2').innerHTML = /*HTML*/ 
    ``
    document.getElementById('iItem2').innerHTML = /*HTML*/
    `<img src="assets/boots.png"/>`
}
function pickUpItem3(quill) {
    tittelitei += quill + ", "
    document.getElementById('gItem3').innerHTML = /*HTML*/ 
    ``
    document.getElementById('iItem3').innerHTML = /*HTML*/
    `<img src="assets/quill.gif"/>`
}
function pickUpItem4(bow) {
    tittelitei += bow + ", "
    document.getElementById('gItem5').innerHTML = /*HTML*/ 
    ``
    document.getElementById('iItem4').innerHTML = /*HTML*/
    `<img src="assets/bow.gif"/>`
}
function pickUpItem5(armor) {
    tittelitei += armor + ", "
    document.getElementById('gItem7').innerHTML = /*HTML*/ 
    ``
    document.getElementById('iItem5').innerHTML = /*HTML*/
    `<img src="assets/armor.png"/>`
}
function pickUpItem6(shield) {
    tittelitei += shield + ", "
    document.getElementById('gItem9').innerHTML = /*HTML*/ 
    ``
    document.getElementById('iItem6').innerHTML = /*HTML*/
    `<img src="assets/shield.png"/>`
}
