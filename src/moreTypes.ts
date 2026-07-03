let respone:any = "42"

let numericLength:number = (respone as string).length //forcefull type ascertion

type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);


const inputElements = document.getElementById("username") as HTMLInputElement


let value:any 

value = "chai"
value = [12,3,4,3]

value = 2.5

value.toUpperCase()

let newvalue: unknown 

newvalue = "chai"
newvalue = [12,3,4,3]

newvalue = 2.5

if(typeof newvalue === "string"){
    newvalue.toUpperCase();
}


try{

}   catch(error){
    if(error instanceof Error){
        console.log(`error${error.message}`)
    }
    
}

const data:unknown = "chai aur code"

const strData: string = data as string

/// Never 

type role = "admin" | "user" | "supperadmin";

function redirectBasedOneRole(role:role): void{
    if(role === "admin"){
        console.log("redirecting to admin dashboard");
        return;
    }

    if(role === "user"){
        console.log('redirecting to user dashboard');
        return;
    }

    role;
}

function neverReturn():never{
    while(true){}
}