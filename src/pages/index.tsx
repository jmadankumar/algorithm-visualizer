import React, { ReactNode } from "react"
import Layout from "../components/Layout";
import Header from "../components/Header";
import { TextField, Card, CardActionArea, CardMedia ,CardContent} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Images from '../assets/images/undraw_Business_analytics_64el.svg';

const algorithmGroups = [{
  name: 'Sort algorithm',
  algorithms: [{
    name: 'Merge Sort'
  }, {
    name: 'Quick Sort'
  }, {
    name: 'Bucket Sort'
  }, {
    name: 'Heap Sort'
  }]
},
{
  name: 'Search algorithm',
  algorithms: [{
    name: 'Binary Search'
  }, {
    name: 'Depth/Breadth First Search'
  }]
}];

export default function Home({ data }: { data: any }) {
  console.log(data);
  const renderAlgorithm = (algorithm: { name: string }) => {
    return (
      <Card className="w-3/12 bg-white mx-2">
        <CardActionArea>
          <CardMedia image={Images}
          title="Contemplative Reptile" className="h-40"/>
           <CardContent>
            <div className="font-semibold"> {algorithm.name}</div>
           </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  const renderAlgorithmGroups = (): ReactNode => {
    return algorithmGroups.map(algorithmGroup => {
      return (
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-5">{algorithmGroup.name}</h3>

          <div className="flex flex-row -mx-4">
            {
              algorithmGroup.algorithms.map(renderAlgorithm)
            }
          </div>
        </section>
      );
    });
  }
  return (
    <Layout>
      <Header />
      <div className="flex items-center py-16 px-10 bg-gray-200 flex-col">
        <TextField fullWidth variant="outlined"
          placeholder="Search Algorithm"
          className="w-10/12 bg-white"
          InputProps={{
            startAdornment: (<SearchIcon />)
          }}
        />
      </div>
      <div className="p-10">
        <h3 className="text-center mb-10 text-3xl uppercase font-bold">Algorithms</h3>
        {renderAlgorithmGroups()}
      </div >
    </Layout >
  )
}
