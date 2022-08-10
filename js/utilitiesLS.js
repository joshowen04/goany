

export default class AddToCart {
    constructor() {
        this.cart = this.getItems('cart');

        }

        addItem(item){
            this.cart = this.getItems();
            this.cart.push(item);
            localStorage.setItem('cart', JSON.stringify(this.cart));
            let shoppingCart = document.querySelector("#shoppingCart")
            shoppingCart.src = "./images/icons/shopping-cart-icon-full_50.png"
        }
        deleteItem(){
            this.cart = this.getItems();
        }

        getItems(){
            return JSON.parse(localStorage.getItem('cart') || "[]");
        }

        deleteallItems(){
            localStorage.setItem('cart', "");
            let shoppingCart = document.querySelector("#shoppingCart")
            shoppingCart.src = "./images/icons/shopping-cart-icon_50.png"
        }

    }



