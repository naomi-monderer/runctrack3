
    document.addEventListener("DOMContentLoaded",(event)=>
    {

        var input = document.getElementById('input');

        console.log('test1')
        var firstname = document.getElementById('firstname').value;
       var lastname = document.getElementById('lastname');
       var email = document.getElementById('email');
       var password = document.getElementById('password');
       
       var p = document.querySelectorAll('p');
        
        input.addEventListener("click", () => { 
            
        var form = document.getElementById('form');
        var formData = new FormData(form) 
        fetch('traitement.php',
        {
            method: 'POST',
            body: formData
        })
         

       
       console.log(p);
        console.log(firstname)
    
})
    //    function validEmail(){
           
    //     email.addEventListener('keyup',function(){
    //         console.log(this.value);
    //         if(this.value)
    //         {

    //         }
    //     })
    //    } 
    // ____________________________________FETCH_________________
    // const fileJson = new Request('users.json')
    // // console.log(fileJson)

    // fetch(fileJson)
    //     .then(response => response.json())
    //     .then(data => {
    //         tostring = JSON.stringify(data)
    //         // login = tostring[2].login
    //         document.write(tostring)
    //         console.log(data)
    //     })
    var confirmPass = getElementById('confirmPass');
    var password= getElementById('password');

    confirmPass.addEventListener('focusout',()=>{
        if(confirmPass.value.lenght == 0){
            pError[2].innerHTML = "ce champs doit être remplis."
        }
        else
        {
            pError[2].innerHTML =""
        }
        if(password.value != confirmPass.value)
        {
            pError[2].innerHTML = "les mdp doivent être indentiques."
        }    
    })

    })
   