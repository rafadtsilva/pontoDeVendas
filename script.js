var description
var amount
var price
$("#ok").click(lerDados)

function lerDados() {
  description = $("#description").val();
  amount = parseInt($("#amount").val());
  price = parseInt($("#price").val());

  console.log(description)
  console.log(amount*price)
  // console.log(price)
}