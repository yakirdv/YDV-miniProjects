
//interface
export interface User{
    userId:string;
    userName:string;
    password:string;
    firstName:string;
    lastName:string;
    userType:string; // support or customer
    customerLinkID:string;
};

export interface bid{
    bidID:string;
    customerName:string;
    customerVatID:string;
    email:string;
    phone:string;
};

export interface item{
    itemID:string;
    bidID:string;
    itemDescription:string;
    amount:number;
    unitPrice:number;
    total:number;
};

export default User;