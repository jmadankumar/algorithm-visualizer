import React, { useState, useEffect, useMemo } from "react"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import { graphql } from "gatsby"
import QuickSortVisualizer from "../../containers/QuickSortVisualizer"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import CodePreview from "../../components/CodePreview"
import VisualizerTabBar from "../../components/VisualizerTabBar"
import CodePreviewTabView from "../../components/CodePreviewTabView/CodePreviewTabView"
import { Card, CardContent } from "@material-ui/core"

interface CodeProps {
    [props: string]: string
}
export default function QuickSortPage({ data }: { data: any }) {
    console.log(data);
    // return data.allMarkdownRemark.edges.find(
    //     ({ node }: { node: any }) => algorithmPath === node.fields.slug
    // )
    const algorithmPath = "/algorithms/quick-sort"
    const codeMatch = useMemo(() => {
        return data.allMarkdownRemark.edges.reduce((result: any, { node }: {
            result: CodeProps, node: any
        }) => {
            if (`${algorithmPath}/js` === node.fields.slug) {
                result.js = node.html
            } else if (`${algorithmPath}/java` === node.fields.slug) {
                result.java = node.html
            } else if (`${algorithmPath}/python` === node.fields.slug) {
                result.python = node.html
            }
            return result;
        }, {});
    }, [data]);
    const [activeTab, setActiveTab] = useState(0);

    console.log(codeMatch);

    useEffect(() => {
        deckDeckGoHighlightElement();
    }, []);
    const handleTabChange = (index: number) => setActiveTab(index);
    console.log(activeTab);
    return (
        <Layout>
            <Header />
            <div className="p-10">
                <div className="flex justify-between mb-5">
                    <h2 className="text-2xl font-bold ">
                        Quick Sort Visualizer
                    </h2>
                    <VisualizerTabBar activeTab={activeTab} onChange={handleTabChange} />
                </div>
                <Card>
                    <CardContent>
                        {activeTab === 0 && <QuickSortVisualizer />}
                        {activeTab === 1 && (
                            <CodePreviewTabView
                                tabs={['js', 'java', 'python']}
                                code={codeMatch} />
                        )}
                    </CardContent>
                </Card>

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
