const getStoredWishList = () => {
    const wishList = localStorage.getItem('wishList');
    return wishList ? JSON.parse(wishList) : [];
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        return (id, "Book already in wish list");
    }
    storedList.push(id);
    localStorage.setItem('wishList', JSON.stringify(storedList));
    return "Book added to wish list successfully";
}
export { addToStoredWishList };