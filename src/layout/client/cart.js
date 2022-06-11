const Cart = {
    render: () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        let cartItemsValue = 0;
        cartItems.forEach(cartItem => {
            cartItemsValue += cartItem.value;
        });

        return `<span> ${cartItemsValue}</span>`
    }
};

export default Cart;
