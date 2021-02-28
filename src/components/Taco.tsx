// Component to render the random taco's info

import React from 'react';

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

interface Props {
    tacoData: TacoResponse;
}

function Taco({ tacoData }: Props) {
    return (
        <ul>
            {Object.keys(tacoData).map((part: string) => (
                <>
                    {/*  @ts-ignore */}
                    <li key={tacoData[part].name}>
                        {/* @ts-ignore
                        <p className="name">{tacoData[part]}</p> */}
                        {/*  @ts-ignore */}
                        <p className="name">{tacoData[part].name}</p>
                        <a
                            // @ts-ignore
                            href={tacoData[part].url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="recipe"
                            className="recipeLink"
                        >
                            Get the Recipe
                        </a>
                    </li>
                </>
            ))}
        </ul>
    );
}

export default Taco;
