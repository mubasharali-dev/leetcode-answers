/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// --------------- Approach 1 - Two pass ----------------------

var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let length = 0;

    while (head){
        head = head.next;
        length++;
    }

    let prevPos = length - n;

    let prev = sentinel;

    for (let i =0; i< prevPos; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;

    return sentinel.next;
};


// --------------- Approach 2 - One pass ----------------------
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let firstPointer = sentinel;
    let secondPointer = sentinel;

    for (let i =0; i < n; i++){
        secondPointer = secondPointer.next;
    }

    while (secondPointer && secondPointer.next){
        secondPointer = secondPointer.next;
        firstPointer = firstPointer.next;
    }
    firstPointer.next = firstPointer.next.next;

    return sentinel.next;
};
