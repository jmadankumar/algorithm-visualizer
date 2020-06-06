import React from 'react';
import { AlgorithmGroup, Algorithm } from '../../types'
import AlgorithmCard from '../AlgorithmCard';
import { filterByName } from '../../utils/algorithm.util';

interface AlgorithmSectionProps {
    algorithmGroup: AlgorithmGroup,
    filterText: string
}
const AlgorithmSection: React.FC<AlgorithmSectionProps> = ({
    algorithmGroup,
    filterText = ""
}) => {
    const filteredAlgorithms = filterByName(algorithmGroup.algorithms, filterText, true);
    return (
        <section className="mb-10">
            <h3 className="text-xl font-bold mb-5">{algorithmGroup.name}</h3>
            <div className="flex flex-row flex-wrap -mx-4 ">
                {
                    filteredAlgorithms.map(
                        (algorithm) => <AlgorithmCard algorithm={algorithm} />
                    )
                }
            </div>
        </section>
    )
}

export default AlgorithmSection;