interface CodeProps {
    [props: string]: string
}

export const getMarkdownCodeSnippets = (data: any, algorithmPath: string) => {
    return data.allMarkdownRemark.edges.reduce((result: any, { node }: {
        result: CodeProps, node: any
    }) => {
        if (`${algorithmPath}/js` === node.fields.slug) {
            result.js = node.html
        } else if (`${algorithmPath}/java` === node.fields.slug) {
            result.java = node.html
        } else if (`${algorithmPath}/python` === node.fields.slug) {
            result.python = node.html
        } else if (`${algorithmPath}/typescript` === node.fields.slug) {
            result.typescript = node.html
        }
        return result;
    }, {});
}