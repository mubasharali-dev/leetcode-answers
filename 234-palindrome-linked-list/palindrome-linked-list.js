/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    function toArray(){
        let arr = [];
        let curr = head;

        while (curr != null){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }
    let arr = toArray();

    let n = arr.length;
    for (let i = 0; i < Math.floor(n/2); i++){
        if (arr[i] != arr[n - i -1]) {
            return false;
        }
    }
    return true;

}