import React from 'react'
import { getMatrixPosition, getVisualPosition } from '../helpers';

const Tile = (props) => {

    const { tile, index, width, height, tile_count, grid_size, handleTileClick } = props;

    const { row, col } = getMatrixPosition(index, grid_size);
    const visualPos = getVisualPosition(row, col, width, height);
    const tileStyle = {
        width: `calc(100% / ${grid_size})`,
        height: `calc(100% / ${grid_size})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
        backgroundColor: `#ec6f66`,
        color: `white`,
        fontWeight: `bold`,
        fontSize: `24px`,
    }

  return (
        <li
          style={{
            ...tileStyle,
            transform: `translate3d(${visualPos.x}px, ${visualPos.y}px, 0)`,
            // Is last tile?
            opacity: tile === tile_count - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {`${tile + 1}`}
        </li>

  )
}

export default Tile