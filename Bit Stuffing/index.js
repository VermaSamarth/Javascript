
let arr=[0,0,0,1,1,1,1,1,0,1,0,1];
const len= arr.length;
let bitStuff="",counter=0;
for(let i=0;i<len;i++){
    if(arr[i]==0){
        bitStuff+=arr[i];
        counter = 0;
    }
    else{
        bitStuff += arr[i];
        counter += 1;
        if(counter == 5){
            bitStuff += "0";
            counter = 0;
        }
    }
}
console.log(`Inputted Array of bits: ${arr}`);
console.log(`After Bits Stuffing: ${bitStuff}`);