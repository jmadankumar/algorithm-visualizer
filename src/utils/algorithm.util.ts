export const filterByName = (algorithms: Algorithm[], text: string, emptyCheck?: boolean) => {
    return algorithms.filter(
        (algorithm) => {
            return (emptyCheck && text === '') || algorithm.name?.toLowerCase().indexOf(text?.toLowerCase()) > -1;
        }
    );
}