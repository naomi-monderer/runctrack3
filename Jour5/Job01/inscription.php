<?php
require_once('include/header.php');

// require_once('class/Users.php');

?>
    <main>
      <section>
          <form action="" method="post" id="form">
              <label for="lastname">Nom</label><br/>
              <input type="text" id="lastname" name="lastname" value="jojojo"><br/>

              <label for="firstname">Prénom</label><br/>
              <input type="text" id="firstname" name="firstname" value="jojjjj"><br/>

              <label for="email">Email</label><br/>
              <input type="email" id="email" name="email" value=""><br/>
               <p> </p> 
              <label for="password">Password</label><br/>
              <input type="text" id="password" name="password" value=""><br/>
                <p> </p>
              <label for="passwordConfirm">Confirmez votre password</label><br/>
              <input type="text" id="passwordConfirm" name="passwordConfirm" value=""><br/>
                <p></p>
              <input type="button" id="input" name="register" value="m'inscrire">
          </form>
      </section>
  </main>  
</body>
</html>