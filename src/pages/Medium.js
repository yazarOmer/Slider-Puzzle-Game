import React from 'react'
import Board from '../components/Board';

export const TILE_COUNT = 9;
export const BOARD_SIZE = 600;
export const GRID_SIZE = 3;
export const imgUrl = "https://media.architecturaldigest.com/photos/55e76f1e302ba71f3016bc4f/1:1/w_600,h_600,c_limit/dam-images-daily-2013-03-laferrari-laferrari-01.jpg"

const Medium = () => {
  return (
      <div className='center'>
            <Board 
                tile_count = {TILE_COUNT}
                board_size = {BOARD_SIZE}
                grid_size = {GRID_SIZE}
                imgUrl = {imgUrl}
            />
        </div>
  )
}

export default Medium