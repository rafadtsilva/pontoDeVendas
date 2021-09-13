
const firebaseConfig = {
  apiKey: "AIzaSyBDAEG26np9pOIPUABWQ6hbJ2BumVNUEv4",
  authDomain: "gerenciador-de-loja-2d366.firebaseapp.com",
  projectId: "gerenciador-de-loja-2d366",
  storageBucket: "gerenciador-de-loja-2d366.appspot.com",
  messagingSenderId: "743332806020",
  appId: "1:743332806020:web:04073beab89f3df253b1d1",
  measurementId: "G-CPNK8F2RBV"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
const PRODUTOS = "Produtos"
const SERVICES = "Serviços"

// db.collection(SERVICES).doc("inicio").set({
    
//   nome: "teste"
  
// }).then(doc => {
//   console.log("doc criado: ", doc)
// }).catch(err => {
//   console.log(err)
// })

// db.collection(PRODUTOS).doc("0001").delete().then(() => {
//      console.log("Operação realizada com sucesso.")
//    }).catch (err => {
//      console.log(err)
//    })

//DELETADOR
// db.collection(SERVICES).get().then((snapshot) => {
//   snapshot.forEach(doc => {
//     db.collection(SERVICES).doc(doc.id).delete().then(() => {
//       console.log(`${doc.id} apagado com sucesso`)
//     }).catch((err) => {
//       console.log(err)
//     })
//   })
// })


var buyer = "Desconhecido";
var billName;
var billAmount;
var billPrice;
var twoDecimal;
var realFormat;
var listNumber = 0;
var productNumber = 0;
var serviceNumber = 0;
var totalValueOfSpecificRegister = 0;
var totalValueAcc = 0;

const insertProducs = function(nome, amount, cost, value) {
  
  db.collection(PRODUTOS).doc(productNumber.toString()).set({

    nome: nome,
    amount: amount,
    cost: cost,
    value: value

  }).then(doc => {
    console.log("Produto inserido com sucesso", doc);
  }).catch(err => {
    console.log(err);
  })

  productNumber++


}

const insertServices = function(nome, cost, value, amount) {
  
  db.collection(SERVICES).doc(serviceNumber.toString()).set({

    nome: nome,
    amount: amount,
    cost: cost,
    value: value

  }).then(doc => {
    console.log("Produto inserido com sucesso", doc);
  }).catch(err => {
    console.log(objeto)
    console.log(err);
  })

  serviceNumber++;
  
}

var bill = [];
class billProducts {
  constructor(name, value, amount) {
    this.name = name;
    this.value = value;
    this.amount = amount;
    this.totalValue = parseFloat((value * amount).toFixed(2));
  }
}

var products = [];
// class Produto {
//   constructor(name, value, amount) {
//     this.name = name;
//     this.valor = value;
//     this.amount = amount;
//   }
// }



insertServices("Xerox P/B", 0.20, 0.50, 999999)
insertServices("Xerox Color", 0.40, 1.00, 999999)
insertServices("Impressão P/B", 0.20, 0.50, 999999)
insertServices("Impressão Color", 0.40, 1.00, 999999)
insertServices("Curriculo", 1, 4.00, 999999)
insertServices("Scanner", 0.20, 0.50, 999999)

// products[0] = new Produto ("Lapis", 0.80, 100);
// console.log(products[0]);
// var objeto1 = {
//   nome: "RAfael",
//   idade: 3
// }

var purchaseData = document.getElementById("purchase-data");

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

$("#purchase-data").submit(registerProducts);

function registerProducts () {
  
  billName = $("#bill-name").val();
  billAmount = parseInt($("#bill-amount").val());
  billPrice = parseFloat($("#bill-price").val());

  bill[listNumber] = new billProducts(billName, billPrice, billAmount)
  console.log(bill)

  //atualiza última descrição
  $("#showDescription").text(`${billName} (x${billAmount}})`)
  
  totalValueOfSpecificRegister = parseFloat((billAmount * billPrice).toFixed(2));

    //adiciona a descrição do produto inserido a nota
  $("#nota-body").append(`<tr>
                            <td class="pe-3">${listNumber+1}</td>
                            <td id="description" class="text-start"><span>${billName}</span></td>
                            <td class="px-2">R$ ${billPrice.toFixed(2)}</td>
                            <td>${billAmount}</td>
                            <td>R$ ${(totalValueOfSpecificRegister).toFixed(2)}</td>
                          </tr>`);

  listNumber++
  totalValueAcc += parseFloat((billAmount*billPrice).toFixed(2));
  $("#total-value1").text(`R$ ${totalValueAcc.toFixed(2)}`);
  $("#total-value2").text(`R$ ${totalValueAcc.toFixed(2)}`);

  $("#valor-total").text()
  
  $("#bill-name").val("");
  $("#bill-amount").val("");
  $("#bill-price").val("")
    
}