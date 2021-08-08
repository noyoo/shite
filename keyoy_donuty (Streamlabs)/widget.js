start();

function start(){
   let len = document.getElementById('alert-user-message').innerHTML.length;
  console.log(len);
 if (len == 0) {
   document.getElementById("mid").style = "display: none";
 }
}

