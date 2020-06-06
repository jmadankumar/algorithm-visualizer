import React, { useState } from 'react';
import CodePreviewTabBar from '../CodePreviewTabBar';
import CodePreview from '../CodePreview/CodePreview';

interface CodePreviewTabViewProps {
    code: {
        [props: string]: string
    }
    tabs: string[];
}
export default function CodePreviewTabView<T>({
    code,
    tabs
}: CodePreviewTabViewProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="">
            <CodePreviewTabBar activeTab={activeTab} tabs={tabs}
                onChange={(tabName) => setActiveTab(tabName)} />
            <CodePreview code={code[activeTab]} />
        </div>
    );
}