const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 51.12,
        reviews: [],
    },
    {
        id: 'bluejean',
        description: 'Blue Jean',
        price: 55.55,
        reviews: [],
    }
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
}