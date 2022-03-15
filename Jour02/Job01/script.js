function citation(){
    
    document.addEventListener("DOMContentLoaded", (event) => {
    
        let button = document.getElementById('butt')
        button.addEventListener("click", (event) => {
            let getCitation = document.getElementById('citation').innerHTML
            console.log(getCitation);
        })    
    
    });
}

citation()