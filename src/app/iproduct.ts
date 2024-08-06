export interface Iproduct {
    quantity: number;
    id : string  ; 
    imageUrl : string ; 
    name : string ; 
    description : string ; 
    amount : number ; 
    availableQuantity : number 
    qty : number ; 
}

export interface Iorder {
    id : string 
    date : string ; 
    price : number ; 
    image : string ; 
    quantity : number 
}