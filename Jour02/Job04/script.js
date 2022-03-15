// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.

// document.addEventListener('DOMContentLoaded',(event)=>
// {
//     // je lui dis dans la dom (mon html) cible moi l'élement où il y a cet id='keylogger'
//     var textarea = document.getElementById('keylogger');
    
//     var toucheDuClavier = ""


//     document.addEventListener('keydown', displayLetters)

//     function displayLetters(e)
//     {   
//         toucheDuClavier += e.key
//         textarea.textContent = toucheDuClavier 

//         // console.log(fff)
//     }
 


// })


document.addEventListener('DOMContentLoaded', (event) => {

    var textarea = document.getElementById ('keylogger')
    var record = ""
    
    document.addEventListener('keydown', logKey);

    function logKey(e) {
      
      console.log(e)
      record += e.key 
      textarea.textContent = record

    }
})

