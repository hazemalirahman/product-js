window.onload= async function productDetails(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    let res = await fetch("http://localhost:3000/products/" + id);
    // let res = await fetch(`http://localhost:3000/products/${id}`);

    if (!res.ok) {alert("error calling api")}

    let resJson = await res.json();
    
    let nameDiv=document.getElementById("name");
    nameDiv.innerHTML = resJson["name"];
    
    let desDiv=document.getElementById("description");
    desDiv.innerHTML = resJson["description"];
    
    let quantityDiv=document.getElementById("quantity");
    quantityDiv.innerHTML = resJson["quantity"];
    
    let priceDiv=document.getElementById("price");
    priceDiv.innerHTML = resJson["price"];

    let imgDiv=document.getElementById("img");
    imgDiv.src= "http://localhost:3000" + resJson["imageurl"];
}

function hazem(){
    let i = 1;
    let j = 2;
    let z = i + j;
    console(z);
}