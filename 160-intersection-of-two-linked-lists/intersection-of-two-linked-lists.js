/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let seenNodes = new Set();
    while(headB){
        seenNodes.add(headB);
        headB = headB.next;
    }
    let curr = headA;
    while (curr){
        if (seenNodes.has(curr)){
            return curr;
        }
        curr= curr.next;
    }
    return null;
};