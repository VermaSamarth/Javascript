let arr=[19,12,10,11,14];
console.log("Unsorted Array: ");
Printing(arr);
Sorting(arr);
function Sorting(arr){
    let minIndex,temp;
    for(let i=0;i<arr.length-1;i++){
        minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log("Sorted Array: ");
    Printing(arr);
}

function Printing(arr){
    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i]} `);
    }
}