import { User } from "../Intro/src/User";

const fullName = "arash ataei";
const user = new User(fullName, "idev.softwaregroup@gmail.com");

console.log(`MyFullname: ${user.fullName} - My Email: ${user.getInfo()}`);
