// Component to fetch data from the TacoFancy API and renders the random taco's info

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiFileList3Line } from 'react-icons/ri';
import TacoImg from './TacoImg';

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

const tacoLocoResponse: TacoResponse[] = [];

function TacoLoco() {
    const [tacoData, setTacoData] = useState(tacoLocoResponse);

    const randomTacoURL = 'http://taco-randomizer.herokuapp.com/random/';
    const getRandomTaco = () => {
        axios
            .get<TacoResponse[]>(randomTacoURL)
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
                <ul className="ingredientsUl">
                    {Object.keys(tacoData).map((part: string) => (
                        <>
                            <li
                                // @ts-ignore
                                key={tacoData[part].name}
                                className="ingredientLi"
                            >
                                <p
                                    className="name"
                                    // @ts-ignore
                                    key={tacoData[part].name}
                                >
                                    {/*  @ts-ignore */}
                                    {tacoData[part].name}
                                </p>
                                <a
                                    // @ts-ignore
                                    href={tacoData[part].url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="recipe"
                                    className="iconLink"
                                    // @ts-ignore
                                    key={tacoData[part].url}
                                >
                                    <RiFileList3Line className="recipeIcon" />
                                </a>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TacoLoco;
