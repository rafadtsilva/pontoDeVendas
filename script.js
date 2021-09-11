var description
var amount
var price
var ok
var twoDecimal
var realFormat;
var listNumber = 0;
var totalValue = $("#valor-total");
var totalValueAcc = 0;
// const testAmount = /[0-9][0-9]+/;

// $("#ok").click(lerDados)
$("#purchase-data").submit(lerDados);

function lerDados() {

  description = $("#description").val();
  amount = parseInt($("#amount").val());
  price = parseFloat($("#price").val());

  //atualiza última descrição
  $("#showDescription").text(`${description} (x${amount})`)

  //adiciona a descrição do produto inserido a nota
  $("#nota-body").append(`<tr>
                            <td class="pe-3">${listNumber+1}</td>
                            <td id="description" class="text-start"><span>${description}</span></td>
                            <td class="px-2">R$ ${price}</td>
                            <td>${amount}</td>
                            <td>R$ ${(amount*price).toFixed(2)}</td>
                          </tr>`);

  listNumber++
  console.log(parseFloat((amount*price).toFixed(2)))
  totalValueAcc += parseFloat((amount*price).toFixed(2));
  totalValue.text(`R$ ${totalValueAcc}`)

  $("#valor-total").text()
  
  $("#description").val("");
  $("#amount").val("");
  $("#price").val("")
    
}