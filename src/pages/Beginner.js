import React from 'react'
import  Board  from "../components/Board";


export const TILE_COUNT = 9;
export const BOARD_SIZE = 600;
export const GRID_SIZE = 3;

const Beginner = () => {

    return (
        <div className='center'>
            <Board 
                tile_count = {TILE_COUNT}
                board_size = {BOARD_SIZE}
                grid_size = {GRID_SIZE}
                imgUrl = {null}
            />
        </div>
    )
    
}

export default Beginner