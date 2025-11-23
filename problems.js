// LinkedList Problems Data and Renderer
const problems = [
    {
        id: 'q01',
        number: 'Q-01',
        title: 'Recursive Insertion in LinkedList',
        difficulty: 'easy',
        statement: 'Insert a value at a specific index in a LinkedList using recursion.',
        approach: [
            '<strong>Base Case:</strong> If index is 0, create a new node and point it to the current head',
            '<strong>Recursive Case:</strong> Move to the next node and decrease the index',
            '<strong>Return:</strong> Return the modified node at each level'
        ],
        code: `class Node {
    int value;
    Node next;
    
    Node(int value) {
        this.value = value;
        this.next = null;
    }
    
    Node(int value, Node next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    private Node head;
    private int size;

    // Recursive insertion
    public void insertRec(int value, int index) {
        head = insertRecHelper(value, index, head);
        size++;
    }

    private Node insertRecHelper(int value, int index, Node node) {
        // Base case: reached the position
        if (index == 0) {
            return new Node(value, node);
        }

        // Recursive case: move to next node
        if (node == null) {
            throw new IndexOutOfBoundsException();
        }

        node.next = insertRecHelper(value, index - 1, node.next);
        return node;
    }

    // Display the list
    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.value + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}

// Example usage
// LinkedList list = new LinkedList();
// list.insertRec(5, 0);
// list.insertRec(10, 1);
// list.display();`,
        timeComplexity: 'O(n) - where n is the index',
        spaceComplexity: 'O(n) - recursion stack space'
    },
    {
        id: 'q02',
        number: 'Q-02',
        title: 'Remove Duplicates from Sorted LinkedList',
        difficulty: 'easy',
        statement: 'Given a sorted LinkedList, remove all duplicate values so that each value appears only once.',
        approach: [
            'Use a single pointer to traverse the list',
            'Compare current node with next node',
            'If values are equal, skip the next node',
            'Otherwise, move to the next node'
        ],
        code: `public ListNode deleteDuplicates(ListNode head) {
    if (head == null) return head;

    ListNode current = head;

    while (current != null && current.next != null) {
        if (current.val == current.next.val) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            // Move to next node
            current = current.next;
        }
    }

    return head;
}

// Example usage
// Input: 1 -> 1 -> 2 -> 3 -> 3 -> null
// Output: 1 -> 2 -> 3 -> null`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q03',
        number: 'Q-03',
        title: 'Merge Two Sorted LinkedLists',
        difficulty: 'medium',
        statement: 'Merge two sorted LinkedLists into one sorted LinkedList.',
        approach: [
            'Create a dummy node to simplify edge cases',
            'Use two pointers to traverse both lists',
            'Compare values and attach the smaller node',
            'Attach remaining nodes from non-empty list'
        ],
        code: `public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    // Create a dummy node
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;

    // Traverse both lists
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach remaining nodes
    if (list1 != null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
}

// Recursive approach
public ListNode mergeTwoListsRecursive(ListNode list1, ListNode list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoListsRecursive(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoListsRecursive(list1, list2.next);
        return list2;
    }
}`,
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(1) iterative, O(n + m) recursive'
    },
    {
        id: 'q04',
        number: 'Q-04',
        title: 'LinkedList Cycle Detection',
        difficulty: 'medium',
        statement: 'Determine if a LinkedList has a cycle (a node points back to a previous node).',
        approach: [
            'Use two pointers: slow (moves 1 step) and fast (moves 2 steps)',
            'If there\'s a cycle, fast will eventually meet slow',
            'If fast reaches null, there\'s no cycle'
        ],
        code: `public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }

    ListNode slow = head;
    ListNode fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;        // Move 1 step
        fast = fast.next.next;   // Move 2 steps

        if (slow == fast) {
            return true;  // Cycle detected
        }
    }

    return false;  // No cycle
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q05',
        number: 'Q-05',
        title: 'Length of LinkedList Cycle',
        difficulty: 'medium',
        statement: 'Find the length of the cycle in a LinkedList if it exists.',
        approach: [
            'First detect if cycle exists using Floyd\'s algorithm',
            'Once slow and fast meet, keep one pointer fixed',
            'Move the other pointer and count steps until they meet again'
        ],
        code: `public int cycleLength(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;

    // Detect cycle
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            // Cycle detected, now find length
            return calculateLength(slow);
        }
    }

    return 0;  // No cycle
}

