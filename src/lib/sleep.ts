export default function sleep(timeout: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, timeout);
    });
}