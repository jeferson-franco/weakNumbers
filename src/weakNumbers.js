function solution(n) {
    let divisors = new Array(n + 1).fill(0);
    let weakness = new Array(n + 1).fill(0);
    let maxWeakness = 0;
    let maxWeaknessCount = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            divisors[j]++;
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (divisors[j] > divisors[i]) {
                weakness[i]++;
            }
        }
        if (weakness[i] > maxWeakness) {
            maxWeakness = weakness[i];
            maxWeaknessCount = 1;
        } else if (weakness[i] === maxWeakness) {
            maxWeaknessCount++;
        }
    }
    return [maxWeakness, maxWeaknessCount];
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test weakNumbers

// alternative solution
