const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = createFilePath({ node, getNode, basePath: "pages" })
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     });
//   }
// }

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
