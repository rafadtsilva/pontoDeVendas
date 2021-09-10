var description
var amount
var price
var ok
var twoDecimal
var realFormat;
var listNumber = 0;
var nota;

$("#ok").click(lerDados)

function lerDados() {

  description = $("#description").val();
  amount = parseInt($("#amount").val());
  price = parseFloat($("#price").val());
  
  if(isNaN(amount) || isNaN(price) || description == ""){
    console.log("Preencha todos os campos corretamente")
  } else {
    
    $("#showDescription").text(`${description} (x${amount})`)

    // twoDecimal = (amount*price).toFixed(2);
    $("#nota-body").append(`<tr>
                              <td>${listNumber}</td>
                              <td class="text-start">${description}</td>
                              <td>R$ ${price}</td>
                              <td>${amount}</td>
                              <td>R$ ${(amount*price).toFixed(2)}</td>
                            </tr>`);
    listNumber++
    // nota = $("#nota-body").children()[listNumber];
    // nota.html()
  
    $("#description").val("");
    $("#amount").val("");
    $("#price").val("")
    
  }


}