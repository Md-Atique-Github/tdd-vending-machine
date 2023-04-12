const Machine = require('../src/Machine');

//WRITTEN BY MUHAMMAD ATIQUE

//1-As a customer, I want to see that the vending machine has items, so that I can purchase them.

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{ 'crisps': 100 }, { 'chocolate': 350 }, { 'mints': 70 }];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(expected).toEqual(actual);
    });

//WRITTEN BY MUHAMMAD ATIQUE

//2-As a customer, I want to know how much money I have deposited, so that I know what I can purchase.

it('how much money I have deposited', () => {
    // arrange
    const machine = new Machine();
    const expected = "You have deposited Rs 20";
    const denomination = 20;
    // act
    const actual = machine.deposit(denomination)
    // assert
    expect(expected).toEqual(actual)
}
)

    //WRITTEN BY MUHAMMAD ATIQUE

    //3-As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.

    it('I want to add additional money', () => {
        // arrange
        const machine = new Machine();
        const expected = "You have deposited Rs 70";
        const denomination = 50;
        // act
        const actual = machine.deposit(denomination)
        // assert
        expect(expected).toEqual(actual)
    }
    )

    //WRITTEN BY MUHAMMAD ATIQUE

    //4-As a customer, I want to see a message if my item is unavailable, so that I can make another choice.

    it(' I want to see a message if my item is unavailable', () => {
        //Arrange
        const machine = new Machine();
        const expected = 'The item you selected is unavailable';
        const code = 1;
        // act
        const actual = machine.selectItem(code)
        //assert
        expect(expected).toEqual(actual)


    }
    )
});
