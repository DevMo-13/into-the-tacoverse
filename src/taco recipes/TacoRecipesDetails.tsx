// Component to render the random recipes' info

import React from 'react';

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
    15: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    16: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    17: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    18: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    19: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    20: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    21: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    22: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    23: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    24: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    25: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
    26: {
        id: number;
        image: string;
        imageType: string;
        title: string;
    };
}

interface Props {
    recipesData: RecipesResponse;
}

function TacoRecipesDetails({ recipesData }: Props) {
    return (
        <div className="tacoRecipes">
            <p className="recipesIntro">
                Not really feeling loco? Then try one of these tried and true
                taco recipes instead!
            </p>
            <div className="recipes">
                <ul className="recipesUl">
                    {Object.keys(recipesData).map((recipe: string) => (
                        <>
                            <li
                                // @ts-ignore
                                key={recipesData[recipe].id}
                                className="recipeLi"
                            >
                                <img
                                    // @ts-ignore
                                    src={recipesData[recipe].image}
                                    alt="recipe pic"
                                    className="recipePic"
                                />
                                <p className="recipeTitle">
                                    {/*  @ts-ignore */}
                                    {recipesData[recipe].title}
                                </p>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TacoRecipesDetails;
