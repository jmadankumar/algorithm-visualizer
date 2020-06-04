export function genRandomArray(size: number) {
    const newArray: number[] = [];
    for (let i = 0; i < size; i++) {
        let num;
        do {
            num = Math.round(Math.random() * 100);
        } while (newArray.indexOf(num) > -1);
        newArray.push(num);
    }
    return newArray;
}