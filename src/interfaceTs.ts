type ChaiOrder = {
    type:string; 
    sugar:number; 
    strong: boolean;
}


function makechai(order:ChaiOrder){
    console.log(order)
}

function serverChai(order:ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water : number;
    milk : number;   
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

interface CupSize {
    size: "small" | "large" 
}

class Chai implements CupSize{
    size: "small" | "large" = "large";
}

// type Respone = {ok:true} | {ok:false}

// class myRes implements Response{
//     ok:boolen = true;
// }

type TeaType = "Masala" | "Ginger" | "Lemon" // ek chalega //literal types 

function orderChai(t:TeaType){
    console.log(t)
}



type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra // dono mandatory

const cup:MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type Userfnc = {
    username: string;
    bio?: string;
}

const u1:Userfnc = {username:"SRIVASTAV "}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "MasterJi",
    version: 1
}

// cfg.appName = "nhihogachange"

