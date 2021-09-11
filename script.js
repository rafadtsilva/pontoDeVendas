var description
var amount
var price
var ok
var twoDecimal
var realFormat;
var listNumber = 0;
var totalValue = $("#valor-total");
var totalValue2 = $("#total-value");
var totalValueAcc = 0;

var purchaseData = document.getElementById("purchase-data");
console.log(purchaseData) 

//ADCIONANDO EVENTO PARA QUANDO APERTAR NO BOTÃO ENTER ELE DAR CLICK NO BOTÃO DO FORMULÁRIO
$("#price").keypress(e => {
  if(e.which == 13) {
    purchaseData.dispatchEvent(new Event('click'));
  };
})

$("#amount").keypress(e => {
  if(e.which == 13) {
    purchaseData.dispatchEvent(new Event('click'));
  };
})

$("#description").keypress(e => {
  if(e.which == 13) {
    purchaseData.dispatchEvent(new Event('click'));
  };
})

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
                            <td class="px-2">R$ ${price.toFixed(2)}</td>
                            <td>${amount}</td>
                            <td>R$ ${(amount*price).toFixed(2)}</td>
                          </tr>`);

  listNumber++
  totalValueAcc += parseFloat((amount*price).toFixed(2));
  totalValue.text(`R$ ${totalValueAcc.toFixed(2)}`);
  totalValue2.text(`R$ ${totalValueAcc.toFixed(2)}`);

  $("#valor-total").text()
  
  $("#description").val("");
  $("#amount").val("");
  $("#price").val("")
    
}