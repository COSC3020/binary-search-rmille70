// References:
// https://www.geeksforgeeks.org/binary-search-in-javascript/ for help
// https://github.com/COSC3020/binary-search-ZachRenz/blob/main/code.js
// https://www.youtube.com/watch?v=P3YID7liBug (helped for visualization of algorithm)

function binarySearch(list, element) {
    let mid;
    if(list.length == 1){
        if(list[0] == element){
            return 0;
        }
    }
    if(list.length % 2 == 0){
        mid = Math.floor((list.length-1)/2);
    } else {
        mid = Math.floor((list.length)/2);
    }

    
    if(list[mid] == element){
        console.log("MATCH");
        let lower = binarySearch(list.slice(0, mid), element);
        if(lower == -1){
            return mid;
        } else {
            return lower;
        }
    } else if(element < list[mid]) {  
        if(mid == 1){
            if(list[0] == element){
                return 0;
            } else {
                return -1;
            }
        }      
        return binarySearch(list.slice(0, mid-1), element);
    } else if(element > list[mid]){
        return mid+1 + binarySearch(list.slice(mid+1, list.length), element);
    }
    return -1;
}
