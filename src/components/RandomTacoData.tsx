// Component to fetch data for a random taco recipe

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Taco from './Taco';

interface TacoResponse {
    base_layer: {
        name: string;
        recipe: string;
        slug: string;
        url: string;
    };
    condiment: {
        name: string;
        recipe: string;
        slug: string;
        url: string;
    };
    mixin: {
        name: string;
        recipe: string;
        slug: string;
        url: string;
    };
    seasoning: {
        name: string;
        recipe: string;
        slug: string;
        url: string;
    };
    shell: {
        name: string;
        recipe: string;
        slug: string;
        url: string;
    };
}

function RandomTacoData() {
    // @ts-ignore
    const [tacoData, setTacoData] = useState<TacoResponse>({});

    const randomTacoURL =
        'http://taco-randomizer.herokuapp.com/random/';

    const getRandomTaco = () => {
        axios
            .get(randomTacoURL)
            .then((response) => {
                const taco = response.data;
                console.log('rando taco: ', taco);
                setTacoData(taco);
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    };

    useEffect(() => {
        getRandomTaco();
    }, []);

    return (
        <>
            <Taco tacoData={tacoData} />
        </>
    );
}

export default RandomTacoData;
