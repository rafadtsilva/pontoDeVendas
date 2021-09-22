
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
const PAS = "ProductsAndServices";

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
// db.collection(PAS).get().then((snapshot) => {
//   snapshot.forEach(doc => {
//     db.collection(PAS).doc(doc.id).delete().then(() => {
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
var item;
var bill = [];

const insertProducsAndServices = function(nome, cost, price, amount, type) {
  
  db.collection(type).doc(productNumber.toString()).set({
    nome: nome,
    amount: amount,
    cost: cost,
    price: price
  }).then(doc => {
    console.log("Produto inserido com sucesso", doc);
  }).catch(err => {
    console.log(err);
  })
  productNumber++

}

// var nomeDb;
// var valueDb;
// var amountDb;

function getServicesAndProductsByName (nome, type) {

  db.collection(type).where("nome", "==", nome).get().then(snapshot => {
    snapshot.forEach(doc => {
    let item = doc.data();
    pegandoDoDb(item.nome, item.price);  
    })
  })

}

getServicesAndProductsByName("Curriculo", PAS);

// insertProducsAndServices("Xerox P/B", 0.20, 0.50, 999999, PAS)
// insertProducsAndServices("Xerox Color", 0.40, 1.00, 999999, PAS)
// insertProducsAndServices("Impressão P/B", 0.20, 0.50, 999999, PAS)
// insertProducsAndServices("Impressão Color", 0.40, 1.00, 999999, PAS)
// insertProducsAndServices("Curriculo", 1, 4.00, 999999, PAS)
// insertProducsAndServices("Scanner", 0.20, 0.50, 999999, PAS)
// insertProducsAndServices("Lapis", 0.40, 0.80, 100, PAS)
// insertProducsAndServices("Caneta", 0.45, 1, 300, PAS)




//ADCIONANDO EVENTO PARA QUANDO APERTAR NO BOTÃO ENTER ELE DAR CLICK NO BOTÃO DO FORMULÁRIO
var purchaseData = document.getElementById("purchase-data");

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

  bill[listNumber] = {
    nome: billName,
    price: billPrice,
    amount: billAmount,
    total: billAmount*billPrice
  }
  console.log(bill)

  //atualiza última descrição
  $("#showDescription").text(`${billName} (x${billAmount})`)
  
  totalValueOfSpecificRegister = parseFloat((billAmount * billPrice).toFixed(2));

  bill[listNumber] = {
    nome: billName,
    price: billPrice,
    amount: billAmount,
    total: totalValueOfSpecificRegister
  }
  console.log(bill)

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

function pegandoDoDb(nome, price) {
  $("#bill-name").val(nome);
  $("#bill-price").val(price.toFixed(2));
}