let arr = [-1,-1,-1,-1,-1,0];
let ans = BinarySerach(arr);
console.log(ans);

function leftSum(arr,start,end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        sum+=arr[i];
    }
    return sum;
}

function rightSum(arr,start,end){
    let sum = 0;
    for(let i = start; i < end; i++){
        sum+=arr[i];
    }
    return sum;
}


function BinarySerach(arr){
    let start = 0;
    let end = arr.length;
    let mid = Math.floor(start + (end-start)/2);
    while(start <= end){
        let lsum = leftSum(arr,0,mid-1);
        let rsum = rightSum(arr,mid+1,arr.length);
        if(lsum<0 && rsum<0){
            lsum*=-1;
            rsum*=-1;
        }
        if(lsum == rsum)
            return mid;
        else if(lsum<rsum)
            start = mid + 1;
        else
            end = mid - 1;
        mid = Math.floor(start + (end-start)/2);
    }
    return -1;
}
