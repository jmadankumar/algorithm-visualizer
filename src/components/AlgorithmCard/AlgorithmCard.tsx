import React from 'react';
import { Algorithm } from '../../types';
import { Card, CardActionArea, CardMedia, CardContent, Tooltip } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'gatsby';

interface AlgorithmCardProps {
    algorithm: Algorithm
}
const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithm }) => {
    return (
        <div className="w-full sm:w-6/12 md:w-3/12 px-2 mb-5">
            <Link to={algorithm.url}>
                <Card className="bg-white">
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
            </Link>
        </div>
    );
}

export default AlgorithmCard;