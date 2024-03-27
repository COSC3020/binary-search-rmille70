 
// References:
// https://www.geeksforgeeks.org/binary-search-in-javascript/ for help
// https://github.com/COSC3020/binary-search-ZachRenz/blob/main/code.js
// https://www.youtube.com/watch?v=P3YID7liBug (helped for visualization of algorithm)
 
function binarySearch(list, element) {
    if(list.length == 1){
        if(list[0] == element){
            return 0;
        } else {
            return -1;
        }
    } else {
        let mid = Math.floor((list.length-1)/2);
        if(list[mid] == element){
            if(binarySearch(list.slice(0, mid), element) == -1){
                return mid;
            } else {
                return binarySearch(list.slice(0, mid), element);
            }
        } else if(element < list[mid]) { 
            return binarySearch(list.slice(0, mid), element);
        } else if(element > list[mid]){
            if(binarySearch(list.slice(mid+1, list.length), element) != -1){
                return ++mid + binarySearch(list.slice(mid, list.length), element);
            } else {
                return -1;
            }
        }
        return -1;
    }
}

/*Testing: 
console.log(binarySearch([0,1,2,3,4,5,6,7,8,9], -1)) //Should be -1
console.log(binarySearch([0,1,2,3,4,5,6,7,8,9], 10)) //Should be -1
console.log(binarySearch([0,1,2,3,4,5,6,7,8,9], 9))  //Should be 9
console.log(binarySearch([0,1,2,3,4,6,6,7,8,9], 6))  //Should be 5
console.log(binarySearch([-1,0], 0))                 //Should be 1
console.log(binarySearch([], 0))                     //Should be -1
*/