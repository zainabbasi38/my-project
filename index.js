a = 5;
b = 8;
operation= "*";

probability = Math.random();
if (operation=="+" && probability<=0.1) {
    result = a - b;
    
}
else if(operation=="-" && probability<=0.1){
    result = a + b;
}
else if(operation=="*" && probability<=0.1){
    result = a / b;
}
else if(operation=="/" && probability<=0.1){
    result = a * b;
}
else if(operation=="+" && probability>0.1){
    result = a + b;
}
else if(operation=="-" && probability>0.1){
    result = a - b;
}   
else if(operation=="*" && probability>0.1){
    result = a * b;
}
else if(operation=="/" && probability>0.1){
    result = a / b;
}
console.log(probability);
console.log(result);
