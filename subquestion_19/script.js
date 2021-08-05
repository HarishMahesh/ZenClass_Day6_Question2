var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);  // output: 'hi'   limein is a string '0' so it is considered as truthy value and lemeout is number 0 it is 
                        //considered as false value