import React from 'react';
import { Algorithm } from '../../types';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

interface AlgorithmCardProps {
    algorithm: Algorithm
}
const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithm }) => {
    return (
        <Card className="w-3/12 bg-white mx-2">
            <CardActionArea>
                <CardMedia image={algorithm.imageUrl}
                    title="Contemplative Reptile" className="h-40 bg-center bg-contain" />
                <CardContent>
                    <div className="font-semibold"> {algorithm.name}</div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default AlgorithmCard;