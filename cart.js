// ensure page loads
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

function removeCartItem(event){
    var buttonClicked = event.target
    // cart-quantity parent of btn-danger, cart-row parent of cart-quantity
    buttonClicked.parentElement.parentElement.remove() 
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i] // whichever row we're on in array
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}