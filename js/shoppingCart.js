import AddToCart from "./utilitiesLS.js";
const utilities = new AddToCart();

export default class Cart {
    constructor(){

        self.currentCart = utilities.getItems();
        // self.cartwindow = self.buildCart();

    }

    buildCart(){
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("cartDiv")
        let cartItems = document.createElement("p");
        cartItems.textContent = "Hi there"

        mainDiv.appendChild(cartItems);
        return mainDiv;
    }

}