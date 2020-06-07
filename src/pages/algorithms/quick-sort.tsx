import React, { useState, useEffect, useMemo } from "react"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import { graphql, } from "gatsby"
import QuickSortVisualizer from "../../containers/QuickSortVisualizer"
import { getMarkdownCodeSnippets } from "../../utils/graghql.util"
import { CodeProps } from "../../types"
import SortVisualizerPageCreator from '../../containers/SortVisualizerPageCreator';

export default function QuickSortPage({ data }: { data: any }) {

    const algorithmPath = "/algorithms/quick-sort";
    const codeMatch: CodeProps = useMemo(() => {
        return getMarkdownCodeSnippets(data, algorithmPath);
    }, [data]);

    console.log(codeMatch);
    return (
        <Layout>
            <Header />
            <SortVisualizerPageCreator
                title="Quick Sort Visualizer"
                code={codeMatch}
                visualizerComponent={
                    <QuickSortVisualizer />
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
