import React from "react"
import { ButtonGroup, Button } from "@material-ui/core"
import cx from 'classnames';
import TabLangIcon from '../TabLangIcon';

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
                            key={tab}
                        >
                            <TabLangIcon className="w-5 h-5 mr-2" lang={tab} /> <span className="hidden md:inline">{tab}</span>
                        </Button>
                    ))
                }
            </ButtonGroup>
        </div>
    );
}