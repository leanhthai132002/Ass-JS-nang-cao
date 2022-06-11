import Cart from "../../layout/client/cart";
import reRender from "../../helpers/reRender";

const CartDetail = {
    render: () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');








        return (
            
            cartItems.map(item => (`
 
    <table class="table table-hover">
    <thead>
      <tr>
        <th>Tên sách</th>
        <th>Số lượng</th>
        <th>Giá</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> ${item.name}</td>
        <td>${item.value}</td>
        <td>${item.sale_price} VND</td>
        <td> <button data-id="${item.id}" class='btn btn-danger' id='delete-cart-btn'>Xoá</button> </td>
      </tr>
    </tbody>
    </table>
     ` )).join('')
)
    








    
    
    },
    afterRender: () => {
        // 1. Tìm nút để tạo sự kiện xoá
        const deleteCartBtn = document.querySelector('#delete-cart-btn');
        deleteCartBtn.addEventListener('click', () => {
            // Tìm id cần được xoá qua thuộc tính data-id
            const itemId = deleteCartBtn.dataset.id;
            // Lấy ds sp trong giỏ
            const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            // Tạo 1 mảng mới từ mảng cũ nhưng đã loại bỏ sp có id là itemId
            const newCartItems = cartItems.filter((item) => item.id !== itemId);
            // Lưu lại giỏ hàng và render lại view chi tiết và view GH
            localStorage.setItem('cart', JSON.stringify(newCartItems));
            reRender('#content', CartDetail);
            reRender('#cart', Cart);
            console.log(item);
        });
    }
};

export default CartDetail;
