const Machine = require('../src/Machine');

//WRITTEN BY MUHAMMAD ATIQUE

//1-As a customer, I want to see that the vending machine has items, so that I can purchase them.

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{name: 'crisps',price: 100}, {name: 'chocolate',price: 350}, {name:'mints',price: 70}];

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
        const code = 3;
        // act
        const actual = machine.selectItem(code)
        //assert
        expect(expected).toEqual(actual)


    }
    )

    // WRITTEN BY ALI BIN IJAZ

    // 5-As a customer, I want to see a message if my deposit is insufficient, so that I know to add more money.

    it('I want to see a message if my deposit is insufficient', () => {

        //Arrange
        const machine = new Machine();
        machine.amountEmpty()
        const expected = 'Your deposit is insufficient.  Please add Rs 20 for this item';
        machine.deposit(50)
        // act
        const result = machine.selectItem(2)
        //assert
        expect(expected).toEqual(result)
    }

    )

//WRITTEN BY ALI BIN EJAZ

    it("return the change", () => {
        // Arange
        const machine = new Machine();
        machine.amountEmpty()
        const expected = {
            item: 'mints',
            change: [20,10]
        }
        machine.deposit(100)
        // Act
        const result = machine.selectItem(2)
        // Assert
        expect(expected).toEqual(result)
    })

//WRITTEN BY ALI BIN EJAZ

//7-As a customer, I want to receive my money back when I push the cancel button, so that I can change my mind.

    it("Give my money back", () =>{
       //Arrange
        const machine = new Machine()
        machine.amountEmpty()
        const expected = {change: [100]}
        machine.deposit(100)
       //Act
       const result = machine.cancelAmount()
        //Assert
        expect(expected).toEqual(result)
    })

//WRITTEN BY ALI BIN EJAZ

//8-As a customer, I want to know if the vending machine can make change, so that I can cancel my choice if it can't make change.

    it("Can't make change", () =>{
         //Arrange
         const machine = new Machine()
         machine.amountEmpty()
         machine.deposit(200)
         const expected = 'Cannot return proper change.  Please choose another item or cancel the transaction'
         //Act
            const result = Machine.selectItem(1)

          //Assert
          expect(expected).toEqual(result)
});

})
