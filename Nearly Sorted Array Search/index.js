let arr=[10,3,40,20,50,80,70];
const target = 10;
const ans = BinarySearch(arr,target);
window.alert(`Target ${target} found at index : ${ans}`);

function BinarySearch(arr,target){
    let start = 0;
    let end = arr.length - 1;
    let mid = start + (end-start)/2;
    while(start<=end){
        if(target == arr[mid])
            return mid;
        else if(target == arr[mid-1] && mid-1>=start)
            return mid-1;
        else if(target == arr[mid+1] && mid+1<=end)
            return mid+1;    
        else if(target < arr[mid])
            end = mid - 2;
        else{
            start = mid + 2;
        }
        console.log(mid);
        mid = Math.floor(start + (end-start)/2);
    }
    return -1;
}