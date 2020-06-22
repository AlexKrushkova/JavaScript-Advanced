function solve() {
    const addBtn = document.querySelector("#add-new > button");
    const filterBtn = document.querySelector("#products > div > button");
    const buyBtn = document.querySelector("#myProducts > button");
    const name = document.getElementById("add-new").children[1];
    const qty = document.getElementById("add-new").children[2];
    const price = document.getElementById("add-new").children[3];
    const products = document.getElementById("products").children[1];
    const myProducts = document.getElementById("myProducts").children[1];

    let avlbProd = document.getElementById("products").children[1].children;
    let prodBtn = [];
    let totalPrice = document.getElementsByTagName('h1')[1];
    let totalPriceValue = 0;

    addBtn.addEventListener('click', addNewItem);
    function addNewItem(e) {
        e.preventDefault();
        let currName = name.value;
        let currQty = Number(qty.value);
        let currPrice = Number(price.value);
        let item = document.createElement('li');
        let itemName = document.createElement('span');
        let itemQty = document.createElement('strong');
        let priceSec = document.createElement('div');
        let itemPrice = document.createElement('strong');
        let itemBtn = document.createElement('button');

        itemName.textContent = currName;
        itemQty.textContent = `Available: ${currQty.toFixed()}`;
        itemPrice.textContent = currPrice.toFixed(2);
        itemBtn.textContent = "Add to Client's List";

        priceSec.appendChild(itemPrice);
        priceSec.appendChild(itemBtn);
        item.appendChild(itemName);
        item.appendChild(itemQty);
        item.appendChild(priceSec);
        products.appendChild(item);

        filterBtn.addEventListener('click', itemFilter);

        function itemFilter(e) {
            e.preventDefault();
            let arrFilter = Array.prototype.slice.call(avlbProd);
            let searcField = document.getElementById("filter");
            arrFilter.map((e, i) => {
                let el = e.firstElementChild.textContent;
                if (!el.toUpperCase().includes(searcField.value.toUpperCase())) {
                    e.style.display = "none";
                } else if (searcField.value === "") {
                    e.style.display = "block";
                }
            });
        }
        prodBtn = Array.from(avlbProd);
        prodBtn.forEach(function (e) {

            let eBtn = e.lastElementChild.lastElementChild;
            eBtn.addEventListener('click', addToCart)
        });
    }

    function addToCart(event) {
        event.preventDefault();
        const button = event.target;
        let myItem = document.createElement('li');
        let myItemPrc = document.createElement('strong');
        let myItmName = button.parentNode.previousSibling.previousSibling;
        let myItemValue = Number(button.previousSibling.textContent);
        let itemQty = Number(button.parentNode.previousSibling.textContent.split(" ")[1]) - 1;
        let avaibleQty = button.parentNode.previousSibling;
        if (itemQty < 1) {
            products.removeChild(button.parentNode.parentNode);
        } else {
            avaibleQty.textContent = `Available: ${itemQty.toFixed()}`;
        }


        myItem.textContent = myItmName.textContent;
        myItemPrc.textContent = myItemValue.toFixed(2);

        myItem.appendChild(myItemPrc);
        myProducts.appendChild(myItem);

        totalPriceValue += myItemValue;
        totalPrice.textContent = `Total Price: ${totalPriceValue.toFixed(2)}`
    }

    buyBtn.addEventListener('click', function (e) {
        e.preventDefault();
        totalPriceValue = 0;
        totalPrice.textContent = `Total Price: ${totalPriceValue.toFixed(2)}`
       
        let myProdCart = Array.from(document.getElementById("myProducts").children[1].children);
        myProdCart.map(e => { myProducts.removeChild(e) });

    })
}