module.exports = class Machine {

    //WRITTEN BY MUHAMMAD ATIQUE

    static items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}]
    static amount = 0;
    constructor() {

    }
    seeSelections() { 
        console.log(this.items)
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

    selectItem(code){
        for(let item in Machine.items){
            if(code==item)return true;
            return 'The item you selected is unavailable'
}
    }
};