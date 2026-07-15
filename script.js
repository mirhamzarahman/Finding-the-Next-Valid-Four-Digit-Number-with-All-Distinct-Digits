'use strict';

const fs = require('fs');

let y = Number(fs.readFileSync(0, 'utf8').trim());

while (true) {
    y++;

    const s = y.toString();

    if (new Set(s).size === s.length) {
        console.log(y);
        break;
    }
}
