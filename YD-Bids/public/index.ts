import { newID } from "../controllers/controller";
import { bid } from "../model/Models";

async function test() {
  const test1 = "test1";
  // @ts-ignore
  const { test } = await axios.get("/api/test", test1);
  console.log(test.value);
}

async function handleLogin() {
  const username = "suser1";
  const password = "pass1";
  // @ts-ignore
  const { data } = await axios.get("/api/login", { username, password });
  console.log(data.username.value);
}
// {username:"user test1", password:"password"}

async function handlNewBid(event) {
    event.preventDefault()
    const newbid =  new bid {
        bidID = newID(),
        customerName = event.customer.value,
        customerVatID = event.customerVatID.value,
        email = event.email.value,
        phone = event.phone.value
    }

}