async function productsOnLoad() {
    let res = await fetch("http://localhost:3000/products/");
    let resjason = await res.json();
    let tbl = document.getElementById("tableId");


    for (let index = 0; index < resjason.length; index++) {
        
        let prod1=resjason[index];
    
        let tableRow = `<tr>
        <td>${prod1["name"]}</td>
        <td>${prod1["quantity"]}</td>
        <td>${prod1["price"]}</td>
        <td class="btn-containr"><a href="http://127.0.0.1:5500/front/product-details/index.html?id=${prod1["id"]}">
             details
        </a></td>
        </tr>`;
        tbl.insertAdjacentHTML("beforeend", tableRow);
    }
}
window.onload = productsOnLoad
