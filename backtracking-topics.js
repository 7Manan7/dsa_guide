const courseTopics = [
    {
        id: 1,
        title: "Introduction",
        content: `
            <h4>What is Backtracking?</h4>
            <p>Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time.</p>
            <p><strong>The Core Idea:</strong> "If the current path is wrong, go back (backtrack) and try another path."</p>
            <p>It's like finding your way through a maze: if you hit a dead end, you turn around and go back to the last junction to try a different route.</p>
        `
    },
    {
        id: 2,
        title: "Recursion vs Backtracking",
        content: `
            <h4>The Difference</h4>
            <p><strong>Recursion</strong> is the mechanism (function calling itself).<br>
            <strong>Backtracking</strong> is the strategy (using recursion to explore and un-explore).</p>
            <p>In pure recursion, we usually just go deeper. In backtracking, we explicitly <strong>undo</strong> our changes (the "backtrack" step) after returning from a recursive call, so the state is clean for the next branch.</p>
        `
    },
    {
        id: 3,
        title: "Maze Problems",
        content: `
            <h4>The Classic Grid Problem</h4>
            <p>Maze problems are the "Hello World" of backtracking.</p>
            <p><strong>Goal:</strong> Move from Source (0,0) to Destination (N-1, M-1).</p>
            <p><strong>Constraints:</strong></p>
            <ul>
                <li>Boundary Checks: Don't go off the grid.</li>
                <li>Obstacles: Don't step on walls.</li>
                <li>Visited: Don't go in circles (mark cells as visited).</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Direction Vectors",
        content: `
            <h4>Coding Movement Cleanly</h4>
            <p>Instead of writing 4 separate \`if\` statements for Up, Down, Left, Right, we use arrays.</p>
            <div class="code-block">
                int[] dr = {-1, 1, 0, 0}; // Row changes (Up, Down)
                int[] dc = {0, 0, -1, 1}; // Col changes (Left, Right)
                
                for(int i=0; i<4; i++) {
                    int newR = r + dr[i];
                    int newC = c + dc[i];
                    // recurse(newR, newC)...
                }
            </div>
            <p>This makes code scalable to 8 directions (including diagonals) easily.</p>
        `
    },
    {
        id: 5,
        title: "Pruning",
        content: `
            <h4>Optimization</h4>
            <p><strong>Pruning</strong> means cutting off a branch of the recursion tree early because we know it won't lead to a solution.</p>
            <p>Examples:</p>
            <ul>
                <li>"If current path length > best found so far, stop."</li>
                <li>"If we stepped on a landmine, stop."</li>
            </ul>
            <p>This transforms a brute-force solution into a smarter one.</p>
        `
    },
    {
        id: 6,
        title: "Complexity Analysis",
        content: `
            <h4>Time & Space</h4>
            <p><strong>Time Complexity:</strong> Usually Exponential, O(b^d), where 'b' is the branching factor (e.g., 4 directions) and 'd' is depth (path length).</p>
            <p><strong>Space Complexity:</strong> O(d) for the recursion stack.</p>
            <p>Backtracking is expensive! It's often used when N is small (e.g., N-Queens, Sudoku, Grid size < 20).</p>
        `
    }
];