private int calculateLength(ListNode slow) {
    ListNode current = slow;
    int length = 0;

    do {
        current = current.next;
        length++;
    } while (current != slow);

    return length;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q06',
        number: 'Q-06',
        title: 'LinkedList Cycle II - Find Start of Cycle',
        difficulty: 'hard',
        statement: 'Find the node where the cycle begins in a LinkedList.',
        approach: [
            'Detect cycle using Floyd\'s algorithm',
            'When slow and fast meet, reset one pointer to head',
            'Move both pointers one step at a time',
            'They will meet at the start of the cycle'
        ],
        code: `public ListNode detectCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;

    // Detect if cycle exists
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            // Cycle detected, find the start
            return findCycleStart(head, slow);
        }
    }

    return null;  // No cycle
}

private ListNode findCycleStart(ListNode head, ListNode meetingPoint) {
    ListNode pointer1 = head;
    ListNode pointer2 = meetingPoint;

    // Move both pointers one step at a time
    while (pointer1 != pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1;  // Start of cycle
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q07',
        number: 'Q-07',
        title: 'Happy Number',
        difficulty: 'easy',
        statement: 'A happy number is a number where the process of repeatedly replacing it with the sum of squares of its digits eventually leads to 1. Determine if a number is happy.',
        approach: [
            'Use Floyd\'s cycle detection algorithm',
            'Slow pointer: calculate sum of squares once',
            'Fast pointer: calculate sum of squares twice',
            'If they meet at 1, it\'s a happy number',
            'If they meet at any other number, there\'s a cycle (not happy)'
        ],
        code: `public boolean isHappy(int n) {
    int slow = n;
    int fast = n;

    do {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
    } while (slow != fast);

    return slow == 1;
}

private int sumOfSquares(int n) {
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum += digit * digit;
        n = n / 10;
    }
    return sum;
}`,
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q08',
        number: 'Q-08',
        title: 'Middle of the LinkedList',
        difficulty: 'easy',
        statement: 'Find the middle node of a LinkedList. If there are two middle nodes, return the second one.',
        approach: [
            'Use slow pointer (moves 1 step) and fast pointer (moves 2 steps)',
            'When fast reaches the end, slow will be at the middle'
        ],
        code: `public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q09',
        number: 'Q-09',
        title: 'Sort LinkedList (Merge Sort)',
        difficulty: 'medium',
        statement: 'Sort a LinkedList in ascending order using merge sort algorithm.',
        approach: [
            'Use merge sort algorithm (divide and conquer)',
            'Find middle using slow/fast pointers',
            'Recursively sort left and right halves',
            'Merge the sorted halves'
        ],
        code: `public ListNode sortList(ListNode head) {
    // Base case
    if (head == null || head.next == null) {
        return head;
    }

    // Find middle and split the list
    ListNode mid = getMiddle(head);
    ListNode left = head;
    ListNode right = mid.next;
    mid.next = null;  // Split the list

    // Recursively sort both halves
    left = sortList(left);
    right = sortList(right);

    // Merge sorted halves
    return merge(left, right);
}

private ListNode getMiddle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;

    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

private ListNode merge(ListNode left, ListNode right) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;

    while (left != null && right != null) {
        if (left.val <= right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    current.next = (left != null) ? left : right;
    return dummy.next;
}`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(log n) - recursion stack'
    }
];

