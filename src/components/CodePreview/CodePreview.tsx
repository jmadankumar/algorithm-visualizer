import React, { useEffect } from 'react';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Snackbar } from '@material-ui/core';
interface CodePreviewProps {
    code: string;
}
export default function CodePreview({
    code
}: CodePreviewProps) {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        deckDeckGoHighlightElement();
    }, []);
    const handleClose = (event: React.SyntheticEvent<any, Event>, reason: string) => {
        setOpen(false);
    };
    return (
        <div className="relative">
            <CopyToClipboard className="absolute right-10px top-10px bg-blue-400 text-white px-2 py-1"
                text={code} onCopy={() => setOpen(true)}>
                <button>Copy</button>
            </CopyToClipboard>
            <div
                dangerouslySetInnerHTML={{ __html: code }}
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose} message="Copied" />
        </div>

    );
}