import { Algorithm } from "../types";

export const filterByName = (
    algorithms: Algorithm[],
    text: string,
    emptyCheck?: boolean,
) => {
    return algorithms.filter(algorithm => {
        console.log(algorithm.done);
        return (
            ((emptyCheck && text === "") ||
                algorithm.name?.toLowerCase().indexOf(text?.toLowerCase()) >
                    -1) &&
            algorithm.done
        );
    });
};
