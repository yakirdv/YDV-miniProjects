import {User, bid, item} from "../model/Models"; // improt all from the model

export let users: Array<User> = [
    {
        userId: "u1",
        userName: "suser1", 
        password: "pass1",
        firstName: "israel 1",
        lastName: "israeli 1",
        userType: "support", // support or customer
        customerLinkID: null,   //null if support so no filter by customer
    },

    {
        userId: "u2",
        userName: "cuser2",
        password: "pass2",
        firstName: "test 2",
        lastName: "test 2",
        userType: "customer", // support or customer
        customerLinkID: "1",
    },

];


export let bids: Array<bid> = [];
export let items: Array<item> = [];



