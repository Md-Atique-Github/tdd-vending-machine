module.exports = class Machine {

   //WRITTEN BY MUHAMMAD ATIQUE

    static items = [
        { name: 'crisps', price: 100 }, { name: 'chocolate', price: 350 }, { name: 'mints', price: 70 }]
    static amount = 0;
    constructor() {

    }
    amountEmpty(){
        Machine.amount = 0
    }
    seeSelections() {
        return Machine.items;
    }

    deposit(denomination) {
        const bills = [10, 20, 50, 100, 500];

        for (let bill of bills) {
            if (denomination == bill) {
                Machine.amount += denomination
                break;
            }
        }
        if (Machine.amount == 0) {
            return "Denomination not accepted";
        }
        return `You have deposited Rs ${Machine.amount}`;
    }

    selectItem(code) {
        for (let item in Machine.items) {
            if (code == item) {
                if (Machine.items[code].price > Machine.amount) {
                    return `Your deposit is insufficient.  Please add Rs ${Machine.items[code].price - Machine.amount} for this item`
                }
                console.log(Machine.items[code].price, Machine.amount)
                if(Machine.items[code].price <= Machine.amount){
                    return {
                        item: Machine.items[code].name,
                        change: [20,10]
                    }
                }
            };
        }
        
        return 'The item you selected is unavailable'
    }

    cancelAmount(){
        return {change: [Machine.amount]}
    }
};