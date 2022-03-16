// document.addEventListener("DOMContentLoaded",(event)=>
// {
//     let texte = document.getElementById('button')
//     console.log(texte)

// })
$(document).ready(function()
{   
    console.log($('p'))
    console.log($('#button'))
    $('p').hide()

   
    $('#button').click(function()
    {
        
        $('p').show()
    })

    $('#hide').click(function()
    {
        
        $('html').hide()
    })
})