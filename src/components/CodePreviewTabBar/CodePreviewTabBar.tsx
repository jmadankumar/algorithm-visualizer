import React from "react"
import { ButtonGroup, Button } from "@material-ui/core"
import cx from 'classnames';

interface CodePreviewTabBarProps {
    activeTab: string;
    tabs: string[];
    onChange?: (tabName: string) => void;
}
export default function CodePreviewTabBar({
    tabs,
    activeTab,
    onChange,
}: CodePreviewTabBarProps) {
    return (
        <div className="flex justify-start">
            <ButtonGroup>
                {
                    tabs.map(tab => (
                        <Button
                            onClick={() => onChange?.(tab)}
                            className={cx({
                                'bg-gray-400': activeTab === tab,
                            })}
                        >
                            {tab}
                        </Button>
                    ))
                }
            </ButtonGroup>
        </div>
    );
}