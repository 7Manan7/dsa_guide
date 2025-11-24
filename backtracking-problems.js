const btProblems = [
    {
        id: 'q01',
        number: 'Q-01',
        title: 'Counting Paths',
        difficulty: 'easy',
        statement: 'Given a 3x3 matrix (or NxM), count the number of ways to reach the bottom-right cell (N-1, M-1) starting from the top-left (0, 0). You can only move <strong>Right</strong> or <strong>Down</strong>.',
        approach: [
            '<strong>Base Case:</strong> If row or col reaches the target (1, 1), we found 1 path. Return 1.',
            '<strong>Recursive Step:</strong> Path Count = count(row-1, col) + count(row, col-1).',
            'Note: We usually think of this as reducing the problem space (3x3 -> 2x3 and 3x2).'
        ],
        code: `public int count(int r, int c) {
    if (r == 1 || c == 1) {
        return 1;
    }
    
    int left = count(r - 1, c);
    int right = count(r, c - 1);
    
    return left + right;
}

// Usage: count(3, 3) for a 3x3 grid`,
        timeComplexity: 'O(2^(N+M))',
        spaceComplexity: 'O(N+M) stack space'
    },
    {
        id: 'q02',
        number: 'Q-02',
        title: 'Printing Paths',
        difficulty: 'easy',
        statement: 'Instead of just counting, print the actual path taken (e.g., "DDRR"). You can only move Right (R) and Down (D).',
        approach: [
            'Carry a process string "p" in the recursion.',
            'When moving Down, append "D".',
            'When moving Right, append "R".',
            '<strong>Base Case:</strong> When destination is reached, print the string.'
        ],
        code: `public void path(String p, int r, int c) {
    if (r == 1 && c == 1) {
        System.out.println(p);
        return;
    }
    
    if (r > 1) {
        path(p + "D", r - 1, c);
    }
    
    if (c > 1) {
        path(p + "R", r, c - 1);
    }
}`,
        timeComplexity: 'O(2^(N+M))',
        spaceComplexity: 'O(N+M)'
    },
    {
        id: 'q03',
        number: 'Q-03',
        title: 'Including Diagonal Paths',
        difficulty: 'medium',
        statement: 'Extend the previous problem to allow Diagonal (D) moves as well. Now you can move Vertical (V), Horizontal (H), and Diagonal (D).',
        approach: [
            'Add a third recursive call.',
            'Diagonal move reduces both row and col index by 1.',
            'Append "D" (or "dia") to the path string.'
        ],
        code: `public ArrayList<String> pathRetDiagonal(String p, int r, int c) {
    if (r == 1 && c == 1) {
        ArrayList<String> list = new ArrayList<>();
        list.add(p);
        return list;
    }
    
    ArrayList<String> list = new ArrayList<>();
    
    // Vertical
    if (r > 1) {
        list.addAll(pathRetDiagonal(p + "V", r - 1, c));
    }
    
    // Horizontal
    if (c > 1) {
        list.addAll(pathRetDiagonal(p + "H", r, c - 1));
    }
    
    // Diagonal
    if (r > 1 && c > 1) {
        list.addAll(pathRetDiagonal(p + "D", r - 1, c - 1));
    }
    
    return list;
}`,
        timeComplexity: 'O(3^(N+M))',
        spaceComplexity: 'O(N+M)'
    },
    {
        id: 'q04',
        number: 'Q-04',
        title: 'Maze with Obstacles',
        difficulty: 'medium',
        statement: 'Navigate from (0,0) to (N-1,M-1) avoiding obstacles. Boolean board where false means obstacle.',
        approach: [
            'Add a check at the start of the function.',
            'If board[r][c] is false (obstacle), stop this path (return).',
            'Proceed with normal recursion for open paths.'
        ],
        code: `public void pathRestrictions(String p, boolean[][] maze, int r, int c) {
    // Base case: Reached destination
    if (r == maze.length - 1 && c == maze[0].length - 1) {
        System.out.println(p);
        return;
    }

    // Obstacle check
    if (!maze[r][c]) {
        return;
    }

    // Move Down
    if (r < maze.length - 1) {
        pathRestrictions(p + "D", maze, r + 1, c);
    }

    // Move Right
    if (c < maze[0].length - 1) {
        pathRestrictions(p + "R", maze, r, c + 1);
    }
}`,
        timeComplexity: 'O(2^(N+M))',
        spaceComplexity: 'O(N+M)'
    },
    {
        id: 'q05',
        number: 'Q-05',
        title: 'Including All Paths (Backtracking)',
        difficulty: 'hard',
        statement: 'Allow movement in all 4 directions (Up, Down, Left, Right). Print all possible paths to the target.',
        approach: [
            '<strong>Problem:</strong> Moving Up then Down creates an infinite loop.',
            '<strong>Solution:</strong> Mark the current cell as "visited" (false) before exploring neighbors.',
            '<strong>Backtrack:</strong> After returning from recursion, mark the cell as "unvisited" (true) again so other paths can use it.',
            'This "Make Change -> Recurse -> Undo Change" is Backtracking.'
        ],
        code: `public void allPaths(String p, boolean[][] maze, int r, int c) {
    if (r == maze.length - 1 && c == maze[0].length - 1) {
        System.out.println(p);
        return;
    }

    if (!maze[r][c]) {
        return;
    }

    // I am considering this block in my path
    maze[r][c] = false; // Mark visited

    if (r < maze.length - 1) {
        allPaths(p + "D", maze, r + 1, c);
    }

    if (c < maze[0].length - 1) {
        allPaths(p + "R", maze, r, c + 1);
    }

    if (r > 0) {
        allPaths(p + "U", maze, r - 1, c);
    }

    if (c > 0) {
        allPaths(p + "L", maze, r, c - 1);
    }

    // this is the line where the function will be over
    // so before the function gets removed, also remove the changes that were made by that function
    maze[r][c] = true; // Backtrack
}`,
        timeComplexity: 'O(4^(N*M))',
        spaceComplexity: 'O(N*M)'
    },
    {
        id: 'q06',
        number: 'Q-06',
        title: 'Print Matrix and Paths',
        difficulty: 'hard',
        statement: 'Print the matrix showing the step number for the path taken.',
        approach: [
            'Maintain a path array (int[][] path) initialized to 0.',
            'Pass a "step" counter in the recursion.',
            'path[r][c] = step.',
            'When printing, print the path array.',
            'Backtrack: path[r][c] = 0.'
        ],
        code: `public void allPathsPrint(String p, boolean[][] maze, int r, int c, int[][] path, int step) {
    if (r == maze.length - 1 && c == maze[0].length - 1) {
        path[r][c] = step;
        for(int[] arr : path) {
            System.out.println(Arrays.toString(arr));
        }
        System.out.println(p);
        System.out.println();
        return;
    }

    if (!maze[r][c]) {
        return;
    }

    maze[r][c] = false;
    path[r][c] = step;

    if (r < maze.length - 1) {
        allPathsPrint(p + "D", maze, r + 1, c, path, step + 1);
    }

    if (c < maze[0].length - 1) {
        allPathsPrint(p + "R", maze, r, c + 1, path, step + 1);
    }

    if (r > 0) {
        allPathsPrint(p + "U", maze, r - 1, c, path, step + 1);
    }

    if (c > 0) {
        allPathsPrint(p + "L", maze, r, c - 1, path, step + 1);
    }

    maze[r][c] = true;
    path[r][c] = 0;
}`,
        timeComplexity: 'O(4^(N*M))',
        spaceComplexity: 'O(N*M)'
    }
];

