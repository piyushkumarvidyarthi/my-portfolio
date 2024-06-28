#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define GRID_SIZE 5  // Size of the crossword grid (assuming a square grid)
#define MAX_WORDS 10 // Maximum number of words to place

char grid[GRID_SIZE][GRID_SIZE]; // The crossword grid
char words[MAX_WORDS][GRID_SIZE + 1]; // Array to store the words (one word per row)

// Function to print the crossword grid
void printGrid() {
    printf("Crossword Grid:\n");
    for (int i = 0; i < GRID_SIZE; i++) {
        for (int j = 0; j < GRID_SIZE; j++) {
            printf("%c ", grid[i][j]);
        }
        printf("\n");
    }
}

// Function to check if a word can be placed horizontally
bool canPlaceHorizontal(char word[], int row, int col) {
    int len = strlen(word);
    // Check if the word fits in the grid horizontally starting from (row, col)
    if (col + len > GRID_SIZE) {
        return false;
    }
    // Check if there are conflicts with existing letters in the grid
    for (int i = 0; i < len; i++) {
        if (grid[row][col + i] != '-' && grid[row][col + i] != word[i]) {
            return false;
        }
    }
    return true;
}

// Function to place a word horizontally
void placeHorizontal(char word[], int row, int col) {
    int len = strlen(word);
    for (int i = 0; i < len; i++) {
        grid[row][col + i] = word[i];
    }
}

// Function to check if a word can be placed vertically
bool canPlaceVertical(char word[], int row, int col) {
    int len = strlen(word);
    // Check if the word fits in the grid vertically starting from (row, col)
    if (row + len > GRID_SIZE) {
        return false;
    }
    // Check if there are conflicts with existing letters in the grid
    for (int i = 0; i < len; i++) {
        if (grid[row + i][col] != '-' && grid[row + i][col] != word[i]) {
            return false;
        }
    }
    return true;
}

// Function to place a word vertically
void placeVertical(char word[], int row, int col) {
    int len = strlen(word);
    for (int i = 0; i < len; i++) {
        grid[row + i][col] = word[i];
    }
}

// Function to solve the crossword puzzle using backtracking
bool solveCrossword(int index) {
    if (index == MAX_WORDS) {
        // All words have been placed successfully
        return true;
    }

    // Try to place the current word horizontally and vertically
    for (int row = 0; row < GRID_SIZE; row++) {
        for (int col = 0; col < GRID_SIZE; col++) {
            if (canPlaceHorizontal(words[index], row, col)) {
                placeHorizontal(words[index], row, col);
                if (solveCrossword(index + 1)) {
                    return true;
                }
                // Backtrack
                placeHorizontal("-----", row, col); // Clear the placed word
            }
            if (canPlaceVertical(words[index], row, col)) {
                placeVertical(words[index], row, col);
                if (solveCrossword(index + 1)) {
                    return true;
                }
                // Backtrack
                placeVertical("-----", row, col); // Clear the placed word
            }
        }
    }

    return false;
}

// Main function to test the crossword solver
int main() {
    // Example words to place in the crossword (assuming 5x5 grid for simplicity)
    strcpy(words[0], "HELLO");
    strcpy(words[1], "WORLD");
    strcpy(words[2], "APPLE");
    strcpy(words[3], "MANGO");

    // Initialize the crossword grid with '-'
    for (int i = 0; i < GRID_SIZE; i++) {
        for (int j = 0; j < GRID_SIZE; j++) {
            grid[i][j] = '-';
        }
    }

    if (solveCrossword(0)) {
        printf("Crossword solved successfully!\n");
        printGrid();
    } else {
        printf("No solution found.\n");
    }

    return 0;
}
