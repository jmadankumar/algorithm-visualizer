const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// const isTextFile = node => {
//     return (
//         node.internal.type === "File" && node.internal.mediaType === "text/plain"
//     )
// }
// const isFileWithoutExtension = node => {
//     return (
//         node.internal.type === "File" &&
//         node.internal.mediaType === "application/octet-stream" &&
//         !node.internal.extension
//     )
// }
exports.onCreateNode = async ({ node, getNode, actions, loadNodeContent }) => {
    // console.log(node.internal.mediaType);
    // if (node.internal.mediaType === 'text/plain' && node.internal.type === 'File') {

    //     const content = await loadNodeContent(node);
    //     console.log(content);
    // }

    // exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {
        console.log(getNode(node.parent).relativePath);
        const slug = createFilePath({ node, getNode, basePath: "src/data/algorithms", trailingSlash: false })
        const slugFinal = slug.indexOf('/algorithms/')
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query MyQuery {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               date
//               title
//             }
//             excerpt
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);
//   console.log(result);
//   if (result && result.data.allMarkdownRemark.edges.length > 0) {
//     result.data.allMarkdownRemark.edges.map(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve("./src/templates/blog-post.tsx"),
//         context: {
//           slug: node.fields.slug,
//         },
//       })
//     })
//   }
// }
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig()
    if (stage.startsWith('develop') && config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom'
        }
    }
}