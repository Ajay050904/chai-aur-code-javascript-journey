const accountId = 14453
let accountEmail = "aj0504@gmail.com"
var accountPassword = "321654"

accountCity = "jaipur"
let accountState;

// accountId = 56 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "hc345@gmail.com"
accountPassword = "54455"
accountCity = "Nagpur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
