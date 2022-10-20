var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var ph=document.getElementById("phone").value;
var add=document.getElementById("address").value;
var id=document.getElementById("id").value;
var idnum=document.getElementById("idnum").value;


var myObj={name:name,age:age,phonenum:ph,address:add,id:id,idnum:idnum};
var myJSON=JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);


