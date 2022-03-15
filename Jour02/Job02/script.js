
    document.addEventListener("DOMContentLoaded",(event)=>
    {
        // let button = document.getElementById('button')
        let article = document.querySelector('article')
        console.log(article.innerHTML)
        article.style.visibility = 'hidden'

      
            button.addEventListener("click", (showHide) => 
            {   

                if(article.style.visibility == 'hidden')
                {
                    article.style.visibility = 'visible'
                }
                else
                {
                    article.style.visibility = 'hidden'
                }
                console.log(button)
            })
        
    })
   




