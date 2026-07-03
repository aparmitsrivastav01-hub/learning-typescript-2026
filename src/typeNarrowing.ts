function getChai(kind: string|number){
    if (typeof kind === "string"){
        return `making ${kind} chai....`
    }
    return `Chai oder : ${kind}`;
}

function serverChai(msg ?:string){
    if (msg){
        return `Serving ${msg}`;
    }
    return `serving defaul masala chai`
}

function orderChai(size: "small" | 'medium' | "large"| number){
    if(size === "small"){
        return `small cutting chai`
    }
    
    if(size === "medium"|| size ==="large"){
        return `make extra chai`
    }
    return `chai order #${size}`
    
}

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}
class Cutting{
    serve(){
        return `Serving cutting chai`
    }
}

function serve(chai: KulhadChai|Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serverOrder(item:ChaiOrder|string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `Serving custom chai: ${item}`
}



type masalaChai = {type: "masala"; spicelevel: number};

type gingerChai = {type: "ginger"; amount: number};

type elaichiChai = {type: "elaichi"; aroma: number};

type chai = masalaChai | gingerChai | elaichiChai

function makeChai(order: chai){
    switch (order.type) {
        case "masala":
            return "masala chai"
            break;

        case "ginger":
            return "ginger chai"
            break;
 
        case "elaichi":
            return "masala chai"
            break;
    
    }
}

function brew(order: masalaChai| gingerChai){
    if("spicelevel" in order){
        // 
    }
}

// function isStringArray(arr:unknown): arr is string[]{
    
// }

