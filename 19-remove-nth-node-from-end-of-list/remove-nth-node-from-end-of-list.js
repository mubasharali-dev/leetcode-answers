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