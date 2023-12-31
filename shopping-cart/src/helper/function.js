const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const filteredTitle = splitedTitle.filter(item => item.length > 1);
    const newTitle = `${filteredTitle[0]} ${filteredTitle[1]}`; 
    return newTitle;
}
const isInCart = (state,id) => {
    const result = !! state.selectedItems.find(item => item.id === id);
    return result;
}

const quantityCount = (state,id) => {
    const index = state.selectedItems.findIndex(item => item.id === id );
    if(index === -1) {
        return false;
    }else {
        return state.selectedItems[index].quantity;
    }
}


export { shorten,isInCart,quantityCount };

