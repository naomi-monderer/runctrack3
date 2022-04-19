<?php

  
        $serveur = "localhost";
        $dbname = "utilisateurs";
        $username = "root";
        $password = "root";
   
        
        try { $bdd = new PDO ("mysql:host=$serveur;dbname=$dbname", $username, $password);
                $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "connected  successfully";
            $this->bdd = $bdd;

        }catch(PDOException $e){

            echo "connection failed" . $e->getMessage(); 
        } 
    
        $requete=$this->bdd->prepare("SELECT * FROM utilisateurs")

?>