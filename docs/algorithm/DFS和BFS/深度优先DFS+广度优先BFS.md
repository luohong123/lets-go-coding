---
{ 'title': '深度优先 DFS+广度优先 BFS' }
---

# 深度优先搜索(Depth-First-Search)

## DFS 代码 - 递归写法

```python
visited = set()
def dfs(node, visited):
    visited.add(node)
    # process current node here.
    ...
    for next_node in node.children():
        if not next_node in visited:
            dfs(next_node, visited)
```

## DFS 代码 - 非递归写法

```python
def DFS(self, tree):
    if tree.root is None:
        return []
    visited, stack = [], [tree.root]

    while stack:
        node = stack.pop()
        visited.add(node)

        process(node)
        node = generate_related_nodes(node)
        stack.push(nodes)

    # other processiong work
    ...
```

# 广度优先搜索(Breadth-First-Search)

在树(图/状态集)中寻找特定节点

## BFS 代码

```python
def BFS(graph, start, end):
    queue = []
    queue.append([start])
    visited.add(start)

    while queue:
        node = queue.pop()
        visited.add(node)

        process(node)
        nodes = generate_related_nodes(node)
        queue.push(nodes)
    # other procesing work
    ...
```

# 实战题⽬

1. https://leetcode.com/problems/binary-tree-level-order-traversal/
2. https://leetcode.com/problems/maximum-depth-of-binary-tree/
3. https://leetcode.com/problems/minimum-depth-of-binary-tree/description/ 4. https://leetcode.com/problems/generate-parentheses/
