
var x=0;
 var y=0
var amount=JSON.parse(localStorage.getItem("user"));
amount.forEach(function(el){
   var p= document.querySelector("#wallet_balance");
   p.innerText=el.amount;
   var x=el.amount;
   console.log(x);
})




let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
fetch(url).then(function(res){
  return res.json()
}).then(function(res){
    Appennd(res[0].vouchers);
}).catch(function(err){
  console.log(err);
})


function Appennd(data){


  data.forEach(el => {
    var div=document.createElement("div");
      div.setAttribute("class","voucher");
      var img=document.createElement("img");
      img.src=el.image;
      var h3=document.createElement("h3");
      h3.innerText=el.name;
      var p=document.createElement("p");
      p.innerText=el.price;
      var button=document.createElement("button");
      button.innerText="Buy";
      button.addEventListener("click",function(){
            Buyfun(el);
      });



      div.append(img,h3,p,button);
      document.querySelector("#voucher_list").append(div);
  });
     

}
var purch=JSON.parse(localStorage.getItem("purchase"))||[];
function Buyfun(el){
       y=el.price;
    if(y>x)
    {
        alert("Hurray! purchase successful");
        
    }
    else
    {
        alert("Sorry! insufficient balance");
    }
 var wall=document.querySelector("#wallet_balance").value;
 console.log(wall);
 obj={
   name:el.name,
   price:el.price,
   image:el.image,
 }
 purch.push(obj);
 localStorage.setItem("purchase",JSON.stringify(purch))
}