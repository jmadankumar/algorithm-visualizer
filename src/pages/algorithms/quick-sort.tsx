import React, { useState, useEffect, useMemo } from "react"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import { graphql } from "gatsby"
import QuickSortVisualizer from "../../containers/QuickSortVisualizer"
import CodeIcon from "@material-ui/icons/Code"
import TimelineIcon from "@material-ui/icons/Timeline"
import { ButtonGroup, Button } from "@material-ui/core"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

export default function QuickSortPage({ data }: { data: any }) {
    console.log(data)
    const algorithmPath = "/algorithms/quick-sort"
    const match = useMemo(() => {
        return data.allMarkdownRemark.edges.find(
            ({ node }: { node: any }) => algorithmPath === node.fields.slug
        )
    }, [data])
    const [isVisualizerVisible, setVisualizerVisible] = useState(true)
    const [isCodePreviewVisible, setCodePreviewVisible] = useState(false)
    console.log(match)
    useEffect(() => {
        deckDeckGoHighlightElement()
    }, [])
    return (
        <Layout>
            <Header />
            <div className="p-10">
                <h2 className="text-xl font-bold mb-5">
                    Quick Sort Visualizer
                </h2>
                <div>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                setVisualizerVisible(true)
                                setCodePreviewVisible(false)
                            }}
                        >
                            <TimelineIcon />
                        </Button>
                        <Button
                            onClick={() => {
                                setVisualizerVisible(false)
                                setCodePreviewVisible(true)
                            }}
                        >
                            <CodeIcon />
                        </Button>
                    </ButtonGroup>
                </div>

                {isVisualizerVisible && <QuickSortVisualizer />}
                {isCodePreviewVisible && (
                    <div
                        dangerouslySetInnerHTML={{ __html: match.node.html }}
                    />
                )}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
