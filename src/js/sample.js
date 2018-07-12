import assert from 'assert';

const myFunc = (a, b) => {
    if (a < 1)
        return 1;
    else if (b < 2)
        return 2;
    else
        return 3;
};

export {myFunc};