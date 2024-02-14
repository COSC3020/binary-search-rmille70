// References:
// https://www.geeksforgeeks.org/binary-search-in-javascript/ for help
// https://github.com/COSC3020/binary-search-j-halladay5/blob/main/code.js

function binarySearch(list, element) {
    var start = 0;
    var end = list.length-1;
    while(start <= end){
        var mid = Math.floor((start + end)/2);
        if(list[mid] === element){
            while(list[start] != element){
                start++
            }
            return start;
        } else if (list[mid] < element){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return -1;
}