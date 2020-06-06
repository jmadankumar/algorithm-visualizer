import React from 'react';

interface CodePreviewProps {
    code: string;
}
export default function CodePreview({
    code
}: CodePreviewProps) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: code }}
        />
    );
}