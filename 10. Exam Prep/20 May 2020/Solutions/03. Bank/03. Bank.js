class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer){
        const { firstName, lastName, personalId } = customer;
        const existingCustomer = this.allCustomers.find(person => person.personalId === personalId);
        if (existingCustomer) throw new Error(`${firstName} ${lastName} is already our customer!`);
        this.allCustomers.push({ firstName, lastName, personalId, totalMoney: 0, transactions: [] });
        return { firstName, lastName, personalId }
    }

    depositMoney(personalId, amount) {
        const existingCustomer = this.allCustomers.find(person => person.personalId === personalId);
        if (!existingCustomer) throw new Error('We have no customer with this ID!');
        existingCustomer.totalMoney += amount;
        existingCustomer.transactions.push(`${existingCustomer.firstName} ${existingCustomer.lastName} made deposit of ${amount}$!`);
        return `${existingCustomer.totalMoney}$`;
    }
    withdrawMoney(personalId, amount) {
        const existingCustomer = this.allCustomers.find(person => person.personalId === personalId);
        if (!existingCustomer) throw new Error('We have no customer with this ID!');
        if (existingCustomer.totalMoney - amount < 0) throw new Error(`${existingCustomer.firstName} ${existingCustomer.lastName} does not have enough money to withdraw that amount!`);
        existingCustomer.totalMoney -= amount;
        existingCustomer.transactions.push(`${existingCustomer.firstName} ${existingCustomer.lastName} withdrew ${amount}$!`);
        return `${existingCustomer.totalMoney}$`;
    }
 
    customerInfo(personalId) {
        const existingCustomer = this.allCustomers.find(person => person.personalId === personalId);
        if (!existingCustomer) throw new Error('We have no customer with this ID!');
        let result = `Bank name: ${this._bankName}\n`;
        result += `Customer name: ${existingCustomer.firstName} ${existingCustomer.lastName}\n`;
        result += `Customer ID: ${personalId}\n`;
        result += `Total Money: ${existingCustomer.totalMoney}$\n`;
        result += `Transactions:\n`;
        const reversed = existingCustomer.transactions.reverse()
        reversed.forEach((trans, index) => result += `${reversed.length - index}. ${trans}\n`)
        return result.trim()
    }
}