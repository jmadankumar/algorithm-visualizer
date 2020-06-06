import React, { useState, useEffect, useMemo } from "react"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import { graphql, } from "gatsby"
import QuickSortVisualizer from "../../containers/QuickSortVisualizer"
import VisualizerTabBar from "../../components/VisualizerTabBar";
import CodePreviewTabView from "../../components/CodePreviewTabView/CodePreviewTabView";
import { Card, CardContent } from "@material-ui/core";
import { getMarkdownCodeSnippets } from "../../utils/graghql.util"


export default function QuickSortPage({ data }: { data: any }) {

    const algorithmPath = "/algorithms/quick-sort";
    const codeMatch = useMemo(() => {
        return getMarkdownCodeSnippets(data, algorithmPath);
    }, [data]);
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index: number) => setActiveTab(index);
    console.log(codeMatch);
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
                                tabs={['js', 'java', 'python', 'typescript']}
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
