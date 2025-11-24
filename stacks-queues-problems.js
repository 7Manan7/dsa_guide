const sqProblems = [
    {
        id: 'q01',
        number: 'Q-01',
        title: 'Implement Queue using Stacks',
        difficulty: 'easy',
        statement: 'Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).',
        approach: [
            'Use two stacks: inputStack and outputStack',
            '<strong>Push:</strong> Always push to inputStack',
            '<strong>Pop/Peek:</strong> If outputStack is empty, move all elements from inputStack to outputStack. Then pop/peek from outputStack',
            'This ensures the order is reversed twice, achieving FIFO behavior'
        ],
        code: `class MyQueue {
    private Stack<Integer> inputStack;
    private Stack<Integer> outputStack;

    public MyQueue() {
        inputStack = new Stack<>();
        outputStack = new Stack<>();
    }
    
    public void push(int x) {
        inputStack.push(x);
    }
    
    public int pop() {
        peek(); // Ensure outputStack has elements
        return outputStack.pop();
    }
    
    public int peek() {
        if (outputStack.isEmpty()) {
            while (!inputStack.isEmpty()) {
                outputStack.push(inputStack.pop());
            }
        }
        return outputStack.peek();
    }
    
    public boolean empty() {
        return inputStack.isEmpty() && outputStack.isEmpty();
    }
}`,
        timeComplexity: 'Amortized O(1) for pop/peek, O(1) for push',
        spaceComplexity: 'O(n) - to store elements'
    },
    {
        id: 'q02',
        number: 'Q-02',
        title: 'Game of Two Stacks',
        difficulty: 'medium',
        statement: 'Given two stacks of integers and a maximum sum x, determine the maximum number of elements you can select from both stacks such that the sum of selected elements does not exceed x.',
        approach: [
            'Take elements from Stack A as long as sum <= x',
            'Then, try to take elements from Stack B',
            'If adding an element from B exceeds x, remove elements from A (backtracking) to make space',
            'Keep track of the maximum count of elements encountered'
        ],
        code: `public static int twoStacks(int maxSum, List<Integer> a, List<Integer> b) {
    return twoStacksHelper(maxSum, a, b, 0, 0) - 1;
}

private static int twoStacksHelper(int x, List<Integer> a, List<Integer> b, int sum, int count) {
    if (sum > x) {
        return count;
    }

    if (a.isEmpty() && b.isEmpty()) {
        return count;
    }

    int ans1 = 0;
    if (!a.isEmpty()) {
        ans1 = twoStacksHelper(x, a.subList(1, a.size()), b, sum + a.get(0), count + 1);
    }

    int ans2 = 0;
    if (!b.isEmpty()) {
        ans2 = twoStacksHelper(x, a, b.subList(1, b.size()), sum + b.get(0), count + 1);
    }

    return Math.max(ans1, ans2);
}

// Optimized O(N) approach
public static int twoStacksOptimized(int x, int[] a, int[] b) {
    int sum = 0;
    int count = 0;
    int i = 0;
    int j = 0;

    // Take as many from A as possible
    while (i < a.length && sum + a[i] <= x) {
        sum += a[i];
        i++;
    }
    count = i;

    // Try to add from B while removing from A if needed
    while (j < b.length && i >= 0) {
        sum += b[j];
        j++;
        while (sum > x && i > 0) {
            i--;
            sum -= a[i];
        }
        if (sum <= x) {
            count = Math.max(count, i + j);
        }
    }
    return count;
}`,
        timeComplexity: 'O(N + M)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q03',
        number: 'Q-03',
        title: 'Largest Rectangle in Histogram',
        difficulty: 'hard',
        statement: 'Given an array of integers heights representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
        approach: [
            'Use a stack to store indices of increasing heights',
            'When a smaller bar is encountered, pop from stack',
            'The popped bar is the height of the rectangle',
            'Width is determined by the current index and the new top of stack',
            'Calculate area and update max'
        ],
        code: `public int largestRectangleArea(int[] heights) {
    Stack<Integer> stack = new Stack<>();
    int maxArea = 0;
    int n = heights.length;

    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        
        while (!stack.isEmpty() && h < heights[stack.peek()]) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 'q04',
        number: 'Q-04',
        title: 'Valid Parentheses',
        difficulty: 'easy',
        statement: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
        approach: [
            'Use a stack to keep track of opening brackets',
            'When a closing bracket is encountered, check if it matches the top of the stack',
            'If stack is empty or mismatch found, return false',
            'At the end, stack must be empty'
        ],
        code: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            
            char top = stack.pop();
            if (c == ')' && top != '(') return false;
            if (c == '}' && top != '{') return false;
            if (c == ']' && top != '[') return false;
        }
    }
    
    return stack.isEmpty();
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 'q05',
        number: 'Q-05',
        title: 'Minimum Add to Make Parentheses Valid',
        difficulty: 'medium',
        statement: 'A parentheses string is valid if and only if: It is the empty string, It can be written as AB (A concatenated with B), where A and B are valid strings, or It can be written as (A), where A is a valid string. Given a parentheses string s, return the minimum number of moves required to make s valid.',
        approach: [
            'Count open brackets needed and close brackets needed',
            'Traverse the string',
            'If \'(\', increment open count',
            'If \')\', decrement open count if > 0, else increment close count (needed)',
            'Result is open count + close count'
        ],
        code: `public int minAddToMakeValid(String s) {
    int open = 0;
    int close = 0;
    
    for (char c : s.toCharArray()) {
        if (c == '(') {
            open++;
        } else {
            if (open > 0) {
                open--;
            } else {
                close++;
            }
        }
    }
    
    return open + close;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 'q06',
        number: 'Q-06',
        title: 'Minimum Insertions to Balance a Parentheses String',
        difficulty: 'medium',
        statement: 'Given a parentheses string s containing only the characters \'(\' and \')\'. A parentheses string is balanced if: Any left parenthesis \'(\' must have a corresponding two consecutive right parenthesis \'))\'. Left parenthesis \'(\' must go before the corresponding two consecutive right parenthesis \'))\'. Return the minimum number of insertions needed to make s balanced.',
        approach: [
            'We need 2 \')\' for every \'(\'',
            'Traverse the string',
            'If \'(\', increment need for \')\' by 2',
            'If \')\', decrement need by 1',
            'If need becomes -1 (too many \')\'), we need to insert a \'(\' (add 1 to res) and reset need to 1',
            'At the end, add remaining need to result'
        ],
        code: `public int minInsertions(String s) {
    int res = 0;
    int rightNeeded = 0;
    
    for (char c : s.toCharArray()) {
        if (c == '(') {
            if (rightNeeded % 2 == 1) {
                // We had an odd need for ')', meaning we had '('. 
                // We need to close the previous '(' with one ')' (adding 1 insertion)
                // and then process the new '('
                rightNeeded--;
                res++;
            }
            rightNeeded += 2; // Need two ')' for this '('
        } else {
            rightNeeded--; // Found a ')', so need decreases
            
            if (rightNeeded < 0) {
                // Too many ')', need to insert a '('
                rightNeeded += 2;
                res++;
            }
        }
    }
    
    return res + rightNeeded;
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    }
];

function renderSQProblems() {
    const mainContent = document.getElementById('main-content');

    // Clear existing content if any (though usually empty)
    mainContent.innerHTML = '';

    sqProblems.forEach(problem => {
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

    addSQSummarySections();

    if (window.Prism) {
        Prism.highlightAll();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function addSQSummarySections() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML += `
        <section class="summary-section">
            <h2>Key Patterns & Techniques</h2>
            
            <div class="pattern-grid">
                <div class="pattern-card">
                    <h3>📚 Monotonic Stack</h3>
                    <p>Used for finding next greater/smaller elements</p>
                    <ul>
                        <li>Largest Rectangle in Histogram</li>
                        <li>Next Greater Element</li>
                        <li>Stock Span Problem</li>
                    </ul>
                </div>

                <div class="pattern-card">
                    <h3>⚖️ Balancing Symbols</h3>
                    <p>Using stack to match opening and closing symbols</p>
                    <ul>
                        <li>Valid Parentheses</li>
                        <li>Expression Evaluation</li>
                        <li>Syntax Parsing</li>
                    </ul>
                </div>

                <div class="pattern-card">
                    <h3>🔄 Two Stacks / Queues</h3>
                    <p>Using multiple structures to simulate others</p>
                    <ul>
                        <li>Queue using Stacks</li>
                        <li>Stack using Queues</li>
                        <li>Min Stack</li>
                    </ul>
                </div>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', renderSQProblems);
