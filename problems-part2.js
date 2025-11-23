// Additional LinkedList Problems (Part 2)
const remainingProblems = [
    {
        id: 'q10',
        number: 'Q-10',
        title: 'Reverse LinkedList',
        difficulty: 'easy',
        statement: 'Reverse a singly linked list.',
        approach: [
            'Initialize prev as null and current as head',
            'Save next node before changing reference',
            'Point current.next to prev',
            'Move prev and current one step forward'
        ],
        code: `public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;

    while (current != null) {
        ListNode nextTemp = current.next; // Save next node
        current.next = prev;              // Reverse pointer
        prev = current;                   // Move prev forward
        current = nextTemp;               // Move current forward
    }

    return prev; // New head
}

// Recursive approach
public ListNode reverseListRecursive(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }

    ListNode newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1) iterative, O(n) recursive'
    },
    {
        id: 'q11',
        number: 'Q-11',
        title: 'Reverse Linked List II',
        difficulty: 'medium',
        statement: 'Reverse a linked list from position left to position right.',
        approach: [
            'Use a dummy node to handle edge case where head changes',
            'Move a pointer (prev) to the node before the reversal starts',
            'Iteratively reverse the sublist using a current and next pointer',
            'Reconnect the reversed sublist to the rest of the list'
        ],
        code: `public ListNode reverseBetween(ListNode head, int left, int right) {
    if (head == null || left == right) return head;

    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prev = dummy;

    // Move prev to node before left position
    for (int i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    ListNode current = prev.next;
    ListNode nextNode;

    // Reverse the sublist
    for (int i = 0; i < right - left; i++) {
        nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q12',
        number: 'Q-12',
        title: 'Palindrome Linked List',
        difficulty: 'easy',
        statement: 'Given the head of a singly linked list, return true if it is a palindrome.',
        approach: [
            'Find the middle of the list using slow/fast pointers',
            'Reverse the second half of the list',
            'Compare the first half with the reversed second half',
            'Restore the list (optional but recommended)'
        ],
        code: `public boolean isPalindrome(ListNode head) {
    if (head == null || head.next == null) return true;

    // Find middle
    ListNode slow = head;
    ListNode fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    ListNode secondHalf = reverseList(slow.next);
    ListNode firstHalf = head;
    ListNode p1 = firstHalf;
    ListNode p2 = secondHalf;

    // Compare halves
    boolean result = true;
    while (result && p2 != null) {
        if (p1.val != p2.val) {
            result = false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }

    // Restore list (optional)
    slow.next = reverseList(secondHalf);

    return result;
}

private ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    while (current != null) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q13',
        number: 'Q-13',
        title: 'Intersection of Two Linked Lists',
        difficulty: 'easy',
        statement: 'Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.',
        approach: [
            'Use two pointers, pA and pB',
            'Traverse list A with pA and list B with pB',
            'When pA reaches end, redirect to headB',
            'When pB reaches end, redirect to headA',
            'If they intersect, they will meet at the intersection node; otherwise they will meet at null'
        ],
        code: `public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;

    ListNode pA = headA;
    ListNode pB = headB;

    while (pA != pB) {
        // If pA reaches end, redirect to headB
        pA = (pA == null) ? headB : pA.next;
        
        // If pB reaches end, redirect to headA
        pB = (pB == null) ? headA : pB.next;
    }

    return pA; // Intersection node or null
}`,
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q14',
        number: 'Q-14',
        title: 'Remove Nth Node From End of List',
        difficulty: 'medium',
        statement: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
        approach: [
            'Use two pointers, fast and slow',
            'Move fast pointer n steps ahead',
            'If fast becomes null, it means we need to remove the head',
            'Move both pointers until fast reaches the last node',
            'Slow will be at the node before the one to remove'
        ],
        code: `public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode first = dummy;
    ListNode second = dummy;

    // Move first pointer n+1 steps
    for (int i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches end
    while (first != null) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node
    second.next = second.next.next;

    return dummy.next;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q15',
        number: 'Q-15',
        title: 'Swap Nodes in Pairs',
        difficulty: 'medium',
        statement: 'Given a linked list, swap every two adjacent nodes and return its head.',
        approach: [
            'Use a dummy node to handle the head swap',
            'Use a pointer (prev) to track the node before the pair',
            'Identify the two nodes to swap (first and second)',
            'Adjust pointers to swap them and connect to the rest of the list',
            'Move prev two steps forward'
        ],
        code: `public ListNode swapPairs(ListNode head) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prev = dummy;

    while (prev.next != null && prev.next.next != null) {
        ListNode first = prev.next;
        ListNode second = prev.next.next;

        // Swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move prev
        prev = first;
    }

    return dummy.next;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q16',
        number: 'Q-16',
        title: 'Add Two Numbers',
        difficulty: 'medium',
        statement: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
        approach: [
            'Traverse both lists simultaneously',
            'Add values from nodes and carry',
            'Create new node with sum % 10',
            'Update carry = sum / 10',
            'Handle remaining nodes and final carry'
        ],
        code: `public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    int carry = 0;

    while (l1 != null || l2 != null || carry > 0) {
        int sum = carry;
        
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = sum / 10;
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
}`,
        timeComplexity: 'O(max(n, m))',
        spaceComplexity: 'O(max(n, m))'
    },
    {
        id: 'q17',
        number: 'Q-17',
        title: 'Rotate List',
        difficulty: 'medium',
        statement: 'Given the head of a linked list, rotate the list to the right by k places.',
        approach: [
            'Calculate length of the list and make it circular',
            'Calculate effective rotation: k = k % length',
            'Find the new tail: (length - k - 1)th node',
            'Break the circle and return the new head'
        ],
        code: `public ListNode rotateRight(ListNode head, int k) {
    if (head == null || head.next == null || k == 0) return head;

    // Calculate length
    ListNode current = head;
    int length = 1;
    while (current.next != null) {
        current = current.next;
        length++;
    }

    // Connect tail to head to make it circular
    current.next = head;

    // Find new tail position
    k = k % length;
    int stepsToNewTail = length - k;
    
    ListNode newTail = current;
    while (stepsToNewTail > 0) {
        newTail = newTail.next;
        stepsToNewTail--;
    }

    // Break the circle
    ListNode newHead = newTail.next;
    newTail.next = null;

    return newHead;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    }
];

// Append to the main problems array if it exists
if (typeof problems !== 'undefined') {
    problems.push(...remainingProblems);
}
