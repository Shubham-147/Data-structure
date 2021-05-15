function combineArray(arr1,arr2) {
  let i = 0;j = 0, newArray =[];
  while (i < arr1.length || j < arr2.length) {
    
	if(arr1[i]  <= arr2[j]){
      newArray.push(arr1[i]);
      i++;
    }
    else {
      newArray.push(arr2[j]);
      j++;
    }
  }
  
  while(i < arr1.length) {
        results.push(arr1[i])
        i++;
  }
  
  while(j < arr2.length) {
        results.push(arr2[j])
        j++;
  }
  return newArray;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return combineArray(left, right);
}

// console.log("Here : ",combineArray([1,2,4],[3,6,9]))

console.log(mergeSort([1,2,4,3,6,9]))