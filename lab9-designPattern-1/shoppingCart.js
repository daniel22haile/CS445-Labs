const shopingCart = function() {
    const basket = [];

    return {
        newBasket: [],
        upsetItem(product) {
            let item = 0
            this.newBasket.forEach(e => {
                if (product.id === e.id) {
                    e.count = e.count + 1
                    item++
                }
            })
            if (!item)
                this.newBasket.push(product)
        },
        getItemsCount() {
            let prodCount = 0
            this.newBasket.forEach(e => {
                prodCount += e.count
            })
            return prodCount;
        },
        getTotalPrice() {
            let total = 0;
            this.newBasket.forEach(e => {
                let totPrice = e.price * e.count;
                total += totPrice
            })
            return total;
        },
        removeItemById(id) {
            this.newBasket = this.newBasket.filter(value => {
                return value.id !== id
            })
        }

    }
}

let product = { id: 0, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5, count: 1 }
let p = { id: 3, name: 'shoes', description: 'nike', price: 100, count: 3 }
let value = shopingCart();
console.log(value.newBasket)
value.upsetItem(product);
value.upsetItem(p);
console.log(value.getItemsCount());
console.log(value.getTotalPrice())
console.log(value.newBasket)
value.removeItemById(0)
console.log(value.getItemsCount());