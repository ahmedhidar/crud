var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var searchInput = document.getElementById('searchInput');
var updateBtn = document.getElementById('updateBtn');
var addBtn = document.getElementById('addBtn');
var indexUpdate = 0;
var productList = [];

if(localStorage.getItem('products') != null){
    productList = JSON.parse(localStorage.getItem('products'));
    displayData();
}


function addProduct(){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    }
    productList.push(product);
    localStorage.setItem('products', JSON.stringify(productList));

    clearForm();

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
      <td> <button  class="btn btn-sm btn-warning" onclick="setData(${i})" > update</button>
       <button onclick=" deleteItem( ${i} ) " class="btn btn-sm btn-danger">delete </button>  </td>
      </tr>`
    }

    document.getElementById("tableBody").innerHTML = cartona
}
function deleteItem( index ){
productList.splice( index, 1);
localStorage.setItem('products', JSON.stringify(productList));
displayData();

 }

 function search(){
    var term = searchInput.value;
    var cartona = "";
    for(var i=0; i<productList.length; i++){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){

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
    }

    function setData(index){
var currentProduct = productList[index].name;
indexUpdate = index
productNameInput.value= productList[index].name;
productPriceInput.value= productList[index].price;
productCategoryInput.value= productList[index].category;
productDescriptionInput.value= productList[index].description;

updateBtn.classList.remove("d-none");
addBtn.classList.add("d-none");
    }

    function updateProduct (){

        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            description: productDescriptionInput.value
        }

        productList.splice(indexUpdate,1,product);
        localStorage.setItem('products', JSON.stringify(productList));
        displayData();

        updateBtn.classList.add("d-none");
        addBtn.classList.remove("d-none");
        clearForm();
    }