const stacksQueuesTopics = [
    {
        id: 1,
        title: "Introduction",
        content: `
            <h4>Course Overview</h4>
            <p>Welcome to the Stacks and Queues module! In this section, we will explore two fundamental linear data structures that are essential for algorithm design and system implementation.</p>
            <p>You will learn about their properties, implementation details, and real-world applications.</p>
        `
    },
    {
        id: 2,
        title: "Stacks Introduction",
        content: `
            <h4>What is a Stack?</h4>
            <p>A Stack is a linear data structure that follows the <strong>LIFO</strong> (Last In, First Out) principle. The last element added to the stack is the first one to be removed.</p>
            <p>Think of it like a stack of plates: you add new plates to the top and remove them from the top.</p>
        `
    },
    {
        id: 3,
        title: "Stack Example",
        content: `
            <h4>Real-world Examples</h4>
            <ul>
                <li><strong>Undo mechanism</strong> in text editors.</li>
                <li><strong>Browser history</strong> (back button).</li>
                <li><strong>Function call stack</strong> in programming languages.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Push and Pop",
        content: `
            <h4>Core Operations</h4>
            <p>The two primary operations of a stack are:</p>
            <ul>
                <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
                <li><strong>Pop:</strong> Removes the top element from the stack.</li>
            </ul>
            <div class="code-block">stack.push(10); // Adds 10
int val = stack.pop(); // Removes 10</div>
        `
    },
    {
        id: 5,
        title: "Queues Introduction",
        content: `
            <h4>What is a Queue?</h4>
            <p>A Queue is a linear data structure that follows the <strong>FIFO</strong> (First In, First Out) principle. The first element added is the first one to be removed.</p>
            <p>It behaves like a real-world queue (line) of people waiting for a service.</p>
        `
    },
    {
        id: 6,
        title: "Queue Example",
        content: `
            <h4>Real-world Examples</h4>
            <ul>
                <li><strong>Printer tasks</strong> waiting to be printed.</li>
                <li><strong>Process scheduling</strong> in operating systems.</li>
                <li><strong>Customer support</strong> call waiting lines.</li>
            </ul>
        `
    },
    {
        id: 7,
        title: "Stack Data Structure",
        content: `
            <h4>Internal Structure</h4>
            <p>Stacks can be implemented using:</p>
            <ul>
                <li><strong>Arrays:</strong> Fixed size, efficient access.</li>
                <li><strong>Linked Lists:</strong> Dynamic size, flexible memory usage.</li>
            </ul>
        `
    },
    {
        id: 8,
        title: "Queue Data Structure",
        content: `
            <h4>Internal Structure</h4>
            <p>Queues maintain two pointers:</p>
            <ul>
                <li><strong>Front (Head):</strong> Where elements are removed.</li>
                <li><strong>Rear (Tail):</strong> Where elements are added.</li>
            </ul>
        `
    },
    {
        id: 9,
        title: "When do we use Stacks & Queues?",
        content: `
            <h4>Use Cases</h4>
            <p><strong>Use Stack when:</strong> You need to reverse things, track state (backtracking), or manage function calls.</p>
            <p><strong>Use Queue when:</strong> You need to process things in the order they arrived (scheduling, buffering, BFS).</p>
        `
    },
    {
        id: 10,
        title: "Java Deque (Deck)",
        content: `
            <h4>Double Ended Queue</h4>
            <p>Java provides the <code>Deque</code> interface (pronounced "deck"), which supports insertion and removal at both ends.</p>
            <p>It is often used as a modern alternative to the legacy <code>Stack</code> class.</p>
        `
    },
    {
        id: 11,
        title: "ArrayDeque",
        content: `
            <h4>ArrayDeque Implementation</h4>
            <p><code>ArrayDeque</code> is a resizable-array implementation of the <code>Deque</code> interface.</p>
            <p>It is faster than <code>Stack</code> when used as a stack, and faster than <code>LinkedList</code> when used as a queue.</p>
            <div class="code-block">Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();</div>
        `
    },
    {
        id: 12,
        title: "Custom Stack Implementation",
        content: `
            <h4>Building a Stack</h4>
            <p>We will implement a custom stack class using an array to understand the internal mechanics of pointers and boundary checks.</p>
        `
    },
    {
        id: 13,
        title: "Stack Exception Handling",
        content: `
            <h4>Handling Errors</h4>
            <p>It's crucial to handle edge cases:</p>
            <ul>
                <li><strong>Stack Overflow:</strong> Trying to push to a full stack.</li>
                <li><strong>Stack Underflow:</strong> Trying to pop from an empty stack.</li>
            </ul>
        `
    },
    {
        id: 14,
        title: "Dynamic Stack Implementation",
        content: `
            <h4>Resizable Stack</h4>
            <p>A dynamic stack automatically grows its capacity when it becomes full, typically by doubling the array size.</p>
        `
    },
    {
        id: 15,
        title: "Complexity Analysis",
        content: `
            <h4>Time Complexity (Stack)</h4>
            <ul>
                <li><strong>Push:</strong> O(1) (amortized for dynamic)</li>
                <li><strong>Pop:</strong> O(1)</li>
                <li><strong>Peek:</strong> O(1)</li>
            </ul>
        `
    },
    {
        id: 16,
        title: "Custom Queue Implementation",
        content: `
            <h4>Building a Queue</h4>
            <p>We will implement a basic queue using an array, managing the <code>front</code> and <code>end</code> pointers.</p>
        `
    },
    {
        id: 17,
        title: "Complexity Analysis",
        content: `
            <h4>Time Complexity (Queue)</h4>
            <ul>
                <li><strong>Enqueue:</strong> O(1)</li>
                <li><strong>Dequeue:</strong> O(1)</li>
                <li><strong>Peek:</strong> O(1)</li>
            </ul>
        `
    },
    {
        id: 18,
        title: "Circular Queue Implementation",
        content: `
            <h4>Optimizing Space</h4>
            <p>A standard array queue can waste space. A <strong>Circular Queue</strong> connects the end back to the start, utilizing empty spaces efficiently.</p>
        `
    },
    {
        id: 19,
        title: "Dynamic Queue Implementation",
        content: `
            <h4>Resizable Queue</h4>
            <p>Similar to the dynamic stack, a dynamic queue expands its capacity when full, ensuring we never run out of space during runtime.</p>
        `
    }
];
