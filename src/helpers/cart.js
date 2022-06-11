const cartKey = 'cart';

export const getCart = () => {
    const cartString = localStorage.getItem('cart');

    return JSON.parse(cartString) || [];
};

export const addCart = (item) => {
    // 0. Lấy giỏ hàng ra đã
    // 1. Nhận được item có id, name, value

    // 2. Kiểm tra xem item có id đó đã tồn tại trong giỏ hàng hay chưa
    // 2.1 Nếu đã có trong giỏ hàng thì chỉ được tăng value của nó lên
    // [{id: 1, name: 'abc', value: 2}] -> [{id: 1, name: 'abc', value: 2 + item.value}]

    // 2.2 Nếu chưa có thì mới push item đó vào mảng giỏ hàng
    // giỏ hàng chưa có [] -> push item vào
}
