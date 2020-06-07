import React, { useState, useEffect } from "react"
import { Button } from "@material-ui/core"
import sleep from "../../lib/sleep"
import cx from "classnames";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { genRandomArray } from "../../utils/array.util";

interface Tree {
    value: number[];
    children: TreeValue | null,
    pointer?: number;
}
interface TreeValue {
    left: Tree | null;
    right: Tree | null;
}
export default function MergeSortVisualizer() {
    const [arr, setArray] = useState<number[]>([])
    const [currentPivotIndex, setPivotIndex] = useState(-1)
    const [leftIndex, setLeftIndex] = useState(-1)
    const [rightIndex, setRightIndex] = useState(-1)
    const [startedVisualization, setStartedVisualization] = useState(false)
    const [visualizationCompleted, setVisualizationCompleted] = useState(false)
    const [swapping, setSwapping] = useState(false);
    const [swapLeft, setSwapLeft] = useState(-1);
    const [swapRight, setSwapRight] = useState(-1);
    const timeout = 1000;

    const [treeHead, setTree] = useState<Tree>({ value: [], children: null });

    const setTreePointer = async (tree: Tree, leftIndex: number, rightIndex: number, mainIndex: number) => {
        tree.pointer = mainIndex;
        if (tree.children && tree.children.left) {
            tree.children.left.pointer = leftIndex;
        }
        if (tree.children && tree.children.right) {
            tree.children.right.pointer = rightIndex;
        }
        setTree({ ...treeHead });
        await sleep(timeout);
    }
    const merge = async (arr: number[], leftArr: number[], leftSize: number, rightArr: number[], rightSize: number,
        tree: Tree) => {
        let i = 0, j = 0, k = 0;
        // start animation code
        await setTreePointer(tree, i, j, k);
        //end animation code
        while (i < leftSize && j < rightSize) {
            if (leftArr[i] < rightArr[j]) {
                arr[k++] = leftArr[i++];
                // start animation code
                await setTreePointer(tree, i, j, k);
                //end animation code
            } else {
                arr[k++] = rightArr[j++];
                // start animation code
                await setTreePointer(tree, i, j, k);
                //end animation code
            }
        }
        while (i < leftSize) {
            arr[k++] = leftArr[i++];
            // start animation code
            await setTreePointer(tree, i, j, k);
            //end animation code
        }
        while (j < rightSize) {
            arr[k++] = rightArr[j++];
            // start animation code
            await setTreePointer(tree, i, j, k);
            //end animation code
        }
        // start animation code
        delete tree.children?.left;
        delete tree.children?.right;
        tree.children = null;
        tree.pointer = -1;
        setTree({ ...treeHead });
        await sleep(timeout);
        //end animation code
    }
    const mergeSort = async (arr: number[], size: number, tree: Tree) => {
        // start animation code
        tree.value = arr,
            tree.children = { left: null, right: null };
        setTree({ ...treeHead });
        await sleep(timeout);
        console.log(tree);
        // end animation code

        if (size < 2) {
            return;
        }
        const mid = Math.round(size / 2);
        const leftArr = arr.slice(0, mid);
        const rightArr = arr.slice(mid, size);

        // start animation code
        tree.children.left = { value: leftArr, children: null };
        tree.children.right = { value: rightArr, children: null };
        // end animation code

        await mergeSort(leftArr, mid, tree.children.left);
        await mergeSort(rightArr, size - mid, tree.children.right);
        await merge(arr, leftArr, mid, rightArr, size - mid, tree);

        // setArray([...arr]);
    }
    const startMergeSort = async () => {

        setStartedVisualization(true);
        setVisualizationCompleted(false);
        //end animation code
        await mergeSort(arr, arr.length, treeHead);
        console.log(treeHead);
        setVisualizationCompleted(true);
        setStartedVisualization(false);
        //end animation code
    }

    const generateRandomArr = (size: number) => {
        setVisualizationCompleted(false)
        const newArray: number[] = genRandomArray(size)
        console.log(newArray.length)
        setArray(newArray);
        setTree({ value: newArray, children: null });
    }

    useEffect(() => {
        generateRandomArr(10)
    }, [])

    const renderItems = (values: number[], pointer: number) => {
        return (
            <div>
                <div className="flex flex-row justify-center items-center">
                    {
                        values.map((value, index) => (
                            <div className={cx("w-10 h-10 flex justify-center items-center border border-gray-900", {
                                'bg-yellow-600': index === pointer
                            })}
                            >{value}
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-row justify-center items-center mb-5">
                    {
                        values.map((value, index) => (
                            <div className="w-10 h-10 flex justify-center items-center">
                                {index === pointer && <ArrowUpwardIcon />}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
    const renderNode = (tree: Tree) => {
        return (
            <div className="col p-3 border border-gray-500 ">
                {renderItems(tree.value, tree.pointer ?? -1)}
                <div className="flex justify-center">
                    {tree.children?.left ? renderNode(tree.children?.left) : null}
                    {tree.children?.right ? renderNode(tree.children?.right) : null}
                </div>
            </div>
        );
    }

    const renderAnimationSteps = () => {
        return renderNode(treeHead);
    }

    return (
        <div>
            <div className="flex justify-start mb-10">
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => generateRandomArr(10)}
                    className="mr-5"
                    disabled={startedVisualization}
                >
                    Generate Random Array
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => startMergeSort()}
                    disabled={startedVisualization}
                >
                    Start Visualize
                </Button>
            </div>

            <div className="">
                {renderAnimationSteps()}
            </div>
        </div>
    )
}
