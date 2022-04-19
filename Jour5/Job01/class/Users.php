<?php
require_once('Bdd.php');


class Users
{
    protected $id;
    public $prenom;
    public $nom;
    public $email;
  
    

    public function __construct()
    {
        $pdo = new Pdo();
    }
    
    public function insertUser($nom,$prenom,$email,$password)
    {
       //Insert les utilisateurs en bdd
        $requete = $this->connect()->prepare("INSERT INTO utilisateurs(nom,prenom,email,password) VALUES (:nom,:prenom,:email,:password)");
        $requete->execute(array(
            ":nom"=> $nom,
            ":prenom" => $prenom,
            ":email" => $email,
            ":password" => $password,
           
        ));
    }

    // public function getUserByLogin($login) 
    // {   
       
    //     $requete = "SELECT * FROM utilisateurs WHERE login = :login ";
    //     $result = $this->connect()->prepare($requete);
    //     $result->bindValue(':login', $login);
    //     $result->execute();
    //     $checkUser = $result->fetchAll(PDO :: FETCH_ASSOC);
        
    //     // var_dump($checkUser);
        
    //     return $checkUser;
     
    // }

    public function getUserByEmail($email)
    {   
       
        $requete = "SELECT * FROM utilisateurs WHERE email = :email";
        $result = $this->connect()->prepare($requete);
        $result->bindValue(':email', $email);
        $result->execute();
        $checkUser = $result->fetchAll(PDO :: FETCH_ASSOC);
        
        //var_dump($checkUser);
        
        return $checkUser;
     
    }

    public function findUserById($id) :array
    {   #$this->id = $id;
        $requete = "SELECT * FROM utilisateurs WHERE id = :id";
        $result = $this->connect()->prepare($requete);
        $result->execute(array(':id' => $id));
        $dataUser = $result->fetchAll(PDO :: FETCH_ASSOC);

        return $dataUser;
    }
    
    public function findAllUsers()
    {
     
        $requete = "SELECT * FROM utilisateurs";
        $result = $this->connect()->prepare($requete);
        $result->execute();
        $dataUser = $result->fetchAll(PDO :: FETCH_ASSOC);
        return $dataUser;
    }
   




}
?>
    