import { User, } from "../model/Models";
import { users, } from "../model/ModelsArrays";

export function newID() {
  return Date.now().toString(40) + "-" + Math.random().toString(40).substr(2);
}

export function test(req, res) {
    const {test} = req.body;
    console.log(test);
  res.send(test);
}

export function signUp(
  req: {
    input_userName;
    input_password;
    input_firstName;
    input_lastName;
    input_customerLinkID;
  },
  res
) {
  try {
    const newUser: User = {
      userId: newID(),
      userName: req.input_userName,
      password: req.input_password,
      firstName: req.input_firstName,
      lastName: req.input_lastName,
      userType: "customer",
      customerLinkID: req.input_customerLinkID,
    };
    users.push(newUser);
    res.send(newUser.userId); // send the new user id
  } catch (error) {
    res.send({ error: error.message });
  }
}

export function login(req, res) {
  try {
    //   const {username} = req.body.username;
    //   const {password} = req.password;
    console.log(req.username);
    const loginUser = users.find(
      (user) => user.userName === req.username && user.password === req.password
    );
    console.log(`user login successful : ${loginUser.userId}`);
    res.send(loginUser.userId);
  } catch (error) {
    console.log("2");
    res.send({ error: error.message });
  }
}
