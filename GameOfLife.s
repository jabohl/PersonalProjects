Each cell can be 1 or 0.
cell's status is determined by its neighbors.
If a cell has fewer than two live neighbors, it dies.
If two or three live neighbors, it lives on to the next generation.
If more than three live neighbors, it dies.
If a dead cell has exactly three live neighbors, it becomes alive.


pseudocode:
# Initialize the grid and cells
grid = [[0 for i in range(n) if i % 2 == 0] for i in range(n)]
cells = [Cell(cell) for cell in grid]
for cell in cells:
if cell.neighbors(cell):
cell.next = cell
else:
cell.next = cell.neighbors(cell)
