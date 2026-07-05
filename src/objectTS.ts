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


type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates:Partial<Chai>) => { //dena ho do na dena ho ma chudao
    console.log("updating chai with",updates)
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({})

type ChaiOrder = {
    name?:string;
    quantity?:number    
}

const placeOrder = (order: Required<ChaiOrder>) => {  // sabko required krdeta h required
    console.log(order);
}


placeOrder({
    name:"chai",
    quantity:2
})

type Chai2 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai2,"name"|"price">;  // particular propertiess par hi work karna 

const chaiInfo: BasicChaiInfo = {
    name: "LEMON TEA",
    price: 20
}

type Chai3 = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}

type PublicChai = Omit<Chai3,"secretIngredients">  // chodh doo hata do bc 