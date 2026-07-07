

const chaiFlavours: string[] = ["Masala","Adrak"]
const chaiPricing: number[]  = [10,20]

const rating: Array<number> = [5.4,5.6]

type Chai = {
    name:string;
    price: number;
}

const menu: Chai[] = [
    {name:"Masala",price:15}
    {name:"Adrak",price:20}
]

const cities: readonly string[]  = ["Delhi","Jaipur"]

// cities.push("Pune")


const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

let chaiTuple: [string,number];
chaiTuple = ["masala",20]
// chaiTuple = [20,"masala"] wrong

let userInfo: [string,number,boolean?]
userInfo = ["Srivastav",100,true]

const location: readonly [number,number] = [28.44,24.55]

const chaiItems: [name:string,price:number] = ["Masala",40]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED  ,// 101
    CANCELLED // 102
}

enum ChaiType{
    MASALA = "masala",
    GINGER = "ginger"
}

function makechai(type:ChaiType){
    console.log(`making ${type}`);
}

makechai(ChaiType.GINGER)



enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugar{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// const s = Sugar.HIGH

let t: [string,number] = ["chai",10]

t.push("extra")