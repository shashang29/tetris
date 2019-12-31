import React from 'react';
import {createStage} from '../gameHelpers.js';

//Componenets
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';



const Tetris = ({ type }) => {

    return (
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text='Score' />
                    <Display text='Rows' />
                    <Display text='Level1' />
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris;