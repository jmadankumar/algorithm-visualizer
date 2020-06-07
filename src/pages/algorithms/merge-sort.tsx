import React, { useState, useEffect, useMemo } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { graphql, } from "gatsby";
import { getMarkdownCodeSnippets } from "../../utils/graghql.util"
import SortVisualizerPageCreator from "../../containers/SortVisualizerPageCreator"
import MergeSortVisualizer from "../../containers/MergeSortVisualizer"


export default function MergeSortPage({ data }: { data: any }) {

    const algorithmPath = "/algorithms/merge-sort";
    const codeMatch = useMemo(() => {
        return getMarkdownCodeSnippets(data, algorithmPath);
    }, [data]);
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index: number) => setActiveTab(index);
    console.log(codeMatch);
    return (
        <Layout>
            <Header />
            <SortVisualizerPageCreator
                title="Merge Sort Visualizer"
                code={codeMatch}
                visualizerComponent={
                    <MergeSortVisualizer />
                } />
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
