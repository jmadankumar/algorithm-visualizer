import React, { useState, ReactElement } from 'react';
import VisualizerTabBar from '../../components/VisualizerTabBar';
import { Card, CardContent } from '@material-ui/core';
import CodePreviewTabView from '../../components/CodePreviewTabView/CodePreviewTabView';
import { CodeProps } from '../../types';

interface SortVisualizerPageCreatorProps {
    title: string,
    code: CodeProps;
    visualizerComponent: ReactElement,

}
export default function SortVisualizerPageCreator({
    title,
    code,
    visualizerComponent
}: SortVisualizerPageCreatorProps) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index: number) => setActiveTab(index);
    return (
        <div className="p-5 md:p-10">
            <div className="flex justify-between mb-5">
                <h2 className="text-2xl font-bold ">
                    {title}
                </h2>
                <VisualizerTabBar activeTab={activeTab} onChange={handleTabChange} />
            </div>
            <Card>
                <CardContent className="overflow-x-auto">
                    {activeTab === 0 && visualizerComponent}
                    {activeTab === 1 && (
                        <CodePreviewTabView
                            tabs={['js', 'java', 'python', 'typescript']}
                            code={code} />
                    )}
                </CardContent>
            </Card>
        </div>
    );
}