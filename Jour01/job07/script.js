
// function jourtravaille(date) 
// {   // je recupère mes jours fériés
//     let dateCurrent= new Date(date)
//     jourFeries = [
//         new Date(2020, 0, 1),
//         new Date(2020, 4, 13),
//         new Date(2020, 5, 1),
//         new Date(2020, 5, 8),
//         new Date(2020, 5, 21),
//         new Date(2020, 6, 1),
//         new Date(2020, 7, 14),
//         new Date(2020, 8, 15),
//         new Date(2020, 10, 1),
//         new Date(2020, 10, 11),
//         new Date(2020, 11, 25)
//     ];
//     // je crée une constante pour formater l
  

//     console.log(dateCurrent)
//     console.log(jourFeries)
//     date_fr = date.toLocaleDateString('fr-FR', options)
//     console.log(date_fr)

//     var days = 0
//     for (var i = 0; i < joursFeries.length; i++)
//     {
//        if(dateCurrent == joursFeries[i])
//        {
//            console.log("dhddd")
//        }
//     }
    
//     if(dateCurrent.getDay()==0 || dateCurrent.getDay() == 6)
//     {
//         console.log('Non,' + date_fr + 'est un week-end')
//     }

// }
// jourtravaille(2020/04/13)

function jourtravaille(date) {

    var date_du_jour = new Date(date);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date_fr = date_du_jour.toLocaleDateString('fr-FR', options);
   
   
    var joursFeries = ["2020-01-01","2020-04-13","2020-05-01","2020-05-08","2020-05-21","2020-06-01","2020-07-14","2020-08-15","2020-11-01","2020-11-11","2020-12-25"];
    
    if (joursFeries.includes(date) == true) {
        console.log("Le " + date_fr + " est un jour férié");
    }
    else if (date_du_jour.getDay() == 6 || date_du_jour.getDay() == 0 ){
        console.log("Non, " + date_fr + " est un week-end");
    }
    else {
        console.log("Oui, " + date_fr + " est un jour travaillé");
    }

}
jourtravaille(2020/04/13)
