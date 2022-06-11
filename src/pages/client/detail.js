import { getBook } from "../../api/book";
import reRender from "../../helpers/reRender";
import Cart from "../../layout/client/cart";

const bookDetail = {
    render: async (id) => {
        const response = await getBook(id);
        const {data} = response; // const data = response.data;
        return (
            `
            <div class="container">
            <div id='cart'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>${Cart.render()}</div>
            <div class="col-lg-8 border p-3 main-section bg-white">
                <div class="row hedding m-0 pl-3 pt-0 pb-3">
                    Sách lậu siêu cấp vip pro max
                </div>
                <div class="row m-0">
                    <div class="col-lg-4 left-side-product-box pb-3">
                        <img src="https://i.imgur.com/ZfTboio.png" class="border p-3">
                    </div>
                    <div class="col-lg-8">
                        <div class="right-side-pro-detail border p-3 m-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <span>Sách --></span>
                                    <p class="m-0 p-0">${data.name}</p>
                                </div>
                                <div class="col-lg-12">
                                    <p class="m-0 p-0 price-pro">${data.sale_price}</p>
                                    <hr class="p-0 m-0">
                                </div>
                                <div class="col-lg-12 pt-2">
                                    <h5>Product Detail</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris.</span>
                                    <hr class="m-0 pt-2 mt-2">
                                </div>
                                <div class="col-lg-12">
                                    <h6>Quantity :</h6>
                                    <input type="number" class="form-control text-center w-100" id='cartValue' value='1' min='1'>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div class="row">
                                        <div class="col-lg-12 pb-2">
                                            <button class="btn btn-danger w-100" 
                                            data-sale_price="${data.sale_price}" 
                                            data-id="${data.id}"
                                            data-name="${data.name}"
                                            id='btn-add-cart'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        );
    },
    
    afterRender: () => {
        const btnAddCart = document.querySelector('#btn-add-cart');
        btnAddCart.addEventListener('click', () => {
            const item = {
                id: btnAddCart.dataset.id,
                name: btnAddCart.dataset.name,
                sale_price: btnAddCart.dataset.sale_price,
                value: +document.querySelector('#cartValue').value || 1
            };

            // Lưu trữ vào localStorage: setItem(key, giá trị bắt buộc là 1 chuỗi)
            // 1. Xem giỏ hàng có gì chưa
            const cartItemsString = localStorage.getItem('cart'); // lấy ra giá trị từ key cart
            // Nếu chưa có thì giá trị là null -> []
            const cartItems = JSON.parse(cartItemsString || '[]');
            // 2. Nếu chưa có gì thì push luôn sv vào
            if (!cartItems.length) {
                cartItems.push(item);
            } else {
                // 2.1 Tìm xem có phần tử nào giống cái đang muốn push vào không
                const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
                if (existItem) {
                    existItem.value += item.value;
                } else {
                    cartItems.push(item);
                }
            }
            // 3. Set giá trị mới cho giỏ hàng
            localStorage.setItem('cart', JSON.stringify(cartItems));
            reRender('#cart', Cart);
        });
    }
};

export default bookDetail;