// Render problems to the page
function renderProblems() {
    const mainContent = document.getElementById('main-content');

    problems.forEach(problem => {
        const section = document.createElement('section');
        section.id = problem.id;
        section.className = 'problem-section';

        section.innerHTML = `
            <div class="problem-header">
                <span class="problem-number">${problem.number}</span>
                <h2>${problem.title}</h2>
                <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
            </div>
            
            <div class="content-card">
                <h3>Problem Statement</h3>
                <p>${problem.statement}</p>
            </div>

            <div class="content-card">
                <h3>Approach</h3>
                <ul class="approach-list">
                    ${problem.approach.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>

            <div class="code-card">
                <div class="code-header">
                    <span class="code-lang">Java</span>
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                </div>
                <pre><code class="language-java">${escapeHtml(problem.code)}</code></pre>
            </div>

            <div class="complexity-card">
                <div class="complexity-item">
                    <strong>Time Complexity:</strong> ${problem.timeComplexity}
                </div>
                <div class="complexity-item">
                    <strong>Space Complexity:</strong> ${problem.spaceComplexity}
                </div>
            </div>
        `;

        mainContent.appendChild(section);
    });

    // Add summary and tips sections
    addSummarySections();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function addSummarySections() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML += `
        <section class="summary-section">
            <h2>Key Patterns & Techniques</h2>
            
            <div class="pattern-grid">
                <div class="pattern-card">
                    <h3>🐢🐇 Two Pointers (Slow & Fast)</h3>
                    <p>Used for finding middle, detecting cycles, and palindrome checking</p>
                    <ul>
                        <li>Middle of LinkedList</li>
                        <li>Cycle Detection</li>
                        <li>Palindrome Check</li>
                    </ul>
                </div>

                <div class="pattern-card">
                    <h3>🔄 Reversal Techniques</h3>
                    <p>Iterative and recursive approaches to reverse lists or sublists</p>
                    <ul>
                        <li>Reverse Entire List</li>
                        <li>Reverse Between Positions</li>
                        <li>Reverse in Groups</li>
                    </ul>
                </div>

                <div class="pattern-card">
                    <h3>🔗 Merge & Sort</h3>
                    <p>Combining and organizing LinkedLists efficiently</p>
                    <ul>
                        <li>Merge Two Sorted Lists</li>
                        <li>Merge Sort</li>
                        <li>Reorder List</li>
                    </ul>
                </div>

                <div class="pattern-card">
                    <h3>🎯 Dummy Node Pattern</h3>
                    <p>Simplify edge cases with a dummy head node</p>
                    <ul>
                        <li>Merge Operations</li>
                        <li>Reverse Between</li>
                        <li>Remove Duplicates</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="tips-section">
            <h2>Pro Tips for LinkedList Problems</h2>
            
            <div class="tips-grid">
                <div class="tip-card">
                    <div class="tip-icon">💡</div>
                    <h3>Draw It Out</h3>
                    <p>Always visualize the problem with diagrams. Draw the nodes and arrows to understand pointer movements.</p>
                </div>

                <div class="tip-card">
                    <div class="tip-icon">🎯</div>
                    <h3>Edge Cases</h3>
                    <p>Test with empty list, single node, two nodes, and lists with cycles. These reveal most bugs.</p>
                </div>

                <div class="tip-card">
                    <div class="tip-icon">🔍</div>
                    <h3>Dummy Nodes</h3>
                    <p>Use dummy nodes to handle edge cases elegantly, especially when the head might change.</p>
                </div>

                <div class="tip-card">
                    <div class="tip-icon">⚡</div>
                    <h3>Two Pointers</h3>
                    <p>Master slow/fast pointer technique - it's the key to solving many LinkedList problems efficiently.</p>
                </div>

                <div class="tip-card">
                    <div class="tip-icon">🔄</div>
                    <h3>Practice Reversal</h3>
                    <p>Reversal is fundamental. Practice both iterative and recursive approaches until they're second nature.</p>
                </div>

                <div class="tip-card">
                    <div class="tip-icon">📝</div>
                    <h3>Track Connections</h3>
                    <p>When reversing or reordering, carefully track what each pointer should point to after the operation.</p>
                </div>
            </div>
        </section>
    `;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProblems);
