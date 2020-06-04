import React from 'react';
import { Algorithm } from '../../types';
import { Card, CardActionArea, CardMedia, CardContent, Tooltip } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

interface AlgorithmCardProps {
    algorithm: Algorithm
}
const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithm }) => {
    return (
        <Card className="w-3/12 bg-white mx-2">
            <CardActionArea>
                <CardMedia image={algorithm.imageUrl}
                    title={algorithm.name} className="h-40 bg-center bg-contain bg-32" />
                <CardContent>
                    <div className="flex flex-row justify-between">
                        <div className="font-semibold text-base">{algorithm.name}</div>
                        <Tooltip title={`Visualize ${algorithm.name}`}>
                            <PlayArrowIcon className="text-green-800 hover:text-green-600" />
                        </Tooltip>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default AlgorithmCard;