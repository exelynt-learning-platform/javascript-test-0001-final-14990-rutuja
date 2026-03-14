

for (let i = 1; i <= 9; i++) {
    let line = "";

    // For upper half + middle row
    if (i <= 5) {
        // Left stars & spaces
        for (let j = 1; j <= 5; j++) {
            if (j === (6 - i) || j === (4 + i)) {
                line += "*";
            } else {
                line += " ";
            }
        }
    }
    // For lower half
    else {
        // Left stars & spaces
        for (let j = 1; j <= 5; j++) {
            if (j === (i - 4) || j === (14 - i)) {
                line += "*";
            } else {
                line += " ";
            }
        }
    }

    console.log(line);
}