var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var productList= [];
function addProduct(){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    }
    productList.push(product);

    // clearForm();

    displayData();

    console.log(productList);
}

function clearForm(){
    productNameInput.value= "";
    productPriceInput.value= "";
    productCategoryInput.value= "";
    productDescriptionInput.value= "";
}

function displayData(){

    var cartona = "";
    for(var i=0; i<productList.length; i++){
      cartona += `<tr>
      <td> ${i+1} </td> 
      <td> ${productList[i].name} </td>
      <td>${productList[i].price}</td>
      <td>${productList[i].category}</td>
      <td>${productList[i].description}</td>
      <td> <button  class="btn btn-sm btn-warning" > update</button>
       <button onclick=" deleteItem( ${i} ) " class="btn btn-sm btn-danger">delete </button>  </td>
      </tr>`
    }

    document.getElementById("tableBody").innerHTML = cartona
}
function deleteItem( index ){
productList.splice( index, 1);
displayData();

 }
