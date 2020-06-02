import React, { ReactNode, useState } from "react"
import Layout from "../components/Layout";
import Header from "../components/Header";
import { TextField, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SortImage from '../assets/images/complex.svg';
import SearchImage from '../assets/images/decision-tree.svg';
import { AlgorithmGroup, Algorithm } from "../types";
import AlgorithmCard from "../components/AlgorithmCard";
import AlgorithmSection from "../components/AlgorithmSection";
import { filterByName } from "../utils/algorithm.util";

const algorithmGroups: AlgorithmGroup[] = [{
  name: 'Sort algorithm',
  algorithms: [{
    name: 'Merge Sort',
    imageUrl: SortImage
  }, {
    name: 'Quick Sort',
    imageUrl: SortImage
  }, {
    name: 'Bucket Sort',
    imageUrl: SortImage
  }, {
    name: 'Heap Sort',
    imageUrl: SortImage
  }]
},
{
  name: 'Search algorithm',
  algorithms: [{
    name: 'Binary Search',
    imageUrl: SearchImage
  }, {
    name: 'Depth/Breadth First Search',
    imageUrl: SearchImage
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
      <div className="flex items-center py-16 px-10 flex-col">
        <TextField fullWidth variant="outlined"
          placeholder="Search Algorithm"
          className="w-10/12 bg-white"
          InputProps={{
            startAdornment: (<SearchIcon />)
          }}
          onChange={handleSearchChange}
        />
      </div>
      <div className="px-10">
        <h3 className="text-center mb-10 text-3xl uppercase font-bold">Algorithms</h3>
        {renderAlgorithmGroups()}
      </div >
    </Layout >
  )
}
