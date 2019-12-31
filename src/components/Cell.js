import React from 'react';
import { StyledCell } from './StyledComponent/StyledCell';
import { TETROMINOS } from '../tetrominos'


const Cell = ({ type }) => (
    <StyledCell
        type={type}
        color={TETROMINOS['L'].color}>cell
    </StyledCell>
)

export default Cell;