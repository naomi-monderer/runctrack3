
    document.addEventListener("DOMContentLoaded",(event)=>
    {
        var button = document.getElementById('button')
        let p = document.querySelector('p')
        let body = document.querySelector('body')
        console.log(p)
        console.log(button)
        button.addEventListener("click",function(){
            fetch('expression.txt')
            .then((citation)=> citation.text())
            .then(response => { // il attend que l'action du premier then soit terminée
                   console.log(response)
                   body.append(p)
                   p.append(response)
            })
                
    
            .catch((error) => console.log(error))
        }) 
        
    })
   