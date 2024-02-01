let tittelitei = `
    
`

function pickUpItem1(bagofholding) {
    document.getElementById('gItem1').innerHTML = /*HTML*/
        ``
    tittelitei += bagofholding + "<br>"
    document.getElementById('iItem1').innerHTML = /*HTML*/
        `<img src="assets/bagofholding.gif"/>`
    console.log(tittelitei)
}
function pickUpItem2(boots) {
    tittelitei += boots + "<br>"
    document.getElementById('gItem2').innerHTML = /*HTML*/
        ``
    document.getElementById('iItem2').innerHTML = /*HTML*/
        `<img src="assets/boots.png" style="width: 70px; margin-left: 10px; height: 80px;"/>`
}
function pickUpItem3(quill) {
    tittelitei += quill + "<br>"
    document.getElementById('gItem3').innerHTML = /*HTML*/
        ``
    document.getElementById('iItem3').innerHTML = /*HTML*/
        `<img src="assets/quill.gif" style="width: 80px; margin-left: 18px; height: 80px;"/>`
}
function pickUpItem4(bow) {
    tittelitei += bow + "<br>"
    document.getElementById('gItem5').innerHTML = /*HTML*/
        ``
    document.getElementById('iItem4').innerHTML = /*HTML*/
        `<img src="assets/bow.gif" style="width: 50px; margin-left: 25px; height: 80px;"/>`
}
function pickUpItem5(armor) {
    tittelitei += armor + "<br>"
    document.getElementById('gItem7').innerHTML = /*HTML*/
        ``
    document.getElementById('iItem5').innerHTML = /*HTML*/
        `<img src="assets/armor.png" style="width: 50px; margin-left: 25px; height: 80px;"/>`
}
function pickUpItem6(shield) {
    tittelitei += shield + "<br>"
    document.getElementById('gItem9').innerHTML = /*HTML*/
        ``
    document.getElementById('iItem6').innerHTML = /*HTML*/
        `<img src="assets/shield.png" style="width: 85px; margin-left: 8px; height: 80px;"/>`
}
function showinv() {
    document.getElementById('inventoryop').innerHTML = tittelitei
    document.getElementById('inventoryop').classList.toggle('hidecontent')
}
