let datainfo=JSON.parse(localStorage.getItem("purchase"))
 console.log(datainfo);

 datainfo.forEach(el => {
  var div=document.createElement("div");
      var img=document.createElement("img");
      img.src=el.image;
      var h3=document.createElement("h3");
      h3.innerText=el.name;
      var p=document.createElement("p");
      p.innerText=el.price;
      var button=document.createElement("button");
      button.innerText="purchase";
      // button.addEventListener("click",function(){
      //       Buyfun(el);
      // });



      div.append(img,h3,p,button);
      document.querySelector("#container").append(div);
  
 });