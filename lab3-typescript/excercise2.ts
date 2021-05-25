
//TODO - MY solution

let bankAccount : {​​​​​
    money: number;
    deposit (value: number):void;
    }​​​​​;
     
    bankAccount = {​​​​​
    money: 2000,
    deposit (value: number){​​​​​
    this.money += value
    }​​​​​
    }​​​​​
    let myself : {​​​​​
    name: string;
    bankAccount:typeof bankAccount;
    hobbies: [string, string]
    }​​​​​;
     
    myself = {​​​​​
    name : "Assad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
     
    }​​​​​
     
    myself.bankAccount.deposit(3000);
    console.log(myself);

//TODO - Prof's solution



//TODO - Question 2
    // let bankAccount = { 
// 	money: 2000, 
// 	deposit(value) { 
// 		this.money += value; 
// 	} 
// }; 
// let myself = { 
// 	name: "Asaad", 
// 	bankAccount: bankAccount, 
// 	hobbies: ["Violin", "Cooking"] 
// }; 

// myself.bankAccount.deposit(3000); 
// console.log(myself);


//TODO -- method 2 solution - using interfafce
// interface IbankAccount {
//     money: number;
//     deposit(value: number): void;

// }
// interface Imyself extends IbankAccount {
//     name: string;
//     hobbies: string[]
// }

// let myself: Imyself = {
//     name: "asaad",
//     hobbies: ["violine", "cooking"],
//     money: 3000,
//     deposit(value): void {
//         this.money += value;
//     }

// }
// myself.deposit(3000);
// console.log(myself);