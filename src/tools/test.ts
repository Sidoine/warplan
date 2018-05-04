let wounds = 0;
let turns = 100000;

function roll(faces: number = 6) {
    return 1 + Math.floor(Math.random() * faces);
}

for (let i = 0; i < turns; i++) {
    for (let j = 0; j < 2 * 4; j ++) {
        let hit = roll();
        if (hit === 1) hit = roll();
        if (hit >= 4) {
            let wound = roll();
            if (wound >= 3) {
                let save = roll();
                if (save < 5) {
                    wounds++;
                }
            }
        }
    }

    for (let j = 0; j < 3; j++) {
        let hit = roll();
        if (hit >= 4) {
            let wound = roll();
            if (wound >= 3) {
                let save = roll() - 1;
                if (save < 5) {
                    wounds+= 2;
                }
            }
        }
    }
}

console.log(wounds / turns);

