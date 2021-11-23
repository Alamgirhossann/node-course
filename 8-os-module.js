const os = require('os')
const user = os.userInfo()

console.log(user);
console.log(`uptime ${os.uptime()}`);

const currentOs ={
    name: os.type(),
    relese: os.release(),
    totalmen: os.totalmem(),
    freeman: os.freemem()
}
console.log(currentOs);