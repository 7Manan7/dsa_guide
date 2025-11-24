const courseTopics = [
    {
        id: 1,
        title: "Introduction",
        content: `
            <h4>What is a Tree?</h4>
            <p>A Tree is a hierarchical data structure consisting of nodes connected by edges.</p>
            <p><strong>Key Terms:</strong></p>
            <ul>
                <li><strong>Root:</strong> The topmost node.</li>
                <li><strong>Child:</strong> A node directly connected to another node when moving away from the Root.</li>
                <li><strong>Leaf:</strong> A node with no children.</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Binary Trees",
        content: `
            <h4>The Most Common Type</h4>
            <p>A <strong>Binary Tree</strong> is a tree where each node has at most two children: Left and Right.</p>
            <p><strong>Binary Search Tree (BST):</strong> A special binary tree where:</p>
            <ul>
                <li>Left child < Parent</li>
                <li>Right child > Parent</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Traversals",
        content: `
            <h4>Visiting Every Node</h4>
            <p>Unlike arrays, there's no single way to iterate.</p>
            <ul>
                <li><strong>Inorder (DFS):</strong> Left -> Root -> Right</li>
                <li><strong>Preorder (DFS):</strong> Root -> Left -> Right</li>
                <li><strong>Postorder (DFS):</strong> Left -> Right -> Root</li>
                <li><strong>Level Order (BFS):</strong> Level by level, left to right.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Tree Properties",
        content: `
            <h4>Measuring Trees</h4>
            <ul>
                <li><strong>Height:</strong> Number of edges from the node to the deepest leaf.</li>
                <li><strong>Depth:</strong> Number of edges from the root to the node.</li>
                <li><strong>Diameter:</strong> The longest path between any two nodes in the tree.</li>
            </ul>
        `
    }
];
