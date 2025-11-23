const courseTopics = [
    {
        id: 1,
        title: "Introduction",
        content: `
            <p>Welcome to the comprehensive guide on Linked Lists! In this course, we will master one of the most fundamental data structures in computer science.</p>
            <h3>What is this course about?</h3>
            <p>We will start from the absolute basics and move towards advanced concepts. You will learn not just the 'how' but also the 'why' behind Linked Lists.</p>
            <h3>Course Structure:</h3>
            <ul>
                <li><strong>Fundamentals:</strong> Understanding memory, arrays vs linked lists.</li>
                <li><strong>Singly Linked List:</strong> The building block.</li>
                <li><strong>Doubly Linked List:</strong> Adding bidirectional navigation.</li>
                <li><strong>Circular Linked List:</strong> Connecting the ends.</li>
            </ul>
            <p>By the end of this course, you will be able to implement these data structures from scratch and solve complex algorithmic problems involving them.</p>
        `
    },
    {
        id: 2,
        title: "Limitations of Array/ArrayList",
        content: `
            <p>Before understanding Linked Lists, we must understand why Arrays aren't always enough.</p>
            <h3>1. Fixed Size</h3>
            <p>Arrays have a fixed size. Once declared, you cannot change their size (in static arrays). Even in dynamic arrays (like ArrayList in Java or Vector in C++), resizing is an expensive operation (O(N)) because it involves creating a new array and copying all elements.</p>
            <h3>2. Contiguous Memory</h3>
            <p>Arrays require a single continuous block of memory. If you have enough free RAM but it's fragmented, you might not be able to allocate a large array.</p>
            <h3>3. Expensive Insertions/Deletions</h3>
            <p>Inserting or deleting an element in the middle of an array requires shifting all subsequent elements. This takes O(N) time, which is inefficient for large datasets.</p>
            <div class="code-block">
                // Inserting at index 0 in an Array
                [1, 2, 3, 4, 5] -> [NEW, 1, 2, 3, 4, 5] 
                // All elements had to shift right!
            </div>
        `
    },
    {
        id: 3,
        title: "Working of LinkedList",
        content: `
            <p>A Linked List solves the limitations of arrays by using a <strong>non-contiguous</strong> memory structure.</p>
            <h3>Key Concepts:</h3>
            <ul>
                <li><strong>Node:</strong> The basic unit of a linked list. It contains data and a reference (pointer) to the next node.</li>
                <li><strong>Head:</strong> The entry point to the list. If you lose the head, you lose the list.</li>
                <li><strong>Tail:</strong> The last node in the list, pointing to NULL.</li>
            </ul>
            <h3>How it works in memory:</h3>
            <p>Unlike arrays, nodes can be scattered anywhere in memory. They are linked together logically via pointers. This allows for:</p>
            <ul>
                <li><strong>Dynamic Size:</strong> Grow or shrink the list at runtime without reallocation.</li>
                <li><strong>Efficient Insertions/Deletions:</strong> Just update a few pointers (O(1) if you have the reference).</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Singly LinkedList Basics",
        content: `
            <p>A Singly Linked List is the simplest type of linked list.</p>
            <h3>Structure of a Node:</h3>
            <pre><code class="language-java">
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
            </code></pre>
            <h3>Characteristics:</h3>
            <ul>
                <li><strong>Unidirectional:</strong> You can only traverse from Head to Tail. You cannot go back.</li>
                <li><strong>Memory Efficient:</strong> Uses less memory per node compared to Doubly Linked Lists (only one pointer).</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "Insertion Operations",
        content: `
            <p>Adding new nodes is a primary operation. Let's look at the three scenarios:</p>
            <h3>1. Insert at Head (O(1))</h3>
            <p>Create a new node, point its 'next' to the current head, and update the head pointer.</p>
            <h3>2. Insert at Tail (O(N))</h3>
            <p>Traverse to the last node and update its 'next' pointer to the new node. (O(1) if we maintain a Tail pointer).</p>
            <h3>3. Insert at Position (O(N))</h3>
            <p>Traverse to the (index-1)th node. Point the new node to the next node, and the (index-1)th node to the new node.</p>
            <div class="code-block">
                Node newNode = new Node(val);
                newNode.next = temp.next;
                temp.next = newNode;
            </div>
        `
    },
    {
        id: 6,
        title: "Display & Traversal",
        content: `
            <p>To read or display the list, we must traverse it starting from the Head.</p>
            <h3>The Algorithm:</h3>
            <ol>
                <li>Create a temporary pointer (temp) pointing to Head.</li>
                <li>Loop while temp is not NULL.</li>
                <li>Print temp.data.</li>
                <li>Move temp to temp.next.</li>
            </ol>
            <pre><code class="language-java">
void display() {
    Node temp = head;
    while (temp != null) {
        System.out.print(temp.data + " -> ");
        temp = temp.next;
    }
    System.out.println("END");
}
            </code></pre>
        `
    },
    {
        id: 7,
        title: "Deletion Operations",
        content: `
            <p>Removing nodes requires careful pointer manipulation to avoid losing the rest of the list.</p>
            <h3>1. Delete Head</h3>
            <p>Simply move the head pointer to head.next.</p>
            <h3>2. Delete Tail</h3>
            <p>Traverse to the second-to-last node and set its next to NULL.</p>
            <h3>3. Delete Specific Node</h3>
            <p>Find the node <em>before</em> the target. Set <code>prev.next = target.next</code>.</p>
            <p><strong>Edge Case:</strong> Always check if the list is empty (head == null) before trying to delete.</p>
        `
    },
    {
        id: 8,
        title: "Common Doubts",
        content: `
            <h3>FAQ</h3>
            <p><strong>Q: When should I use a Linked List over an Array?</strong><br>
            A: Use a Linked List when you need frequent insertions/deletions and don't know the size of data beforehand. Use an Array when you need fast random access (index-based).</p>
            <p><strong>Q: What is a NullPointerException?</strong><br>
            A: It happens when you try to access <code>node.data</code> or <code>node.next</code> when <code>node</code> is null. Always check for null!</p>
            <p><strong>Q: Why do we need a temp variable?</strong><br>
            A: If you move the <code>head</code> pointer directly during traversal, you will lose the start of the list. Always use a temporary variable to traverse.</p>
        `
    },
    {
        id: 9,
        title: "Doubly LinkedList Structure",
        content: `
            <p>A Doubly Linked List (DLL) allows traversal in both directions.</p>
            <h3>Node Structure:</h3>
            <pre><code class="language-java">
class Node {
    int data;
    Node next;
    Node prev; // Extra pointer

    Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
            </code></pre>
            <h3>Pros & Cons:</h3>
            <p><strong>Pros:</strong> Can traverse backwards, deleting a node is easier if you have the reference to it.</p>
            <p><strong>Cons:</strong> Uses more memory per node (extra pointer), slightly more complex code to maintain two pointers.</p>
        `
    },
    {
        id: 10,
        title: "Insertion Logic",
        content: `
            <p>Insertion in DLL involves updating four pointers (in the worst case) instead of two.</p>
            <h3>Example: Insert Between A and B</h3>
            <p>We want to insert NewNode between Node A and Node B.</p>
            <ol>
                <li>NewNode.next = B</li>
                <li>NewNode.prev = A</li>
                <li>A.next = NewNode</li>
                <li>B.prev = NewNode</li>
            </ol>
            <p><strong>Important:</strong> Order matters! Set the NewNode's pointers first to avoid losing references.</p>
        `
    },
    {
        id: 11,
        title: "Reversal Techniques",
        content: `
            <p>Reversing a DLL is simpler than a Singly Linked List because we just need to swap pointers.</p>
            <h3>Algorithm:</h3>
            <p>Traverse the list. For every node, swap its <code>next</code> and <code>prev</code> pointers.</p>
            <pre><code class="language-java">
Node temp = head;
Node last = null;
while (temp != null) {
    // Swap
    last = temp.prev;
    temp.prev = temp.next;
    temp.next = last;
    
    // Move
    temp = temp.prev; // Since we swapped, prev is the new next
}
if (last != null) {
    head = last.prev;
}
            </code></pre>
        `
    },
    {
        id: 12,
        title: "Circular LinkedList Concepts",
        content: `
            <p>In a Circular Linked List, the last node points back to the Head instead of NULL.</p>
            <h3>Types:</h3>
            <ul>
                <li><strong>Circular Singly Linked List:</strong> Tail.next = Head</li>
                <li><strong>Circular Doubly Linked List:</strong> Tail.next = Head AND Head.prev = Tail</li>
            </ul>
            <h3>Use Cases:</h3>
            <p>Round-robin scheduling, multiplayer games (turns), implementation of Fibonacci heaps.</p>
        `
    },
    {
        id: 13,
        title: "Insertion & Display",
        content: `
            <h3>Traversal:</h3>
            <p>Since there is no NULL, we must be careful not to loop infinitely. We stop when we reach the Head again.</p>
            <pre><code class="language-java">
Node temp = head;
if (head != null) {
    do {
        System.out.print(temp.data + " ");
        temp = temp.next;
    } while (temp != head);
}
            </code></pre>
            <h3>Insertion:</h3>
            <p>Inserting at the head or tail requires updating the tail's next pointer to maintain the circle.</p>
        `
    },
    {
        id: 14,
        title: "Deletion Logic",
        content: `
            <p>Deleting a node in a Circular Linked List follows similar logic to SLL, but with extra care for the circular link.</p>
            <h3>Deleting Head:</h3>
            <ol>
                <li>Find the Tail (last node).</li>
                <li>Update Tail.next = Head.next.</li>
                <li>Update Head = Head.next.</li>
            </ol>
            <p>If the list has only one node, set Head = NULL.</p>
        `
    }
];
