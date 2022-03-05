let costumerCart = [
    {id:20221234, productName: "Phone", quantity: 2, unitPrice: 3699.0},
    {id:20226142, productName: "Book", quantity: 7, unitPrice: 65.0},
    {id:20211683, productName: "Selfie Stick", quantity: 5, unitPrice: 45.75},
    {id:20229489, productName: "Guitar", quantity: 1, unitPrice: 7550.0},
    {id:20201978, productName: "Headphone", quantity: 1, unitPrice: 595.0},
    {id:20217355, productName: "Bean", quantity: 15, unitPrice: 7.9}
]

costumerCart.push(
    {id:20190207, productName: "Controller", quantity: 1, unitPrice: 60.0}
)

costumerCart.map(product => console.log(product.productName, `: ${product.unitPrice}TL` ))


let economy = costumerCart.filter(product => product.unitPrice < 200)

console.log(economy)

let totalPrice = costumerCart.reduce((acc, product) => acc + product.unitPrice*product.quantity, 0)

console.log(totalPrice)