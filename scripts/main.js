arr=JSON.parse(localStorage.getItem("user"))||[];

function myfun(){
  event.preventDefault();
  obj={
    name:document.getElementById("name").value,

    email:document.getElementById("email").value,
    address:document.getElementById("address").value,
    amount:document.getElementById("amount").value,
  }
  arr.push(obj);
  localStorage.setItem("user",JSON.stringify(arr))


}