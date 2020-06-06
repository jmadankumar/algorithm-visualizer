import React from "react"
import { ButtonGroup, Button } from "@material-ui/core"
import TimelineIcon from "@material-ui/icons/Timeline";
import CodeIcon from "@material-ui/icons/Code";
import cx from 'classnames';

interface VisualizerTabBarProps {
    activeTab: number;
    onChange?: (index: number) => void;
}
export default function VisualizerTabBar({
    activeTab,
    onChange,
}: VisualizerTabBarProps) {
    return (
        <div className="flex justify-end">
            <ButtonGroup>
                <Button
                    onClick={() => onChange?.(0)}
                    className={cx({
                        'bg-gray-400': activeTab === 0,
                    })}
                >
                    <TimelineIcon className="mr-2" />
                    <span className="hidden md:inline">Visualizer</span>
                </Button>
                <Button
                    onClick={() => onChange?.(1)}
                    className={cx({
                        'bg-gray-400': activeTab === 1,
                    })}
                >
                    <CodeIcon className="mr-2" />
                    <span className="hidden md:inline">Code Preview</span>
                </Button>
            </ButtonGroup>
        </div>
    );
}