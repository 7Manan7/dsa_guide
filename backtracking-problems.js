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
        code: `import java.util.*;

public class PrintPaths {

	/**
	 * Recursively finds and prints all paths from cell (r, c) to (1, 1).
	 * Movement is restricted to reducing the row (D) or reducing the column (R).
	 * * @param str The path built so far (using 'D' for Down/r-1, 'R' for Right/c-1).
	 * @param r   The current row index (target is r=1).
	 * @param c   The current column index (target is c=1).
	 */
	public static void printPath(StringBuilder str, int r, int c) {

		// Base Case: If the target cell (1, 1) is reached.
		if (r == 1 && c == 1) {
			// A valid path has been found, so print the accumulated string.
			System.out.println(str.toString());
			return; // Stop the recursion for this path.
		}

		// 1. Try moving 'Down' (to r-1, c) if possible.
		if (r > 1) {
			// A. DO: Append 'D' to the current path string.
			str.append("D");
			
			// B. RECURSE: Make the recursive call to the next cell.
			printPath(str, r - 1, c);
			
			// C. UNDO (Backtrack): Remove the last character ('D') from the string.
			// This is essential to explore other branches (e.g., trying 'R' next).
			str.deleteCharAt(str.length() - 1);
		}

		// 2. Try moving 'Right' (to r, c-1) if possible.
		if (c > 1) {
			// A. DO: Append 'R' to the current path string.
			str.append("R");
			
			// B. RECURSE: Make the recursive call to the next cell.
			printPath(str, r, c - 1);
			
			// C. UNDO (Backtrack): Remove the last character ('R') from the string.
			// The path string is now restored to its state before the 'R' move.
			str.deleteCharAt(str.length() - 1);
		}
	}

	// -------------------------------------------------------------
	
	public static void main(String[] args) {
		// Initialize an empty StringBuilder to store the path.
		StringBuilder str = new StringBuilder();
		
		// Call the function to find all paths from a 3x3 grid's starting corner (3, 3) 
		// to the ending corner (1, 1).
		// For a 3x3 grid, there are (2+2)! / (2! * 2!) = 6 unique paths.
		System.out.println("Finding all paths from (3, 3) to (1, 1) [R=Right, D=Down]:\n");
		printPath(str, 3, 3);
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
        code: `public class printPathsDiagonal {

	/**
	 * Recursively finds and prints all paths from cell (r, c) to (1, 1) in a grid.
	 * Movement is allowed in three directions: Diagonal (D), Vertical (V), and Horizontal (H).
	 * * @param str The path built so far (using 'D', 'V', or 'H').
	 * @param r   The current row index (target is r=1).
	 * @param c   The current column index (target is c=1).
	 */
	public static void printPathDiagonal(StringBuilder str, int r, int c) {

		// Base Case: If the target cell (1, 1) is reached.
		if (r == 1 && c == 1) {
			// A valid path has been found, so print the accumulated string.
			System.out.println(str.toString());
			return; // Stop the recursion for this path.
		}

		// 1. Try moving Diagonal (D) (to r-1, c-1) if possible.
		// Requires both row and column to be greater than 1.
		if (r > 1 && c > 1) {
			// A. DO: Append 'D' to the current path string.
			str.append("D");
			
			// B. RECURSE: Make the recursive call to the next cell.
			printPathDiagonal(str, r - 1, c - 1);
			
			// C. UNDO (Backtrack): Remove the last character ('D') to reset the string 
			// for exploring the next direction (Vertical).
			str.deleteCharAt(str.length() - 1);
		}

		// 2. Try moving Vertical (V) (to r-1, c) if possible.
		// Requires only the row to be greater than 1.
		if (r > 1) {
			// A. DO: Append 'V' to the current path string.
			str.append("V");
			
			// B. RECURSE: Make the recursive call to the next cell.
			printPathDiagonal(str, r - 1, c);
			
			// C. UNDO (Backtrack): Remove the last character ('V').
			str.deleteCharAt(str.length() - 1);
		}

		// 3. Try moving Horizontal (H) (to r, c-1) if possible.
		// Requires only the column to be greater than 1.
		if (c > 1) {
			// A. DO: Append 'H' to the current path string.
			str.append("H");
			
			// B. RECURSE: Make the recursive call to the next cell.
			printPathDiagonal(str, r, c - 1);
			
			// C. UNDO (Backtrack): Remove the last character ('H').
			str.deleteCharAt(str.length() - 1);
		}
	}
    
    // -------------------------------------------------------------

	public static void main(String[] args) {
		// Initialize an empty StringBuilder to store the path.
		StringBuilder str = new StringBuilder();
		
		// Call the function to find all paths from a 3x3 grid's corner (3, 3) 
		// to the ending corner (1, 1) using D, V, and H movements.
		System.out.println("Finding all paths from (3, 3) to (1, 1) [D=Diagonal, V=Vertical, H=Horizontal]:\n");
		printPathDiagonal(str, 3, 3);
	}
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
        code: `import java.util.*;

public class PathsWithRestrictions {

	/**
	 * Recursively finds and prints all valid paths from cell (r, c) to the bottom-right corner.
	 * Movement is restricted to Down (D) and Right (R), and avoids cells marked with '0' (obstacles).
	 * * @param str The path built so far (using 'D' for Down, 'R' for Right).
	 * @param grid The grid representing the maze (1 = free, 0 = obstacle).
	 * @param r The current row index.
	 * @param c The current column index.
	 */
	public static void printPathWithRestrictions(StringBuilder str, int grid[][], int r, int c) {

		// Base Case 1: Target Reached
		// If the current cell is the bottom-right corner, a valid path has been found.
		if (r == grid.length - 1 && c == grid[0].length - 1) {
			System.out.println(str.toString());
			return; // Stop the recursion for this successful path.
		}

		// Base Case 2: Obstacle Check
		// If the current cell is an obstacle (value 0), stop this path immediately.
		if (grid[r][c] == 0) {
			return;
		}

		// 1. Try moving Down (D) (to r+1, c) if possible.
		// Check if the next row index is within the grid bounds.
		if (r < grid.length - 1) {
			// A. DO: Append 'D' to the current path string.
			str.append("D");
			
			// B. RECURSE: Make the recursive call to the next cell.
			printPathWithRestrictions(str, grid, r + 1, c);
			
			// C. UNDO (Backtrack): Remove the last character ('D') from the string.
			// This is essential to explore the alternative path (Right).
			str.deleteCharAt(str.length() - 1);
		}

		// 2. Try moving Right (R) (to r, c+1) if possible.
		// Check if the next column index is within the grid bounds.
		if (c < grid[0].length - 1) {
			// A. DO: Append 'R' to the current path string.
			str.append("R");
			
			// B. RECURSE: Make the recursive call to the next cell.
			printPathWithRestrictions(str, grid, r, c + 1);
			
			// C. UNDO (Backtrack): Remove the last character ('R').
			str.deleteCharAt(str.length() - 1);
		}
	}

	// -------------------------------------------------------------

	public static void main(String[] args) {

		// Define the 3x3 grid (Maze):
		// { { 1, 1, 1 }, 
		//   { 1, 0, 1 },  <-- (1, 1) is an obstacle (0)
		//   { 1, 1, 1 } }
		int[][] grid = { { 1, 1, 1 }, { 1, 0, 1 }, { 1, 1, 1 } };
		
		// Starting cell: (0, 0)
		// Ending cell: (2, 2)
		System.out.println("Finding paths in the 3x3 maze (0,0) to (2,2) with obstacle at (1,1):");
		
		// Initialize an empty StringBuilder for the path.
		StringBuilder str = new StringBuilder();
		
		// Start the pathfinding from (0, 0).
		printPathWithRestrictions(str, grid, 0, 0);
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
        code: `public class PathsAllDirection {

    /**
     * Finds and prints all non-cyclic paths from cell (r, c) to the bottom-right corner 
     * using the full four cardinal directions (D, R, U, L).
     * This method uses a 'visited' matrix to prevent revisiting cells in the same path.
     * * @param str The path built so far (uses D, R, U, L).
     * @param grid The maze grid (1 = free, 0 = obstacle).
     * @param visited A matrix tracking visited cells (1 = visited, 0 = unvisited) in the current path.
     * @param r The current row index.
     * @param c The current column index.
     */
    public static void printPathWithRestrictions(StringBuilder str, int[][] grid, int[][] visited, int r, int c) {

        int R_MAX = grid.length;
        int C_MAX = grid[0].length;

        // --- 1. Base Case: Invalid Move (Bounds, Obstacle, or Already Visited) ---
        
        // Check if the current cell (r, c) is out of bounds (Safety check).
        if (r < 0 || r >= R_MAX || c < 0 || c >= C_MAX) {
            return;
        }

        // Check if the current cell is an obstacle (0).
        if (grid[r][c] == 0) {
            return;
        }

        // Check if the current cell has already been visited in THIS path (Cycle prevention).
        if (visited[r][c] == 1) {
            return;
        }

        // --- 2. Base Case: Target Reached ---
        // If the current cell is the bottom-right corner, a valid path has been found.
        if (r == R_MAX - 1 && c == C_MAX - 1) {
            System.out.println(str.toString());
            // Since the final unmarking (Step 5) handles the cleanup, we can safely return here.
            return; 
        }

        // --- 3. DO: Mark Cell as Visited ---
        // Mark the current cell as visited to prevent immediate cycles (e.g., D then U).
        visited[r][c] = 1;

        // --- 4. RECURSE: Explore All Directions (Backtracking) ---
        
        // Explore Down (D): Move to (r + 1, c)
        str.append("D");
        printPathWithRestrictions(str, grid, visited, r + 1, c);
        // UNDO (Backtrack): Remove 'D' from the path string before exploring the next direction.
        str.deleteCharAt(str.length() - 1); 

        // Explore Right (R): Move to (r, c + 1)
        str.append("R");
        printPathWithRestrictions(str, grid, visited, r, c + 1);
        // UNDO (Backtrack): Remove 'R'.
        str.deleteCharAt(str.length() - 1); 

        // Explore Up (U): Move to (r - 1, c)
        str.append("U");
        printPathWithRestrictions(str, grid, visited, r - 1, c);
        // UNDO (Backtrack): Remove 'U'.
        str.deleteCharAt(str.length() - 1); 

        // Explore Left (L): Move to (r, c - 1)
        str.append("L");
        printPathWithRestrictions(str, grid, visited, r, c - 1);
        // UNDO (Backtrack): Remove 'L'.
        str.deleteCharAt(str.length() - 1); 

        // --- 5. UNDO (Backtrack): Unmark Cell ---
        // After ALL four recursive calls return, unmark the cell. 
        // This makes the cell available for other, completely separate paths
        // that may pass through this cell later. This is the core of backtracking.
        visited[r][c] = 0;
    }

    // -------------------------------------------------------------
    
    public static void main(String[] args) {
        // Define the 3x3 grid (Maze): all cells are free (1).
        // Start: (0, 0), End: (2, 2)
        int[][] grid = { 
            { 1, 1, 1 }, 
            { 1, 1, 1 }, 
            { 1, 1, 1 } 
        };

        // Initialize the 'visited' matrix, representing the initial state where no cell has been visited.
        int[][] visited = { { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 } };
        
        // Initialize an empty StringBuilder for the path.
        StringBuilder str = new StringBuilder();
        
        System.out.println("Finding all non-cyclic paths from (0, 0) to (2, 2) in a 3x3 grid (D, R, U, L):\n");
        
        // Start the pathfinding process from (0, 0).
        printPathWithRestrictions(str, grid, visited, 0, 0);
    }
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
        code: `import java.util.*;

import java.util.Arrays;

public class AllPathsBacktracking {

    /**
     * Finds and prints all possible paths from (0, 0) to the bottom-right corner 
     * of the maze using Depth-First Search (DFS) and Backtracking.
     * * @param p The current path string (e.g., "DRRUDL").
     * @param maze The boolean grid where 'true' means open/unvisited and 'false' means blocked/visited.
     * @param r The current row index.
     * @param c The current column index.
     * @param path The integer grid to record the step number for the current path.
     * @param step The current step number in the path.
     */
    static void allPathPrint(String p, boolean[][] maze, int r, int c, int[][] path, int step) {
        
        // --- Base Case: Target Reached ---
        if (r == maze.length - 1 && c == maze[0].length - 1) {
            path[r][c] = step; // Mark the final step
            
            System.out.println("Path Found: " + p);
            for(int[] arr : path) {
                System.out.println(Arrays.toString(arr));
            }
            System.out.println("---");
            return;
        }

        // --- Base Case: Invalid Cell ---
        // Checks if the current cell is outside the maze or has already been visited (marked as false).
        if (!maze[r][c]) {
            return;
        }

        // --- Recursive Step: Mark, Recurse, Unmark (Backtracking) ---
        
        // 1. Mark the current cell as visited for the current path
        maze[r][c] = false;
        path[r][c] = step;

        // Explore Down (D)
        if (r < maze.length - 1) {
            allPathPrint(p + 'D', maze, r + 1, c, path, step + 1);
        }

        // Explore Right (R)
        if (c < maze[0].length - 1) {
            allPathPrint(p + 'R', maze, r, c + 1, path, step + 1);
        }

        // Explore Up (U)
        if (r > 0) {
            allPathPrint(p + 'U', maze, r - 1, c, path, step + 1);
        }

        // Explore Left (L)
        if (c > 0) {
            allPathPrint(p + 'L', maze, r, c - 1, path, step + 1);
        }

        // 2. Backtrack: Reset the state for other potential paths
        // This is done after ALL recursive calls from (r, c) have returned.
        maze[r][c] = true; // Unmark as visited
        path[r][c] = 0;   // Reset step number
    }

    //-------------------------------------------------------------------------
    
    ## 🎯 Main Method and Execution
    
    public static void main(String[] args) {
        // Define the maze dimensions (e.g., 3x3)
        int R = 3;
        int C = 3;

        // Initialize the maze: all cells are initially open (true).
        // This boolean array also acts as the 'visited' tracker.
        boolean[][] maze = {
            {true, true, true},
            {true, true, true},
            {true, true, true}
        };

        // Initialize the path grid: used to store the step count of the current path.
        // It's initialized to all 0s.
        int[][] path = new int[R][C];

        System.out.println("Starting Pathfinding (DFS Backtracking)...");
        
        // Start the search from (0, 0) with an empty path string and step 1.
        allPathPrint("", maze, 0, 0, path, 1);
    }
}`,
        timeComplexity: 'O(4^(N*M))',
        spaceComplexity: 'O(N*M)'
    },
    {
        id: 'q07',
        number: 'Q-07',
        title: 'N-Queens Problem',
        difficulty: 'hard',
        statement: 'Place N Queens on an NxN chessboard such that no two queens attack each other. (No two queens share the same row, column, or diagonal).',
        approach: [
            '<strong>Choice:</strong> Place a queen in the current row.',
            '<strong>Constraint:</strong> Check if the column or diagonals are under attack.',
            '<strong>Recurse:</strong> Move to the next row.',
            '<strong>Backtrack:</strong> Remove the queen and try the next column.'
        ],
        code: `import java.util.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class NQueens {

	/**
	 * Finds all distinct solutions to the N-Queens puzzle.
	 * 
	 * @param n The size of the board (N x N).
	 * @return A list of all valid board configurations.
	 */
	public List<List<String>> solveNQueens(int n) {
		List<List<String>> res = new ArrayList<>();
		char[][] board = new char[n][n];

		// Initialize the board with '.' (empty cells)
		for (int i = 0; i < n; i++)
			Arrays.fill(board[i], '.');

		// Array to track if a column is occupied (N columns: 0 to N-1)
		boolean[] cols = new boolean[n];

		// Array to track if a main diagonal (r + c = constant) is occupied.
		// Size is 2*N because the sum (r + c) ranges from 0 to 2*(N-1).
		boolean[] diag1 = new boolean[2 * n]; // Main Diagonal: r + c

		// Array to track if an anti-diagonal (r - c = constant) is occupied.
		// Size is 2*N because the difference (r - c) ranges from -(N-1) to (N-1).
		// We shift the index by +N to ensure it's non-negative.
		boolean[] diag2 = new boolean[2 * n]; // Anti-Diagonal: r - c + n

		// Start the backtracking process from the first row (row 0)
		backtrack(0, n, board, cols, diag1, diag2, res);
		return res;
	}

	/**
	 * Recursive backtracking function to place queens row by row.
	 * 
	 * @param row   The current row being considered.
	 * @param n     The board size.
	 * @param board The current state of the board.
	 * @param cols  Array tracking occupied columns.
	 * @param d1    Array tracking occupied main diagonals (r + c).
	 * @param d2    Array tracking occupied anti-diagonals (r - c + n).
	 * @param res   The list to store valid solutions.
	 */
	private void backtrack(int row, int n, char[][] board, boolean[] cols, boolean[] d1, boolean[] d2,
			List<List<String>> res) {

		// --- Base Case: All Queens Placed Successfully ---
		if (row == n) {
			List<String> solution = new ArrayList<>();
			// Convert the char[][] board into a List<String> format
			for (int i = 0; i < n; i++)
				solution.add(new String(board[i]));
			res.add(solution);
			return;
		}

		// Iterate through every column in the current row
		for (int col = 0; col < n; col++) {
			// Calculate the unique indices for the two diagonals
			int id1 = row + col; // Index for main diagonal
			int id2 = row - col + n; // Index for anti-diagonal (shifted by n)

			// --- Conflict Check (O(1) lookup) ---
			// If the column OR the main diagonal OR the anti-diagonal is already occupied,
			// skip this position.
			if (cols[col] || d1[id1] || d2[id2]) {
				continue;
			}

			// --- Choose (Action: Place Queen) ---
			board[row][col] = 'Q'; // Place the Queen on the board
			cols[col] = true; // Mark the column as occupied
			d1[id1] = true; // Mark the main diagonal as occupied
			d2[id2] = true; // Mark the anti-diagonal as occupied

			// --- Recurse ---
			// Move to the next row (row + 1) to place the next queen
			backtrack(row + 1, n, board, cols, d1, d2, res);

			// --- Unchoose (Backtrack: Remove Queen) ---
			// After the recursive call returns, undo the changes to explore the next column
			// in the current row.
			board[row][col] = '.'; // Reset the cell to empty
			cols[col] = false; // Unmark the column
			d1[id1] = false; // Unmark the main diagonal
			d2[id2] = false; // Unmark the anti-diagonal
		}
	}

	// simple test
	public static void main(String[] args) {
		NQueens solver = new NQueens();
		// Prints the two valid solutions for N=4
		System.out.println(solver.solveNQueens(4));
	}
}`,
        timeComplexity: 'O(N!)',
        spaceComplexity: 'O(N^2)'
    },
    {
        id: 'q08',
        number: 'Q-08',
        title: 'N-Knights Problem',
        difficulty: 'hard',
        statement: 'Place N Knights on an NxN board such that no two knights attack each other.',
        approach: [
            'Similar to N-Queens, but the attack pattern is different (L-shape).',
            'We can iterate through all cells (row, col) and try to place a Knight.',
            'If placed, move to place the next Knight.',
            'Optimization: Pass (row, col) to avoid re-checking previous cells.'
        ],
        code: `public class NKnightsProblem {

    /**
     * Checks if placing a knight at (r, c) is safe from all previously placed knights.
     */
    private static boolean isSafe(int r, int c, int N, int[][] board) {
        // All 8 possible knight moves (dr, dc)
        int[] dr = {1, 1, -1, -1, 2, 2, -2, -2};
        int[] dc = {2, -2, 2, -2, 1, -1, 1, -1};

        for (int i = 0; i < 8; i++) {
            int newR = r + dr[i];
            int newC = c + dc[i];

            // Check if the attacked position is within the board boundaries
            if (newR >= 0 && newR < N && newC >= 0 && newC < N) {
                // If the attacked position already has a knight, it's NOT safe
                if (board[newR][newC] == 1) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Backtracking function to solve the N-Knights problem.
     */
    private static boolean solveNKnights(int N, int[][] board, int k, int r, int c) {
        // BASE CASE 1: All N knights have been successfully placed.
        if (k == 0) {
            printSolution(N, board);
            return true; // Found a solution
        }

        // Adjust coordinates for the next cell
        if (c >= N) {
            c = 0; 
            r++;
        }

        // BASE CASE 2: Board boundary check
        if (r >= N) {
            return false; // No more cells left to explore
        }

        // --- OPTION 1: Try placing the knight at (r, c) ---
        if (isSafe(r, c, N, board)) {
            board[r][c] = 1; // Place the knight
            
            // Recurse for the next cell (r, c+1) with one less knight (k-1)
            if (solveNKnights(N, board, k - 1, r, c + 1)) {
                return true;
            }
            
            // BACKTRACK: If the recursive call returns false, undo the move.
            board[r][c] = 0; 
        }

        // --- OPTION 2: DO NOT place the knight at (r, c) ---
        // Recurse for the next cell (r, c+1) with the same number of knights (k)
        if (solveNKnights(N, board, k, r, c + 1)) {
            return true;
        }

        return false;
    }

    /**
     * Prints the final board configuration. 'K' for Knight, '.' for empty.
     */
    private static void printSolution(int N, int[][] board) {
        System.out.println("--- Solution Found ---");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.print((board[i][j] == 1 ? "K" : ".") + " ");
            }
            System.out.println();
        }
        System.out.println("----------------------\n");
    }

    public static void main(String[] args) {
        int N = 4; // For a 4x4 board and 4 knights (N=4)
        int[][] board = new int[N][N];

        System.out.println("Attempting to solve N-Knights for N=" + N);

        if (!solveNKnights(N, board, N, 0, 0)) {
            System.out.println("Solution does not exist for N=" + N);
        }
    }
}
`,
        timeComplexity: 'O(2^(N*N))',
        spaceComplexity: 'O(N^2)'
    },
    {
        id: 'q09',
        number: 'Q-09',
        title: 'Sudoku Solver',
        difficulty: 'hard',
        statement: 'Write a program to solve a Sudoku puzzle by filling the empty cells.',
        approach: [
            'Find an empty cell (represented by 0 or \'.\').',
            'Try digits 1-9.',
            'Check if valid (Row, Col, 3x3 Subgrid).',
            'If valid, place digit and recurse.',
            'If recursion returns true, we found a solution.',
            'If not, backtrack (reset cell to empty) and try next digit.'
        ],
        code: `import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class SudokuSolver {

    /**
     * Solves the Sudoku puzzle in-place using a backtracking approach.
     * It initializes conflict tracking arrays and lists all empty cells first 
     * for optimized traversal.
     * @param board The 9x9 Sudoku board represented by a character array.
     */
    public void solveSudoku(char[][] board) {
        // [9][10] size: 9 rows/cols/boxes, and 10 columns to use indices 1 through 9 for numbers.
        boolean[][] rows = new boolean[9][10];
        boolean[][] cols = new boolean[9][10];
        boolean[][] boxes = new boolean[9][10];
        List<int[]> empties = new ArrayList<>(); // Stores the {row, col} of all '.' cells.

        // --- Initialization and Pre-processing ---
        // Iterate through the board to record pre-filled numbers and list empty cells.
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (board[r][c] == '.') {
                    // Collect coordinates of empty cells to fill later
                    empties.add(new int[]{r, c});
                } else {
                    // Record pre-filled numbers into the tracking arrays
                    int val = board[r][c] - '0';
                    // Calculate the box index (0-8): b = (row / 3) * 3 + (col / 3)
                    int b = (r / 3) * 3 + (c / 3);
                    
                    rows[r][val] = true;
                    cols[c][val] = true;
                    boxes[b][val] = true;
                }
            }
        }

        // Start the backtracking process on the first empty cell (index 0)
        backtrack(board, empties, 0, rows, cols, boxes);
    }

    /**
     * The recursive backtracking helper function.
     * @param board The Sudoku board.
     * @param empties List of empty cell coordinates to fill.
     * @param idx The index of the current empty cell being considered.
     * @return true if a solution is found from this state, false otherwise.
     */
    private boolean backtrack(char[][] board, List<int[]> empties, int idx, boolean[][] rows, boolean[][] cols, boolean[][] boxes) {
        // --- Base Case: Solved ---
        // If we have successfully tried to fill all empty cells, the puzzle is solved.
        if (idx == empties.size()) return true; 

        // Get coordinates and box index of the current empty cell
        int r = empties.get(idx)[0];
        int c = empties.get(idx)[1];
        int b = (r / 3) * 3 + (c / 3);

        // --- Recursive Step: Try numbers 1 through 9 ---
        for (int num = 1; num <= 9; num++) {
            // Check if placing 'num' at (r, c) is valid in O(1) time
            if (!rows[r][num] && !cols[c][num] && !boxes[b][num]) {
                
                // --- Choose (Action: Place Number) ---
                board[r][c] = (char) (num + '0'); // Update the board
                rows[r][num] = cols[c][num] = boxes[b][num] = true; // Update tracking arrays

                // --- Recurse ---
                // Try to solve the rest of the puzzle (next empty cell: idx + 1)
                if (backtrack(board, empties, idx + 1, rows, cols, boxes)) {
                    return true; // Propagate success up the stack
                }

                // --- Unchoose (Backtrack: Remove Number) ---
                // If the recursive call failed, undo the placement and try the next number
                board[r][c] = '.';
                rows[r][num] = cols[c][num] = boxes[b][num] = false;
            }
        }
        
        return false; // No number (1-9) worked for this cell, backtrack
    }

    // --- Helper to print the board neatly ---
    public static void printBoard(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                System.out.print(board[i][j] + " ");
                if ((j + 1) % 3 == 0 && j != 8) {
                    System.out.print("| ");
                }
            }
            System.out.println();
            if ((i + 1) % 3 == 0 && i != 8) {
                System.out.println("---------------------");
            }
        }
    }
    
    // --- Main Method ---
    public static void main(String[] args) {
        SudokuSolver solver = new SudokuSolver();
        
        // Example Unsolved Sudoku Board
        char[][] board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };

        System.out.println("--- Unsolved Board ---");
        printBoard(board);
        System.out.println("\nSolving...\n");

        // Solve the Sudoku in-place
        solver.solveSudoku(board);

        System.out.println("--- Solved Board ---");
        printBoard(board);
    }
}`,
        timeComplexity: 'O(9^M)',
        spaceComplexity: 'O(M)'
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
