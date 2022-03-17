$(document).ready(function(){

    let arc1 = ($('#arc1'))
let arc2 = ($('#arc2'))
let arc3 = ($('#arc3'))
let arc4 = ($('#arc4'))
let arc5 = ($('#arc5'))
let arc6 = ($('#arc6'))
console.log($('#rangees'))
let images = [arc1, arc2, arc3, arc4, arc5, arc6]
console.log(images)
$('#button').click(function(){
    console.log('naomacc')
   var shuffle = shuffleArray(images)
   $('#rangees').empty()
   console.log(shuffle)
})


})

/* Randomize array in-place using Durstenfeld shuffle algorithm */
let images = ['arc1', 'arc2','arc3','arc4','arc5','arc6']

function shuffleArray(array) {
    //je parcours mon tableau 
    for (var compteur = array.length - 1; compteur > 0; compteur--) {
        var randomIndex = Math.floor(Math.random() * (compteur + 1));
        var temp = array[compteur];
        array[compteur] = array[randomIndex];
        array[randomIndex] = temp;
        // console.log(randomIndex + "randomIndex")
        // console.log(array[i], 'array[i]')
    }
    console.log(array + "array")
    return(array)
}

console.log('coucou')


// $(document).ready(()=>{
//     $('#button').click(melange);
// }
// )

// function melange() {
//     let randomTable = getRandomTable();

//     $('#melanges').empty();
//     $('#ranges').empty();

//     randomTable.forEach(i =>{
//         $(`<img id='arc${i}' src='arc${i}.png'>`).appendTo("#melanges");
//         $(`#arc${i}`).click(function(event) {
//             toggleDiv(this);
//             checkVictory();
//         })
//     })
// }
// function toggleDiv(element) {
//     if(element.parentNode.id == 'melanges'){
//         $(element).appendTo("#ranges");
//     }
//     else{
//         $(element).appendTo("#melanges");
//     }
// }

// function getRandomTable() {
//     let randomTable =[];
//     while(randomTable.length<6){
//         let rdNumber = Math.trunc(Math.random()*7);
//         if(!randomTable.includes(rdNumber) && rdNumber>0){
//             randomTable.push(rdNumber);
//         }
//     }
//     return randomTable;
// }

// function checkVictory(){
//     let imgNodeList = document.querySelector('#rangees').childNodes;
//     $('#msg').remove();
//     if(imgNodeList.length == 6){
//         let counter = 1;
//         imgNodeList.forEach(element => {
//             if(element.id.replace('arc','') == counter){
//                 counter++
//             }
//         });
//         if(counter == 7){
//             $('<h1 id="msg">Vous avez gagné</h1>').appendTo("body");
//         } else {
//             $('<h1 id="msg">Vous avez perdu</h1>').appendTo("body");
//         }
//     }
// })