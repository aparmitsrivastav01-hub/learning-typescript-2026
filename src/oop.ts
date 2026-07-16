// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour:string,price:number){
//     //     this.flavour = flavour 
//     //     this.price = price
//     // }
//     constructor(flavour:string){
//         this.flavour = flavour 
//         console.log(this);
        
//     }

// }



// const masalaChai = new Chai("Ginger",20)
// masalaChai.flavour = "Masala"

// Access Modifier

class Chai{
    public flavor:string = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients //ok
    }

}

class Shop{
    protected shopName = "Chai Corner"
}


class Branch extends Shop{
    getName(){
        return this.shopName //OK
    }
}

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()


class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}
// const c = new Chai()
// // c.reveal()


class ModerChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if (value>5) throw new Error("Too Sweet");
        this._sugar = value
    }
}

const c = new ModerChai()
c.sugar = 3

class EkChai {
    static shopName = "ChaiCode Caffe"

    constructor(public flavour:string){}
}

console.log(EkChai.shopName);

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("brewing chai");
        
    }
}


class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}