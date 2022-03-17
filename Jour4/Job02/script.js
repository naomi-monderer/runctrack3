
    document.addEventListener("DOMContentLoaded",(event)=>
    {
        json =     
        {
            "name": "LaPlateform",
            "address": "8 rue d'Hozier",
            "city": "Marseille",
            "nb_staff": 11,
            "creation":"2019"
        }
        
       function jsonValueKey(value, key)
       { 
           console.log(value.key + 'value.key soit value."city"')
           console.log(value.city + 'value.key soit value.city')
           console.log(value[key] + 'value.key soit value.city')
           return value[key]

       }
      let result = jsonValueKey(json,"city")
      console.log(result)

      console.log(jsonValueKey(json,"city"))

    })
   
   