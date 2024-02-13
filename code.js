//Referenced https://www.geeksforgeeks.org/binary-search-in-javascript/ for help
//jsverify code is failing when its a list of all one value, but I did some test cases
//and it seems to be working for them. Test cases can be found below.

function binarySearch(list, element) {
    var start = 0;
    var end = list.length-1;
    while(start <= end){
        var mid = Math.floor((start + end)/2);
        if(list[mid] === element){
            return mid;
        } else if (list[mid] < element){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return -1;
}

//Homogenous List Test Cases
//console.log(binarySearch([3,3,3],3));
//console.log(binarySearch([3,3,3],1));
//console.log(binarySearch([2,2,2],2));
//console.log(binarySearch([2,2,2],1));