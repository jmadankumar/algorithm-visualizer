import React, { useState, useEffect } from "react"
import { Button } from "@material-ui/core"
import sleep from "../../lib/sleep"
import cx from "classnames"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import { genRandomArray } from "../../utils/array.util"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

export default function QuickSortVisualizer() {
    const [arr, setArray] = useState<number[]>([])
    const [currentPivotIndex, setPivotIndex] = useState(-1)
    const [leftIndex, setLeftIndex] = useState(-1)
    const [rightIndex, setRightIndex] = useState(-1)
    const [startedVisualization, setStartedVisualization] = useState(false)
    const [visualizationCompleted, setVisualizationCompleted] = useState(false)
    const [swapping, setSwapping] = useState(false)
    const [swapLeft, setSwapLeft] = useState(-1)
    const [swapRight, setSwapRight] = useState(-1)
    const timeout = 1000
    const swap = async (arr: Number[], left: number, right: number) => {
        await sleep(timeout)
        setSwapping(true)
        setSwapLeft(left)
        setSwapRight(right)
        // Swap Start code
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        // Swap Start end
        await sleep(timeout)
        setSwapping(false)
        setSwapLeft(-1)
        setSwapRight(-1)
    }

    const partition = async (
        arr: number[],
        left: number,
        right: number
    ): Promise<number> => {
        const pivot = arr[left]
        const pivotPoint = left

        setPivotIndex(pivotPoint)
        setLeftIndex(left)
        setRightIndex(right)
        await sleep(timeout)

        while (left < right) {
            while (arr[left] <= pivot) {
                left++
                setLeftIndex(left)
                await sleep(timeout)
            }
            while (arr[right] > pivot) {
                right--
                setRightIndex(right)
                await sleep(timeout)
            }
            if (left < right) {
                await swap(arr, left, right)
            }
        }
        await swap(arr, pivotPoint, right)
        return right
    }

    const quickSort = async (arr: number[], left: number, right: number) => {
        if (left < right) {
            const partitionPoint = await partition(arr, left, right)
            await quickSort(arr, left, partitionPoint - 1)
            await quickSort(arr, partitionPoint + 1, right)
        }
    }

    const startQuickSort = async () => {
        setStartedVisualization(true)
        setVisualizationCompleted(false)
        //start quicksort
        await quickSort(arr, 0, arr.length - 1)
        setArray([...arr])
        setStartedVisualization(false)
        setPivotIndex(-1)
        setLeftIndex(-1)
        setRightIndex(-1)
        setVisualizationCompleted(true)
        console.log(arr)
    }

    const generateRandomArr = (size: number) => {
        setVisualizationCompleted(false)
        const newArray: number[] = genRandomArray(size)
        console.log(newArray.length)
        setArray(newArray)
    }

    useEffect(() => {
        generateRandomArr(10)
    }, [])

    return (
        <div>
            <div className="flex justify-start">
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
                    onClick={() => startQuickSort()}
                    disabled={startedVisualization}
                >
                    Start Visualize
                </Button>
            </div>

            <div className="">
                <div
                    className={cx("flex justify-center", {
                        invisible: !swapping,
                    })}
                >
                    <ArrowBackIcon />{" "}
                    <span className="px-5 font-bold">swapping </span>
                    <ArrowForwardIcon />
                </div>
                <div className="flex justify-center">
                    {arr.map((value, index) => {
                        return (
                            <div
                                className={cx(
                                    "w-10 h-10 flex flex-col justify-center items-center"
                                )}
                                key={value}
                            >
                                {leftIndex === index && (
                                    <>
                                        <span>Left</span>
                                        <ArrowDownwardIcon />
                                    </>
                                )}
                                {rightIndex === index && (
                                    <>
                                        <span>Right</span>
                                        <ArrowDownwardIcon />
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center">
                    {arr.map((value, index) => {
                        return (
                            <div
                                className={cx(
                                    "w-10 h-10 flex justify-center items-center border border-gray-900 array-item",
                                    {
                                        "bg-purple-600":
                                            currentPivotIndex === index,
                                        "bg-pink-600": leftIndex === index,
                                        "bg-yellow-600": rightIndex === index,
                                        "bg-green-600": visualizationCompleted,
                                        "scaled-1-2x":
                                            swapLeft === index ||
                                            swapRight === index,
                                    }
                                )}
                                key={value}
                            >
                                {value}
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center">
                    {arr.map((value, index) => {
                        return (
                            <div
                                className={cx(
                                    "w-10 h-10 flex flex-col justify-center items-center"
                                )}
                                key={value}
                            >
                                {currentPivotIndex === index && (
                                    <>
                                        <ArrowUpwardIcon />
                                        <span>Pivot</span>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
