const orders = [
    {
        date: '2005-05-12',
        subtotal: 90.12,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Old Red Shoe',
                    price: 45.06,
                },
                quantity: 2,
            }
        ]
    }
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
}
