<?php
session_start();
require_once('include/header.php');
require_once('class/Bdd.php');
$Users = new Users();
?>

  <main>
      <section>
          <form action="" method="post">
          <label for="">Email</label>
              <input type="text" name="email" value="">
                <p></p>
              <label for="">Password</label>
              <input type="text" name="password" value="">
                <p></p>
              <input type="submit" name="register" value="">

          </form>
      </section>
  </main>  
</body>
</html>