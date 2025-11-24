const recursionProblems = [
    {
        id: 'q01',
        number: 'Q-01',
        title: 'Factorial of N',
        difficulty: 'easy',
        statement: 'Write a recursive function to calculate the factorial of a number N. Factorial(N) = N * (N-1) * ... * 1.',
        approach: [
            '<strong>Base Case:</strong> If N is 0 or 1, return 1.',
            '<strong>Recursive Step:</strong> Return N * factorial(N - 1).'
        ],
        code: `public int factorial(int n) {
    // Base Case
    if (n <= 1) {
        return 1;
    }
    
    // Recursive Step
    return n * factorial(n - 1);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N) stack'
    },
    {
        id: 'q02',
        number: 'Q-02',
        title: 'Fibonacci Number',
        difficulty: 'easy',
        statement: 'Find the Nth Fibonacci number. Fib(N) = Fib(N-1) + Fib(N-2). Sequence: 0, 1, 1, 2, 3, 5...',
        approach: [
            '<strong>Base Case:</strong> If N is 0, return 0. If N is 1, return 1.',
            '<strong>Recursive Step:</strong> Return fib(N-1) + fib(N-2).',
            'Note: This is inefficient (O(2^N)) without memoization.'
        ],
        code: `public int fib(int n) {
    if (n <= 1) {
        return n;
    }
    
    return fib(n - 1) + fib(n - 2);
}`,
        timeComplexity: 'O(2^N)',
        spaceComplexity: 'O(N) stack'
    },
    {
        id: 'q03',
        number: 'Q-03',
        title: 'Power(x, n)',
        difficulty: 'medium',
        statement: 'Calculate x raised to the power n (x^n).',
        approach: [
            '<strong>Naive:</strong> x * pow(x, n-1). O(N).',
            '<strong>Optimized:</strong> If n is even, x^n = (x^(n/2))^2. If n is odd, x * x^(n-1).',
            'This reduces complexity to O(log N).'
        ],
        code: `public double myPow(double x, int n) {
    if (n == 0) return 1.0;
    
    double half = myPow(x, n / 2);
    
    if (n % 2 == 0) {
        return half * half;
    } else {
        return x * half * half;
    }
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'q04',
        number: 'Q-04',
        title: 'Tower of Hanoi',
        difficulty: 'medium',
        statement: 'Move N disks from Source rod to Destination rod using an Auxiliary rod, following standard rules.',
        approach: [
            'Move N-1 disks from Source to Aux.',
            'Move the Nth disk from Source to Dest.',
            'Move N-1 disks from Aux to Dest.'
        ],
        code: `public void solveHanoi(int n, char src, char dest, char aux) {
    if (n == 1) {
        System.out.println("Move disk 1 from " + src + " to " + dest);
        return;
    }
    
    solveHanoi(n - 1, src, aux, dest);
    System.out.println("Move disk " + n + " from " + src + " to " + dest);
    solveHanoi(n - 1, aux, dest, src);
}`,
        timeComplexity: 'O(2^N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q05',
        number: 'Q-05',
        title: 'Generate Subsets',
        difficulty: 'medium',
        statement: 'Given a string or array, generate all possible subsets (the Power Set).',
        approach: [
            'For each element, we have two choices:',
            '1. <strong>Include</strong> it in the current subset.',
            '2. <strong>Exclude</strong> it from the current subset.',
            'Recurse for the next index with both choices.'
        ],
        code: `public void subsets(String s, String current, int i) {
    if (i == s.length()) {
        System.out.println(current);
        return;
    }
    
    // Include
    subsets(s, current + s.charAt(i), i + 1);
    
    // Exclude
    subsets(s, current, i + 1);
}`,
        timeComplexity: 'O(2^N)',
        spaceComplexity: 'O(N)'
    }
];

function renderRecursionProblems() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    recursionProblems.forEach(problem => {
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

    if (window.Prism) {
        Prism.highlightAll();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', renderRecursionProblems);
