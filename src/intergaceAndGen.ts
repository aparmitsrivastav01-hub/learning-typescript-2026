interface Chai {
    flavor:string;
    price:number;
    milk?: boolean;
}

const masala:Chai = {
    flavor: "masala",
    price: 30
};

interface Shop{
    readonly id: number
    name: string
}

const S:Shop = {id: 1, name: "chailele"}

// s.id =2 

interface DiscountCalculator{
    (price:number): number
}

const apply50: DiscountCalculator = (p) => p*0.05

interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start(){
        console.log("start");
        
    }
    stop(){
        console.log("stop");
        
    }
}


//index signature 

interface ChaiRating{
    [flavor: string]: number
}


