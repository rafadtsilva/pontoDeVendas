var description
var amount
var price
var ok

$("#ok").click(lerDados)

function lerDados() {

  description = $("#description").val();
  amount = parseInt($("#amount").val());
  price = parseInt($("#price").val());
  
  if(isNaN(amout) || isNaN(price) || description == ""){
    console.log("Preencha todos os campos corretamente")
  } else {
    
    $("#showDescription").text(`${description}`)

    console.log(description)
    console.log(amount*price)
  
    $("#description").val(" ");
    $("#amount").val(" ");
    $("#price").val(" ")
    
  }


}