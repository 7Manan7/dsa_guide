const treeProblems = [
    {
        id: 'q01',
        number: 'Q-01',
        title: 'Maximum Depth',
        difficulty: 'easy',
        statement: 'Find the maximum depth (height) of a binary tree. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
        approach: [
            '<strong>Base Case:</strong> If root is null, depth is 0.',
            '<strong>Recursive Step:</strong> 1 + max(depth(left), depth(right)).'
        ],
        code: `public int maxDepth(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int left = maxDepth(root.left);
    int right = maxDepth(root.right);
    
    return 1 + Math.max(left, right);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(H) (Height)'
    },
    {
        id: 'q02',
        number: 'Q-02',
        title: 'Invert Binary Tree',
        difficulty: 'easy',
        statement: 'Invert a binary tree (mirror image).',
        approach: [
            'Swap the left and right children of the current node.',
            'Recursively invert the left subtree.',
            'Recursively invert the right subtree.'
        ],
        code: `public TreeNode invertTree(TreeNode root) {
    if (root == null) {
        return null;
    }
    
    // Swap
    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(H)'
    },
    {
        id: 'q03',
        number: 'Q-03',
        title: 'Same Tree',
        difficulty: 'easy',
        statement: 'Check if two binary trees are identical (same structure and same values).',
        approach: [
            'If both are null, true.',
            'If one is null (and other isn\'t), false.',
            'If values differ, false.',
            'Recurse: isSame(p.left, q.left) && isSame(p.right, q.right).'
        ],
        code: `public boolean isSameTree(TreeNode p, TreeNode q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.val != q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(H)'
    },
    {
        id: 'q04',
        number: 'Q-04',
        title: 'Level Order Traversal',
        difficulty: 'medium',
        statement: 'Return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
        approach: [
            'Use a Queue (BFS).',
            'Add root to queue.',
            'While queue is not empty:',
            '1. Get current size of queue (nodes at current level).',
            '2. Process that many nodes, adding their children to the queue.'
        ],
        code: `public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();
    if (root == null) return res;
    
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    
    while (!q.isEmpty()) {
        int size = q.size();
        List<Integer> level = new ArrayList<>();
        
        for (int i = 0; i < size; i++) {
            TreeNode node = q.poll();
            level.add(node.val);
            
            if (node.left != null) q.add(node.left);
            if (node.right != null) q.add(node.right);
        }
        res.add(level);
    }
    return res;
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q05',
        number: 'Q-05',
        title: 'Lowest Common Ancestor',
        difficulty: 'medium',
        statement: 'Find the lowest common ancestor (LCA) of two given nodes in the tree.',
        approach: [
            'If root is null or root matches either p or q, return root.',
            'Recurse left and right.',
            'If both left and right return non-null, root is the LCA.',
            'Otherwise return the non-null child.'
        ],
        code: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) {
        return root;
    }
    
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    
    if (left != null && right != null) {
        return root;
    }
    
    return left != null ? left : right;
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(H)'
    },
    {
        id: 'q06',
        number: 'Q-06',
        title: 'Validate BST',
        difficulty: 'medium',
        statement: 'Determine if a binary tree is a valid Binary Search Tree (BST).',
        approach: [
            'Pass a range (min, max) down the recursion.',
            'Root value must be > min and < max.',
            'Recurse left with (min, root.val).',
            'Recurse right with (root.val, max).'
        ],
        code: `public boolean isValidBST(TreeNode root) {
    return validate(root, null, null);
}

private boolean validate(TreeNode node, Integer min, Integer max) {
    if (node == null) return true;
    
    if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
        return false;
    }
    
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(H)'
    }
];

function renderTreeProblems() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    treeProblems.forEach(problem => {
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

document.addEventListener('DOMContentLoaded', renderTreeProblems);
