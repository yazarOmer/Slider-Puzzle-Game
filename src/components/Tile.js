import React from 'react'
import { getMatrixPosition, getVisualPosition } from '../helpers';

const Tile = (props) => {

    const { tile, index, width, height, tile_count, grid_size, handleTileClick, img, board_size } = props;

    const { row, col } = getMatrixPosition(index, grid_size);
    const visualPos = getVisualPosition(row, col, width, height);

    let tileStyle = {};

    if(img == null) {
      tileStyle = {
        width: `calc(100% / ${grid_size})`,
        height: `calc(100% / ${grid_size})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
        backgroundColor: `#ec6f66`,
        color: `white`,
        fontWeight: `bold`,
        fontSize: `24px`,
      }
    } else {
      tileStyle = {
        width: `calc(100% / ${grid_size})`,
        height: `calc(100% / ${grid_size})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
        backgroundImage: `url(${img})`,
        backgroundSize: `${board_size}px`,
        backgroundPosition: `${(100 / (grid_size - 1)) * (tile % grid_size)}% ${(100 / (grid_size - 1)) * (Math.floor(tile / grid_size))}%`,
      }
    }
    // const tileStyle = {
    //     width: `calc(100% / ${grid_size})`,
    //     height: `calc(100% / ${grid_size})`,
    //     translateX: visualPos.x,
    //     translateY: visualPos.y,
    //     backgroundColor: `#ec6f66`,
    //     color: `white`,
    //     fontWeight: `bold`,
    //     fontSize: `24px`,
    // }

  return (
        <li
          style={{
            ...tileStyle,
            transform: `translate3d(${visualPos.x}px, ${visualPos.y}px, 0)`,
            
            opacity: tile === tile_count - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {!img && `${tile + 1}`}
        </li>

  )
}

export default Tile