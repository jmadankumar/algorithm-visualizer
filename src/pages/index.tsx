import React, { ReactNode, useState } from "react"
import Layout from "../components/Layout";
import Header from "../components/Header";
import { TextField, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SortImage from '../assets/images/complex.svg';
import SearchImage from '../assets/images/decision-tree.svg';
import FitImage from '../assets/images/fit.svg';
import { AlgorithmGroup, Algorithm } from "../types";
import AlgorithmCard from "../components/AlgorithmCard";
import AlgorithmSection from "../components/AlgorithmSection";
import { filterByName } from "../utils/algorithm.util";

const algorithmGroups: AlgorithmGroup[] = [
  {
    name: 'Data structure',
    algorithms: [{
      name: 'Linked List',
      imageUrl: FitImage,
      url: '/data-structure/linked-list'
    }, {
      name: 'Stack',
      imageUrl: FitImage,
      url: '/data-structure/stack'
    }, {
      name: 'Queue',
      imageUrl: FitImage,
      url: '/data-structure/queue'
    }, {
      name: 'Doubly Linked List',
      imageUrl: FitImage,
      url: '/data-structure/doubly-linked-list'
    }]
  }, {
    name: 'Sort algorithm',
    algorithms: [{
      name: 'Merge Sort',
      imageUrl: SortImage,
      url: '/algorithms/merge-sort'
    }, {
      name: 'Quick Sort',
      imageUrl: SortImage,
      url: '/algorithms/quick-sort'
    }, {
      name: 'Bucket Sort',
      imageUrl: SortImage,
      url: '/algorithms/bucket-sort'
    }, {
      name: 'Heap Sort',
      imageUrl: SortImage,
      url: '/algorithms/heap-sort'
    }]
  },
  {
    name: 'Search algorithm',
    algorithms: [{
      name: 'Binary Search',
      imageUrl: SearchImage,
      url: '/algorithms/merge-sort'
    }, {
      name: 'Depth/Breadth First Search',
      imageUrl: SearchImage,
      url: '/algorithms/merge-sort'
    }]
  }];

export default function Index({ data }: { data: any }) {
  const [text, setText] = useState('');

  const renderAlgorithmGroups = (): ReactNode => {
    const filteredAlgorithmGroups = algorithmGroups.filter(algorithmGroup => {
      const algorithms = filterByName(algorithmGroup.algorithms, text, true);
      return algorithms.length > 0;
    });
    return filteredAlgorithmGroups.map((algorithmGroup) => {
      return (
        <AlgorithmSection algorithmGroup={algorithmGroup} filterText={text} />
      );
    });
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  }

  return (
    <Layout>
      <Header />
      <div className="p-10">
        <h3 className="text-center text-3xl uppercase font-bold">Data Structrue & Algorithms</h3>
        <div className="flex items-center py-8 flex-col mb-5">
          <TextField fullWidth variant="outlined"
            placeholder="Search Algorithm"
            className="w-8/12 bg-white"
            InputProps={{
              startAdornment: (<SearchIcon />)
            }}
            onChange={handleSearchChange}
          />
        </div>

        {renderAlgorithmGroups()}
      </div >
    </Layout >
  )
}
