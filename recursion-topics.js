const courseTopics = [
    {
        id: 1,
        title: "Introduction",
        content: `
            <h4>What is Recursion?</h4>
            <p>Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.</p>
            <p><strong>In simple terms:</strong> A function calling itself.</p>
            <p>It's like looking in a mirror that faces another mirror - infinite reflections, but in programming, we must have a stopping point (Base Case).</p>
        `
    },
    {
        id: 2,
        title: "The Call Stack",
        content: `
            <h4>How it Works Internally</h4>
            <p>When a function calls itself, the computer adds a new "frame" to the <strong>Call Stack</strong>.</p>
            <p>This frame holds the function's variables and state.</p>
            <p>When the base case is reached, the stack starts "popping" frames off one by one, returning values back up the chain.</p>
        `
    },
    {
        id: 3,
        title: "Anatomy of Recursion",
        content: `
            <h4>Two Essential Parts</h4>
            <ul>
                <li><strong>Base Case:</strong> The condition to stop recursion. Without this, you get a StackOverflowError.</li>
                <li><strong>Recursive Case:</strong> The part where the function calls itself with a modified input (moving towards the base case).</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Types of Recursion",
        content: `
            <h4>Common Patterns</h4>
            <ul>
                <li><strong>Head Recursion:</strong> Recursive call is at the start. Processing happens <em>after</em> the call returns.</li>
                <li><strong>Tail Recursion:</strong> Recursive call is the <em>last</em> thing the function does. Easier for compilers to optimize.</li>
                <li><strong>Tree Recursion:</strong> A function makes multiple recursive calls (e.g., Fibonacci).</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "Complexity Analysis",
        content: `
            <h4>Recurrence Relations</h4>
            <p>We use mathematical formulas to analyze recursion.</p>
            <p><strong>Time:</strong> Often O(2^N) for tree recursion or O(N) for linear recursion.</p>
            <p><strong>Space:</strong> O(N) usually, due to the maximum depth of the call stack.</p>
        `
    }
];
