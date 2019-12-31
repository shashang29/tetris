import React from 'react';

import { StyledTetrisWrapper, StyledTetris } from './Styles/StyledTetris';
import { createStage } from '../gameHelpers.js';

//Componenets
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';



const Tetris = ({ type }) => {

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text='SCORE' />
                        <Display text='ROWS' />
                        <Display text='Level1' />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;