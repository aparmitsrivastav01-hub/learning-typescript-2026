const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Charas Tea",
    price: 200,
    isHot: false
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea ={
    name: "Adrak Chai",
    price: 25,
    ingredients: ['ginger',"tea leaves"]
}

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material:"Steel"}

smallCup = bigCup

type Brew = {brewTime: number}

const coffee = {brewTime: 5,beans:"Arabica"}

const chaiBrew:Brew = coffee

type User = {
    username: string;
    password: string
}

const u: User = {
    username: "chaicode",
    password: "123"
}

type Item = {name: string, quantity: number}
type address = {street:string,pin:number}

type Order = {
    id:string;
    items: Item[]
    address : address
}