#include <stdio.h>
#include <stdbool.h>

#define N 9

// Function to print the Sudoku grid
void printGrid(int grid[N][N]) {
    for (int row = 0; row < N; row++) {
        for (int col = 0; col < N; col++) {
            printf("%2d", grid[row][col]);
        }
        printf("\n");
    }
}

// Function to check if a number can be placed in the specified position
bool isSafe(int grid[N][N], int row, int col, int num) {
    // Check if the number is already present in the current row or column
    for (int x = 0; x < N; x++) {
        if (grid[row][x] == num || grid[x][col] == num) {
            return false;
        }
    }
    
    // Check if the number is already present in the current 3x3 subgrid
    int startRow = row - row % 3;
    int startCol = col - col % 3;
    for (int r = 0; r < 3; r++) {
        for (int c = 0; c < 3; c++) {
            if (grid[r + startRow][c + startCol] == num) {
                return false;
            }
        }
    }
    
    return true; // If no conflicts, the number can be placed
}

// Function to solve Sudoku using backtracking
bool solveSudoku(int grid[N][N]) {
    int row, col;
    
    // Find the first empty cell in the grid (value 0 represents empty cell)
    bool foundEmpty = false;
    for (row = 0; row < N; row++) {
        for (col = 0; col < N; col++) {
            if (grid[row][col] == 0) {
                foundEmpty = true;
                break;
            }
        }
        if (foundEmpty) {
            break;
        }
    }
    
    // If no empty cell is found, puzzle is solved
    if (!foundEmpty) {
        return true;
    }
    
    // Try numbers 1-9 in the empty cell
    for (int num = 1; num <= 9; num++) {
        // Check if num can be placed in the current position
        if (isSafe(grid, row, col, num)) {
            // Place num in the current position
            grid[row][col] = num;
            
            // Recursively solve the rest of the puzzle
            if (solveSudoku(grid)) {
                return true; // If successful, return true
            }
            
            // If placing num doesn't lead to a solution, backtrack
            grid[row][col] = 0;
        }
    }
    
    return false; // No number can be placed, puzzle is unsolvable
}

// Main function to test the Sudoku solver
int main() {
    int grid[N][N] = {
        {5, 3, 0, 0, 7, 0, 0, 0, 0},
        {6, 0, 0, 1, 9, 5, 0, 0, 0},
        {0, 9, 8, 0, 0, 0, 0, 6, 0},
        {8, 0, 0, 0, 6, 0, 0, 0, 3},
        {4, 0, 0, 8, 0, 3, 0, 0, 1},
        {7, 0, 0, 0, 2, 0, 0, 0, 6},
        {0, 6, 0, 0, 0, 0, 2, 8, 0},
        {0, 0, 0, 4, 1, 9, 0, 0, 5},
        {0, 0, 0, 0, 8, 0, 0, 7, 9}
    };
    
    printf("Sudoku grid to solve:\n");
    printGrid(grid);
    
    if (solveSudoku(grid)) {
        printf("\nSolution:\n");
        printGrid(grid);
    } else {
        printf("\nNo solution exists.\n");
    }
    
    return 0;
}
