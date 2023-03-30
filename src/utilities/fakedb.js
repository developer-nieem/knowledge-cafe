// use local storage to manage cart data
const addToDb = id => {
    let blogItemCart = getBlogItemCart();
    // add quantity
    const quantity = blogItemCart[id];
    if (!quantity) {
        blogItemCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        blogItemCart[id] = newQuantity;
    }
    localStorage.setItem('blog-item', JSON.stringify(blogItemCart));
}

const removeFromDb = id => {
    const blogItemCart = getBlogItemCart();
    if (id in blogItemCart) {
        delete blogItemCart[id];
        localStorage.setItem('blog-item', JSON.stringify(blogItemCart));
    }
}

const getBlogItemCart = () => {
    let blogItemCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('blog-item');
    if (storedCart) {
        blogItemCart = JSON.parse(storedCart);
    }
    return blogItemCart;
}



export {
    addToDb,
    removeFromDb,
    getBlogItemCart,
  
}
