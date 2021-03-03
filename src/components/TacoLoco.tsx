// Component to render the random taco's info

import React from 'react';
import { RiFileList3Line } from 'react-icons/ri';
import TacoImg from '../images/TacoImg';

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

function TacoLoco({ tacoData }: Props) {
    return (
        <div className="tacoLoco">
            <div className="intro">
                <p>
                    Feeling a little loco?
                    <br></br>
                    Try out a whole new twist on tacos by combining these unique
                    recipes to make one
                    <br></br>
                    <br></br>
                    <span id="loco">Taco Loco!</span>
                </p>
                <TacoImg />
            </div>
            <div className="ingredients">
                <ul>
                    {Object.keys(tacoData).map((part: string) => (
                        <>
                            {/*  @ts-ignore */}
                            <li key={tacoData[part].name}>
                                {/*  @ts-ignore */}
                                <p className="name">{tacoData[part].name}</p>
                                <a
                                    // @ts-ignore
                                    href={tacoData[part].url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="recipe"
                                >
                                    <RiFileList3Line className="recipeIcon" />
                                </a>
                            </li>
                        </>
                    ))}
                </ul>
                {/* <p>Prefer to try a different loco combo?</p> */}
            </div>
        </div>
    );
}

export default TacoLoco;
