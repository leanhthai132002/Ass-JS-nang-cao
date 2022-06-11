import { getBooks, deleteBook } from "../../api/book";
import reRender from "../../helpers/reRender";
import Cart from "../../layout/client/cart";

const Home = {
  render: async () => {
    const response = await getBooks();
    const { data } = response;
    return `
          <div class="container">
          <div class="row">
          <a href="/cart"><div id='cart'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>${Cart.render()}</div></a>
          
          ${data.map(
            (book) => `
      
            <div class="col-md-3">
              <div class="card mb-3 box-shadow">
                <img src="https://i.imgur.com/ZfTboio.png" alt="">
                <div class="card-body">
                  <p class="card-text">${book.name}</p>
                  <div class="price-group">
                    <del class="old-price" style="text-decoration: line-through;">${book.price}</del> 
                    <span class="price sale-price" style="color: #d71a00;">${book.sale_price}</span> 
                    <span class="badge" style="background-color: #d71a00;">30%</span></div>
                  </div>
                  <a  class="btn btn-sm btn-outline-secondary" href="/products/detail/${book.id}"><button>Order now</button></a>
              </div>
            </div>
           `
          )}
          </div>
        </div>
    </div>
    `;
  },
};

export default Home;
