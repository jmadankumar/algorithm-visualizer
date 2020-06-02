export interface Algorithm {
    name: string;
    imageUrl: string
}
export interface AlgorithmGroup {
    name: string;
    algorithms: Array<Algorithm>;
}