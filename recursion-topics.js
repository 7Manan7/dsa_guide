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
    },
    {
        id: 6,
        title: "Merge Sort Theory",
        content: `
            <h4>Divide & Conquer Strategy</h4>
            <p>Merge Sort is a classic Divide and Conquer algorithm.</p>
            <ul>
                <li><strong>Divide:</strong> Split the array into two halves.</li>
                <li><strong>Conquer:</strong> Recursively sort the two halves.</li>
                <li><strong>Merge:</strong> Combine the sorted halves into a single sorted array.</li>
            </ul>
            <h4>Complexity Analysis</h4>
            <p><strong>Time:</strong> O(N log N). At each level, we do N work (merging), and there are log N levels.</p>
            <p><strong>Space:</strong> O(N) for the temporary arrays used during merging.</p>
            <h4>Akra-Bazzi Formula</h4>
            <p>A generalized method for solving recurrence relations, often used for divide and conquer algorithms with unequal subproblems, providing a more robust analysis than the Master Theorem.</p>
        `
    },
    {
        id: 7,
        title: "Quick Sort Theory",
        content: `
            <h4>Pivot & Partitioning</h4>
            <p>Quick Sort revolves around picking a 'pivot' element and partitioning the array such that:</p>
            <ul>
                <li>Elements < pivot are on the left.</li>
                <li>Elements > pivot are on the right.</li>
                <li>The pivot is placed in its correct sorted position.</li>
            </ul>
            <h4>Pivot Selection Strategy</h4>
            <p>The choice of pivot affects performance:</p>
            <ul>
                <li><strong>First/Last Element:</strong> Simple but worst-case O(N^2) for sorted arrays.</li>
                <li><strong>Random Element:</strong> Reduces probability of worst-case.</li>
                <li><strong>Median of Three:</strong> Good balance.</li>
            </ul>
            <h4>Hybrid Algorithms</h4>
            <p>Standard library implementations (like Arrays.sort) often use <strong>Dual-Pivot QuickSort</strong> or <strong>TimSort</strong> (Merge Sort + Insertion Sort) for better real-world performance.</p>
        `
    },
    {
        id: 8,
        title: "Strings & Subsets",
        content: `
            <h4>Recursion on Strings</h4>
            <p>String problems often involve processing one character at a time and recursing on the rest.</p>
            <ul>
                <li><strong>Skip Character:</strong> Pass <code>str.substring(1)</code> to process the next part.</li>
                <li><strong>Return String:</strong> Concatenate the result of the recursive call with the current character (or not).</li>
            </ul>
            <h4>Subsets & Subsequences</h4>
            <p>A subset (or subsequence) involves making a choice for each element: either <strong>take it</strong> or <strong>ignore it</strong>.</p>
            <p>This pattern is fundamental for solving problems like:</p>
            <ul>
                <li>Power Set (all subsets)</li>
                <li>Permutations</li>
                <li>Combinations</li>
            </ul>
            <h4>Complexity Analysis</h4>
            <p><strong>Time:</strong> O(2^N) because for every element, we have 2 choices (take or ignore).</p>
            <p><strong>Space:</strong> O(N) stack space (depth of recursion tree).</p>
        `
    },
    {
        id: 9,
        title: "Permutations",
        content: `
            <h4>What is a Permutation?</h4>
            <p>A permutation is an arrangement of all the members of a set into some sequence or order.</p>
            <p><strong>Example:</strong> For "abc", permutations are: abc, acb, bac, bca, cab, cba.</p>
            <h4>Recursive Approach</h4>
            <p>Unlike subsets (take/ignore), permutations involve <strong>variable recursive calls</strong>.</p>
            <ul>
                <li>For each character, we insert it into <strong>every possible position</strong> of the already processed string.</li>
                <li>If the processed string has length N, there are N+1 positions to insert the new character.</li>
            </ul>
            <h4>Complexity</h4>
            <p><strong>Time:</strong> O(N!) - The number of permutations grows factorially.</p>
        `
    }
];
