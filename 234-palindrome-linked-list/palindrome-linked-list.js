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
// Approach 1:
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
    for (let i =0; i < Math.floor(n/2); i++ ){
        if (arr[i] !== arr[n-i-1]){
            return false;
        }
    }
    return true;
};

// Approach 2 - Recommended: 
// Because Space complexity is O(1) while Time Complexity remains O(n) for both approaches

var isPalindrome = function(head) {
  // finding the middle
  let slow = fast = head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }  

  // reverse the second half of list
  let prev = null;
  let curr = slow;
  while(curr){
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // finding the palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList){
    if (firstList.val != secondList.val){
        return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};
