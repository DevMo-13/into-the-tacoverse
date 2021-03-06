// Component to fetch taco recipes from Spoonacular API

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TacoRecipesDetails from './TacoRecipesDetails';

interface RecipesResponse {
    0: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    1: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    2: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    3: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    4: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    5: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    6: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    7: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    8: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    9: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    10: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    11: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    12: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    13: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    14: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
}

function TacoRecipes() {
    // @ts-ignore
    const [recipesData, setRecipesData] = useState<RecipesResponse>({});

    const apiKey = 'cb5a8afbcad84ed38d32829ab0be43b8';

    const apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=taco&number=15`;
    const getRecipes = () => {
        axios
            .get(apiURL)
            .then((response) => {
                const recipes = response.data.results;
                console.log('recipes: ', recipes);
                setRecipesData(recipes);
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            {/* @ts-ignore */}
            <TacoRecipesDetails recipesData={recipesData} />
        </>
    );
}

export default TacoRecipes;
