# Isle of the Riddle Second - Scene 40

A moonlit beach scene featuring runic puzzles and an ancient tomb with hidden treasures.

## The Runic Puzzle Solution

If you're looking at the code to solve the runic puzzle, here's how to find the answer:

### Reading the Code

1. **Check `index.html` (lines 76-81)** - Each rune button has a `data-value` attribute:
   - ᚠ (Fehu) = 10
   - ᚱ (Raido) = 20
   - ᚢ (Uruz) = 5
   - ᚨ (Ansuz) = 15

2. **Check `script.js` (line 35)** - The correct order is defined as:
   ```javascript
   const correctOrder = [5, 10, 15, 20];
   ```

### The Solution

To solve the puzzle, click the runes in this order:

1. **ᚢ** (Uruz) - value 5
2. **ᚠ** (Fehu) - value 10
3. **ᚨ** (Ansuz) - value 15
4. **ᚱ** (Raido) - value 20

This activates the teleport to scene 95!

## The Seal Puzzle

After entering the tomb and breaking the seal, you'll encounter a 15-puzzle (sliding tile puzzle). This is a classic puzzle where you need to arrange tiles by sliding them into the empty space until they're in the correct order.

## Scene Structure

- **Beach Scene**: Main exploration area with ruins, a tablet with runes, and a sealed tomb
- **Cave Scene**: Underground chamber revealed after breaking the seal, containing treasure and a golden guardian statue

## Credits

Scene designed with interactive overlays and multiple puzzle mechanics.
