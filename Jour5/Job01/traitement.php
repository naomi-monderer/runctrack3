<?php
file_get_contents('php://input');

function getPdo() {

    $pdo= new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', 'root', 'root');
    return $pdo;
}


// $lastname= $_POST['lastname'];
// $firstname = $_POST['firstname'];
// $email = $_POST['email'];
// $password = $_POST['password'];
// $passwordConfirm = $_POST['passwordConfirm'];

function insertUser($lastname,$firstname,$email,$password)
{       $pdo = getPdo();
   //Insert les utilisateurs en bdd
    $requete = $pdo->prepare("INSERT INTO utilisateurs(nom,prenom,email,password) VALUES (:nom,:prenom,:email,:password)");
    $requete->execute(array(
        ":nom"=> $lastname,
        ":prenom" => $firstname,
        ":email" => $email,
        ":password" => $password,
       
    ));
}
/*
verifier les email unique 
verifier la sécurité des mots de passe-
*/

if(isset($POST['register']))
{
    if( !empty($_POST['lastname']) && !empty($_POST['firstname']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confirmPassword']))
    {   //verifier les email 
        $requete = $bdd->prepare("SELECT * FROM utilisateurs WHERE email=':email");
        $requete->execute(array(':email'=> $email));
        $resultat = $requete->fetchAll(PDO :: FETCH_ASSOC);
        
        var_dump($resultat);
        
    }
   
}


// if(isset($_POST['register']))
// { 

//   var_dump($_POST['lastname']);
 
    
// }
// $requete= mysqli_query($bdd, "SELECT * FROM utilisateurs");



// if(isset($_POST["submit"]))
// {
//         if( !empty($_POST["email"]) && !empty($_POST["login"]) && !empty($_POST["password"]) && !empty($_POST["confirmPassword"]))
//         {

//             $email=$_POST["email"];
//             $login=$_POST["login"];
//             $password=$_POST["password"];
//             $confirmPassword=$_POST["confirmPassword"];
//             $id_droits= 1;

//             $requete3=mysqli_query($bdd,"SELECT email FROM utilisateurs WHERE email='$email'");
//             $result3=mysqli_fetch_all($requete3);
                             
//             if($password==$confirmPassword)
//             {
//                 $passwordCrypted = password_hash($password,PASSWORD_BCRYPT);

//                 if(count($result3)==0)
//                 {
//                     echo "yo";
//                     $requete4=mysqli_query($bdd,"SELECT login FROM utilisateurs WHERE login='$login'");
//                     $result4=mysqli_fetch_all($requete4);

//                     if(count($result4)==0)
//                     {   
//                         echo "yo2";
//                         $requete2 = mysqli_query($bdd ,"INSERT INTO utilisateurs (email,login,password,id_droits) Values ('$email','$login','$passwordCrypted','$id_droits')");  
//                     }
//                     else
//                     {
//                         echo "Ce login est déjà utilisé";
//                     }
//                 }
//                 else
//                 {
//                     echo "Cet email n'est pas valide";
//                 }  
//             }
//             else
//             {
//                 echo "Les mots de passe doivent être identiques";
//             }

//     }
//     else
//     {
//         echo "tout les champs doivent être remplis";
//     }
// }

// insertUser($_POST['lastname'],$_POST['firstname'],$_POST['email'],$_POST['password']);
// var_dump($_POST);

// ------exemple--------------------------------

echo json_encode($_POST);
if(isset($_POST['action']))
?>