function renderBTProblems() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    btProblems.forEach(problem => {
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

    addBTSummarySections();

    if (window.Prism) {
        Prism.highlightAll();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function addBTSummarySections() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML += `
        <section class="summary-section">
            <h2>Key Patterns & Techniques</h2>
            
            <div class="pattern-grid">
                <div class="pattern-card">
                    <h3>🔄 The Backtracking Template</h3>
                    <p>Standard structure for all backtracking problems</p>
                    <ul>
                        <li><strong>Choose:</strong> Make a choice (add to path)</li>
                        <li><strong>Explore:</strong> Recurse to next state</li>
                        <li><strong>Un-Choose:</strong> Backtrack (remove from path)</li>
                    </ul>
                </div>

                <div class="pattern-card">
                    <h3>🚫 Pruning</h3>
                    <p>Stopping early to save time</p>
                    <ul>
                        <li>Base cases (out of bounds)</li>
                        <li>Invalid states (obstacles)</li>
                        <li>Visited checks (cycles)</li>
                    </ul>
                </div>

                <div class="pattern-card">
                    <h3>🗺️ Direction Arrays</h3>
                    <p>Clean way to explore neighbors</p>
                    <div class="code-block" style="margin-top: 0.5rem; font-size: 0.8rem;">
                        int[] dr = {1, 0, -1, 0};<br>
                        int[] dc = {0, 1, 0, -1};
                    </div>
                </div>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', renderBTProblems);
