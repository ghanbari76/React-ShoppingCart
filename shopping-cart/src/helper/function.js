const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const filteredTitle = splitedTitle.filter(item => item.length > 1);
    const newTitle = `${filteredTitle[0]} ${filteredTitle[1]}`; 
    return newTitle;
};
const isInCart = (state,id) => {
    const result = !! state.selectedItems.find(item => item.id === id);
    return result;
};

const quantityCount = (state,id) => {
    const index = state.selectedItems.findIndex(item => item.id === id );
    if(index === -1) {
        return false;
    }else {
        return state.selectedItems[index].quantity;
    }
};
const searchProducts = (products,search) => {
    if (!search) return products;
    const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search)
    );
    return searchedProducts;
};
const filterProducts = (products,category) => {
    if (!category) return products;
    const filteredProducts = products.filter(products => 
        products.category === category
    );
    return filteredProducts;
}

export { shorten, isInCart, quantityCount, searchProducts, filterProducts };

