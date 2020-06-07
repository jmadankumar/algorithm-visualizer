export interface Algorithm {
    name: string;
    imageUrl: string,
    url: string
}
export interface AlgorithmGroup {
    name: string;
    algorithms: Array<Algorithm>;
}
export interface CodeProps {
    [props: string]: string
}
