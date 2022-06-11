
import router from "./helpers/router";
import Footer from "./layout/client/Footer";
import Header from "./layout/client/Header";
import Home from "./pages/client/home";
import bookDetail from "./pages/client/detail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from "./pages/admin/book";
import BookAdd from "./pages/admin/add";
import detail from "./pages/admin/detail";
import CartDetail from "./pages/client/cartDetail";

const render = async (content, id) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    //sau khi content đã render xong thì afterrender mới được chạy
    if (content.afterRender) {
        content.afterRender(id);
    }
}

router.on({
    '/': () => render(Home),
    '/cart': () => render(CartDetail),
    '/products': () => render(Product),
    '/products/detail/:id': (data) => render(bookDetail, data.data.id),
    '/admin':() => render(Book),
    '/admin/add': () => render(BookAdd),
    '/admin/detail/:id': (data) => render (detail, data.data.id),
    '/admin/edit/:id': (data) => render(BookAdd, data.data.id)
});
router.resolve();
