// References:
// https://www.geeksforgeeks.org/binary-search-in-javascript/ for help
// https://github.com/COSC3020/binary-search-ZachRenz/blob/main/code.js

function binarySearch(list, element) {
    var start = 0;
    var end = list.length-1;
    var index = -1;

    for(i = 0; i < Math.floor(list.length / 2) + 2; i++){
        piv = Math.floor((end+start)/2);
        if(list[piv] == element){
            index = piv;
            checkDuplicate = false;
            while(checkDuplicate == false){
                if(list[piv-1] == element){
                    index = --piv;
                } else {
                    checkDuplicate = true;
                }
            }
        } else if(list[piv] > element) {
            end = piv;
        } else if(list[piv] < element) {
            start = piv;
        }
    }
    return index;
}