document.addEventListener("DOMContentLoaded",(event)=>
{
    // var baliseCompteur = document.getElementById('compteur')
    // // console.log(baliseCompteur)
    // var texteDeBaliseCompteur = baliseCompteur.textContent
    // // console.log(texteDeBaliseCompteur)

    
    // baliseCompteur.textContent = 0
    // // console.log(baliseCompteur.textContent)
    // console.log(baliseCompteur.textContent++)
    // console.log(baliseCompteur.textContent++)
    // console.log(baliseCompteur.textContent++) 


    // je créais une fonction 
    function addone()
    {   // j'instancie mes variables pour pouvoir les manipuler.
        // grâce à l'id qui est dans la balise html (compteur).
        var baliseCompteur = document.getElementById('compteur')
        // la foncion innerHTML me permet de récuperer le contenu d'une balise. en l'occurence 0
        // je concatène le comptenu de ma variable avec innerHTML et je lui attribue la valeur 0
        //pour generer mon compteur de départ
        baliseCompteur.innerHTML = 0
        // je récupère mon boutton grâce à l'id button qui dans mon code html
       var button = document.getElementById('button')
       // je demande à javascript de prendre en compte l'action grace à .addEventListener

        button.addEventListener("click", function()
        {
        //    console.log(button)
        return baliseCompteur.innerHTML++
        })
        
    }
    addone()
   
    
})
