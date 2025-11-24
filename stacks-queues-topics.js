const courseTopics = [
    {
        id: 1,
        title: "Introduction",
        content: `
            <h4>Course Overview</h4>
            <p>Welcome to the Stacks and Queues module! In this section, we will explore two fundamental linear data structures that are essential for algorithm design and system implementation.</p>
            <p><strong>Why are they important?</strong></p>
            <ul>
                <li>They are the building blocks for more complex data structures like Graphs and Trees.</li>
                <li>They are used extensively in operating systems, compilers, and network protocols.</li>
                <li>Mastering them is crucial for solving problems related to recursion, parsing, and scheduling.</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Stacks Introduction",
        content: `
            <h4>What is a Stack?</h4>
            <p>A Stack is a linear data structure that follows the <strong>LIFO</strong> (Last In, First Out) principle. The last element added to the stack is the first one to be removed.</p>
            <div class="code-block">
                // Conceptual View of a Stack
                |     |
                |  3  | <- Top (Last In)
                |  2  |
                |  1  | <- Bottom (First In)
                -------
            </div>
            <p>Imagine a stack of plates at a buffet. You can only take the top plate, and if you want to add a new plate, you place it on top. You cannot access the bottom plates without removing the top ones first.</p>
        `
    },
    {
        id: 3,
        title: "Stack Example",
        content: `
            <h4>Real-world & Tech Examples</h4>
            <ul>
                <li><strong>Undo Mechanism:</strong> Text editors store your changes in a stack. When you press Ctrl+Z, it pops the last change off the stack to revert it.</li>
                <li><strong>Browser History:</strong> When you visit pages A -> B -> C, they are pushed onto a stack. Clicking 'Back' pops C to return to B.</li>
                <li><strong>Function Call Stack:</strong> When a function calls another function, the computer saves the state of the current function on a stack. When the called function returns, the computer pops the state to resume execution.</li>
            </ul>
            <pre><code class="language-java">
// Function Call Stack Visualization
void A() {
    B(); // A pauses, pushes state to stack
}
void B() {
    C(); // B pauses, pushes state to stack
}
void C() {
    // C executes, then returns
    // Stack pops B's state, B resumes
}
            </code></pre>
        `
    },
    {
        id: 4,
        title: "Push and Pop",
        content: `
            <h4>Core Operations</h4>
            <p>The two primary operations of a stack are:</p>
            <ul>
                <li><strong>Push:</strong> Adds an element to the top of the stack. If the stack is full, this results in a "Stack Overflow".</li>
                <li><strong>Pop:</strong> Removes the top element from the stack. If the stack is empty, this results in a "Stack Underflow".</li>
            </ul>
            <pre><code class="language-java">
Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();

// Push Operation
stack.push(10); // Stack: [10]
stack.push(20); // Stack: [10, 20]
stack.push(30); // Stack: [10, 20, 30] <- Top is 30

// Pop Operation
int val = stack.pop(); // Returns 30. Stack: [10, 20] <- Top is 20
            </code></pre>
        `
    },
    {
        id: 5,
        title: "Queues Introduction",
        content: `
            <h4>What is a Queue?</h4>
            <p>A Queue is a linear data structure that follows the <strong>FIFO</strong> (First In, First Out) principle. The first element added is the first one to be removed.</p>
            <div class="code-block">
                // Conceptual View of a Queue
                
                Exit <--- [ 1 | 2 | 3 | 4 ] <--- Entry
                          Front       Rear
            </div>
            <p>It behaves like a real-world queue (line) of people waiting for a movie ticket. The person who arrives first gets the ticket first.</p>
        `
    },
    {
        id: 6,
        title: "Queue Example",
        content: `
            <h4>Real-world & Tech Examples</h4>
            <ul>
                <li><strong>Printer Spooling:</strong> Documents sent to a printer are queued. The first document sent is printed first.</li>
                <li><strong>Web Server Requests:</strong> Requests to a server are often handled in a queue to ensure fairness.</li>
                <li><strong>BFS (Breadth-First Search):</strong> In graph algorithms, a queue is used to explore neighbors layer by layer.</li>
            </ul>
        `
    },
    {
        id: 7,
        title: "Stack Data Structure",
        content: `
            <h4>Internal Implementation Options</h4>
            <p>Stacks can be implemented using:</p>
            <ul>
                <li><strong>Arrays:</strong> 
                    <ul>
                        <li><em>Pros:</em> Easy to implement, memory efficient (no pointers).</li>
                        <li><em>Cons:</em> Fixed size (unless dynamic), contiguous memory requirement.</li>
                    </ul>
                </li>
                <li><strong>Linked Lists:</strong> 
                    <ul>
                        <li><em>Pros:</em> Dynamic size, non-contiguous memory.</li>
                        <li><em>Cons:</em> Extra memory for pointers, slightly slower due to cache misses.</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: 8,
        title: "Queue Data Structure",
        content: `
            <h4>Internal Structure</h4>
            <p>Queues maintain two pointers to manage operations efficiently:</p>
            <ul>
                <li><strong>Front (Head):</strong> Points to the element that will be removed next.</li>
                <li><strong>Rear (Tail):</strong> Points to the position where the next element will be inserted.</li>
            </ul>
            <p>In an array implementation, these are integer indices. In a Linked List, these are Node references.</p>
        `
    },
    {
        id: 9,
        title: "When do we use Stacks & Queues?",
        content: `
            <h4>Choosing the Right Tool</h4>
            <div class="comparison-table">
                <style>
                    .comparison-table table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
                    .comparison-table th, .comparison-table td { border: 1px solid var(--border-color); padding: 0.5rem; text-align: left; }
                    .comparison-table th { background: var(--bg-secondary); color: var(--primary); }
                </style>
                <table>
                    <tr>
                        <th>Scenario</th>
                        <th>Use Stack (LIFO)</th>
                        <th>Use Queue (FIFO)</th>
                    </tr>
                    <tr>
                        <td>Order of Processing</td>
                        <td>Reverse order (Most recent first)</td>
                        <td>Arrival order (Oldest first)</td>
                    </tr>
                    <tr>
                        <td>Algorithms</td>
                        <td>DFS, Backtracking, Recursion</td>
                        <td>BFS, Level-order traversal</td>
                    </tr>
                    <tr>
                        <td>System</td>
                        <td>Memory management, Undo</td>
                        <td>Task scheduling, Buffering</td>
                    </tr>
                </table>
            </div>
        `
    },
    {
        id: 10,
        title: "Java Deque (Deck)",
        content: `
            <h4>Double Ended Queue (Deque)</h4>
            <p>Java provides the <code>Deque</code> interface (pronounced "deck"), which stands for <strong>Double Ended Queue</strong>. It supports insertion and removal at both ends.</p>
            <p>It is the recommended interface for stacks and queues in modern Java, replacing the legacy <code>Stack</code> class.</p>
            <pre><code class="language-java">
Deque&lt;Integer&gt; deque = new ArrayDeque&lt;&gt;();

// Add at both ends
deque.addFirst(1); // [1]
deque.addLast(2);  // [1, 2]
deque.addFirst(0); // [0, 1, 2]

// Remove from both ends
deque.removeLast(); // Removes 2
deque.removeFirst(); // Removes 0
            </code></pre>
        `
    },
    {
        id: 11,
        title: "ArrayDeque",
        content: `
            <h4>Why ArrayDeque?</h4>
            <p><code>ArrayDeque</code> is a resizable-array implementation of the <code>Deque</code> interface.</p>
            <ul>
                <li><strong>Vs Stack:</strong> The <code>Stack</code> class is synchronized (thread-safe), which makes it slower. <code>ArrayDeque</code> is not synchronized and is faster for single-threaded use.</li>
                <li><strong>Vs LinkedList:</strong> <code>ArrayDeque</code> is generally faster than <code>LinkedList</code> for queue operations because it uses an array structure that is cache-friendly.</li>
            </ul>
            <pre><code class="language-java">
// Recommended way to create a Stack
Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();
stack.push(10);
stack.pop();

// Recommended way to create a Queue
Deque&lt;Integer&gt; queue = new ArrayDeque&lt;&gt;();
queue.offer(10);
queue.poll();
            </code></pre>
        `
    },
    {
        id: 12,
        title: "Custom Stack Implementation",
        content: `
            <h4>Building a Stack from Scratch</h4>
            <p>We will implement a stack using an array. We need a pointer <code>ptr</code> to track the top element.</p>
            <pre><code class="language-java">
public class CustomStack {
    protected int[] data;
    private static final int DEFAULT_SIZE = 10;
    int ptr = -1; // Initially empty

    public CustomStack() {
        this(DEFAULT_SIZE);
    }

    public CustomStack(int size) {
        this.data = new int[size];
    }

    public boolean push(int item) {
        if (isFull()) {
            System.out.println("Stack is full!");
            return false;
        }
        ptr++;
        data[ptr] = item;
        return true;
    }

    public int pop() throws Exception {
        if (isEmpty()) {
            throw new Exception("Cannot pop from an empty stack!!");
        }
        return data[ptr--]; // Return data, then decrement ptr
    }

    public int peek() throws Exception {
        if (isEmpty()) {
            throw new Exception("Cannot peek from an empty stack!!");
        }
        return data[ptr];
    }

    public boolean isFull() {
        return ptr == data.length - 1;
    }

    public boolean isEmpty() {
        return ptr == -1;
    }
}
            </code></pre>
        `
    },
    {
        id: 13,
        title: "Stack Exception Handling",
        content: `
            <h4>Handling Edge Cases</h4>
            <p>Robust code must handle scenarios where operations are invalid.</p>
            <ul>
                <li><strong>Stack Overflow:</strong> Occurs when pushing to a full stack. We can return false or throw an exception.</li>
                <li><strong>Stack Underflow:</strong> Occurs when popping from an empty stack. We must throw an exception.</li>
            </ul>
            <pre><code class="language-java">
// Custom Exception
public class StackException extends Exception {
    public StackException(String message) {
        super(message);
    }
}

// Usage
try {
    stack.pop();
} catch (StackException e) {
    System.out.println(e.getMessage());
}
            </code></pre>
        `
    },
    {
        id: 14,
        title: "Dynamic Stack Implementation",
        content: `
            <h4>Resizable Stack</h4>
            <p>A static array stack has a fixed size. A dynamic stack solves this by creating a larger array when the current one is full.</p>
            <p><strong>Strategy:</strong> When full, create a new array of double the size, copy all elements, and update the reference.</p>
            <pre><code class="language-java">
public class DynamicStack extends CustomStack {
    public DynamicStack() {
        super();
    }

    public DynamicStack(int size) {
        super(size);
    }

    @Override
    public boolean push(int item) {
        if (this.isFull()) {
            // double the array size
            int[] temp = new int[data.length * 2];

            // copy all previous items
            for (int i = 0; i < data.length; i++) {
                temp[i] = data[i];
            }

            data = temp;
        }

        // Now we have space, insert normally
        return super.push(item);
    }
}
            </code></pre>
        `
    },
    {
        id: 15,
        title: "Complexity Analysis",
        content: `
            <h4>Time Complexity (Stack)</h4>
            <ul>
                <li><strong>Push:</strong> O(1)
                    <ul><li><em>Note:</em> For dynamic stack, it is <strong>Amortized O(1)</strong>. Most pushes are O(1), but the resizing operation (O(N)) happens rarely.</li></ul>
                </li>
                <li><strong>Pop:</strong> O(1) - Just decrement pointer.</li>
                <li><strong>Peek:</strong> O(1) - Direct array access.</li>
            </ul>
            <h4>Space Complexity</h4>
            <p><strong>O(N)</strong> to store N elements.</p>
        `
    },
    {
        id: 16,
        title: "Custom Queue Implementation",
        content: `
            <h4>Building a Queue (Naive Approach)</h4>
            <p>We use an array with an <code>end</code> pointer. We insert at <code>end</code> and remove from index 0.</p>
            <pre><code class="language-java">
public class CustomQueue {
    private int[] data;
    int end = 0;

    public boolean insert(int item) {
        if (isFull()) return false;
        data[end++] = item;
        return true;
    }

    public int remove() throws Exception {
        if (isEmpty()) throw new Exception("Queue is empty");

        int removed = data[0];

        // Shift all elements to the left
        // This makes removal O(N) - Inefficient!
        for (int i = 1; i < end; i++) {
            data[i-1] = data[i];
        }
        end--;
        return removed;
    }
}
            </code></pre>
            <p><strong>Problem:</strong> Shifting elements on every removal is very slow (O(N)). We need a better way.</p>
        `
    },
    {
        id: 17,
        title: "Complexity Analysis",
        content: `
            <h4>Time Complexity (Queue)</h4>
            <ul>
                <li><strong>Enqueue:</strong> O(1)</li>
                <li><strong>Dequeue:</strong> 
                    <ul>
                        <li>Naive Implementation: <strong>O(N)</strong> due to shifting.</li>
                        <li>Circular Implementation: <strong>O(1)</strong>.</li>
                    </ul>
                </li>
                <li><strong>Peek:</strong> O(1)</li>
            </ul>
        `
    },
    {
        id: 18,
        title: "Circular Queue Implementation",
        content: `
            <h4>Optimizing Space & Time</h4>
            <p>A <strong>Circular Queue</strong> treats the array as a circle. When we reach the end of the array, we wrap around to the beginning if there is space.</p>
            <p>This allows us to increment <code>front</code> and <code>end</code> pointers without shifting elements.</p>
            <pre><code class="language-java">
public class CircularQueue {
    protected int[] data;
    protected int end = 0;
    protected int front = 0;
    private int size = 0;

    public boolean insert(int item) {
        if (isFull()) return false;
        data[end++] = item;
        end = end % data.length; // Wrap around
        size++;
        return true;
    }

    public int remove() throws Exception {
        if (isEmpty()) throw new Exception("Empty");
        int removed = data[front++];
        front = front % data.length; // Wrap around
        size--;
        return removed;
    }
}
            </code></pre>
            <p>Now both insert and remove are <strong>O(1)</strong>!</p>
        `
    },
    {
        id: 19,
        title: "Dynamic Queue Implementation",
        content: `
            <h4>Resizable Circular Queue</h4>
            <p>Resizing a circular queue is tricky. We can't just copy elements linearly because the data might be wrapped around.</p>
            <p><strong>Solution:</strong> When resizing, we "unroll" the queue into the new array starting from index 0.</p>
            <pre><code class="language-java">
@Override
public boolean insert(int item) {
    if (this.isFull()) {
        int[] temp = new int[data.length * 2];

        // Copy elements: front -> end of array, then 0 -> end
        for (int i = 0; i < data.length; i++) {
            temp[i] = data[(front + i) % data.length];
        }
        front = 0;
        end = data.length;
        data = temp;
    }
    return super.insert(item);
}
            </code></pre>
        `
    }
];
