var l1 = [];
var l2 = [];
var l3 = [];
var l4 = [];
var l5 = [];
var l6 = [];
var l7 = [];
var l8 = [];
var n = 0;
var x = 0;

function AddRow() {
  var addrow = document.getElementById("show");
  var newrow = addrow.insertRow(n);
  l1[x] = document.getElementById("floatingInput").value;
  l2[x] = document.getElementById("floatingInput2").value;
  l3[x] = document.getElementById("floatingInput3").value;
  l4[x] = document.querySelector('input[name="flexRadioDefault"]:checked').value


  l5[x]= document.getElementById("java").value;
  java = document.getElementById("java");

  l6[x] = document.getElementById("html").value;
  html = document.getElementById("html");

  l7[x] = document.getElementById("css").value;
  css = document.getElementById("css");

  l8[x] = document.getElementById("image").value;

  var cel1 = newrow.insertCell(0);
  var cel2 = newrow.insertCell(1);
 

  if(java.checked && html.checked){
    cel1.innerHTML = "<tr>"+l1[x]+"<br>"+l2[x]+"<br>"+l3[x]+"<br>"+l4[x]+"<br>"+l5[x]+"<br>"+l6[x]+"</tr>";
  }
  else if(java.checked){
    cel1.innerHTML = "<tr>"+l1[x]+"<br>"+l2[x]+"<br>"+l3[x]+"<br>"+l4[x]+"<br>"+l5[x]+"</tr>";
  }
  else if(html.checked){
    cel1.innerHTML = "<tr>"+l1[x]+"<br>"+l2[x]+"<br>"+l3[x]+"<br>"+l4[x]+"<br>"+l6[x]+"</tr>";
  }
  else if(css.checked){
    cel1.innerHTML = "<tr>"+l1[x]+"<br>"+l2[x]+"<br>"+l3[x]+"<br>"+l4[x]+"<br>"+l7[x]+"</tr>";
  }
  if(html.checked && css.checked){
    cel1.innerHTML = "<tr>"+l1[x]+"<br>"+l2[x]+"<br>"+l3[x]+"<br>"+l4[x]+"<br>"+l6[x]+"<br>"+l7[x]+"</tr>";
  }
  if(java.checked && css.checked){
    cel1.innerHTML = "<tr>"+l1[x]+"<br>"+l2[x]+"<br>"+l3[x]+"<br>"+l4[x]+"<br>"+l5[x]+"<br>"+l7[x]+"</tr>";
  }
  if(html.checked && css.checked && java.checked){
    cel1.innerHTML = "<tr>"+l1[x]+"<br>"+l2[x]+"<br>"+l3[x]+"<br>"+l4[x]+"<br>"+l5[x]+"<br>"+l6[x]+"<br>"+l7[x]+"</tr>";
  }
    
  cel2.innerHTML = "<tr>"+l8[x]+"</tr>";
 
  n++;
  x++;
    
}

const button = document.getElementById("submitbtn");
button.addEventListener("click" , (event)=>{
    event.preventDefault();
})
