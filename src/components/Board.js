import React, { useState } from 'react';
import Tile from "./Tile";
import { canSwap, shuffle, swap, isSolved } from '../helpers';
import { Link } from 'react-router-dom';

const Board = (props) => {

    const { tile_count, board_size, grid_size } = props;

    const [tiles, setTiles] = useState([...Array(tile_count).keys()]);
    const [isStarted, setIsStarted] = useState(false);
    const [turns, setTurns] = useState(0);

    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles);
        setTiles(shuffledTiles);
    }

    const swapTiles = (tileIndex) => {
        if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1), grid_size)){
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
            setTiles(swappedTiles);
        }
    }


    const handleTileClick = (index) => {
        setTurns((previous) => previous +1)
        swapTiles(index)
    }

    const handleShuffleClick = () => {
        shuffleTiles()
        setTurns(0)
    }

    const handleStartClick = () => {
        shuffleTiles()
        setTurns(0)
        setIsStarted(true)
    }

    const isFinish = isSolved(tiles) && isStarted;

    const tileHeight = Math.round(board_size / grid_size);
    const tileWidth = Math.round(board_size / grid_size);

    const style = {
        width: board_size,
        height: board_size,
    };

  return (
    <>
        <ul style={style} className='board'>
            {tiles.map((tile, index) => (
                <Tile 
                    key={tile}
                    index={index}
                    tile={tile}
                    width={tileWidth}
                    height={tileHeight}
                    tile_count={tile_count}
                    grid_size={grid_size}
                    board_size={board_size}
                    handleTileClick={handleTileClick}
                />
            ))}
        </ul>
        {`Hamle Sayısı: ${turns}`}
        {isFinish && <p>KAZANDIN !!!</p>}
        {/* {!isStarted ? 
        (<button className='btn_game' onClick={() => handleStartClick()}>Start Game</button>) :
        (<button className='btn_game' onClick={() => handleShuffleClick()}>Restart Game</button>)
        }
        <Link className='btn_menu'>ANA MENÜ</Link> */}
        <div className='buttons'>
            {!isStarted ? 
            (<button className='btn_game' onClick={() => handleStartClick()}>BAŞLA</button>) :
            (<button className='btn_game' onClick={() => handleShuffleClick()}>KARIŞTIR</button>)
            }
            <Link className='btn_menu' to={"/"}>ANA MENÜ</Link>
        </div>
    </>
  )
}

export default Board