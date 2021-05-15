function getDigit(num, digit) {
    num = num.toString();
    return num[ num.length-digit-1 ] || 0 ;
}

function digitCount(num){
    return num.toString().length;
}

function mostDigits(arr){
    var max = 0;
    for(let i = 0;i<arr.length;i++){
        let temp = digitCount(arr[i]);
        if( temp > max) {
            max = temp;
        }        
    }
   return max;
}

function radix_sort(arr) {
 const maxDigits = mostDigits(arr);
 for(let i = 0;i<maxDigits;i++) {
     // creates 10 empty array
     let digitBucket = Array.from({length: 10}, () =>[])  
     for(let j= 0;j<arr.length ;j++){
         let digit = getDigit(arr[j],i);
         digitBucket[digit].push(arr[j])
     }
     arr = [].concat(...digitBucket)
 }
 return arr;
}

// console.log(getDigit(12345,10))
// console.log(digitCount(0))
// console.log(mostDigits([12,12,1,345,12,4]))
// console.log(radix_sort([12,2,3,23,523,634,234,124]))