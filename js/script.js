//setup variables
var productBtn=document.getElementById('product_btn');
var productContainer=document.getElementById('product_container');
var productInput=document.getElementById('product_input');
var data=[
    {id:1,name:"product1",desc:"bla bla bla"},
    {id:2,name:"product2",desc:"bla bla bla"},
    {id:3,name:"product3",desc:"bla bla bla"},
    {id:4,name:"product4",desc:"bla bla bla"}
];
//draw UI
function drawUi(items){
    productContainer.innerHTML='';
   items.forEach(function(ele) {
       productContainer.innerHTML+= `
       <div >
       ${ele.name}
       <button style="background-color:red;color:white;margin:0px 0 6px 10px;"onclick='deleteItem(${ele.id})'>delete
       </button>
       <div/> 
       `;   
   });
}
//load data
window.onload=function(){
    drawUi(data);
};
//add item
productBtn.addEventListener("click",addItem);
function addItem(){
    //simple validation
    if(product_input.value=="") alert('you should enter');
    var lastId=data.length ? data[data.length-1].id:0;
    //add to array
    data.push({id:++lastId,name:productInput.value,desc:"bla bla bla"});
    var addedItem=data[data.length-1];
    productContainer.innerHTML+= `
    <div onclick='deleteItem(${addedItem.id})'>
    ${addedItem.name}
       <button style="background-color:red;color:white;"onclick='deleteItem(${addedItem.id})'>delete
       </button>
    <div/> 
    `;
    productInput.value="";//pour vider l'input

}
function deleteItem(id){
    var index=data.map(function(i){
        return i.id;
    }).indexOf(id);
    if(index !==-1){
        data.splice(index,1);
        drawUi(data);
    }
    console.log(data);
}

