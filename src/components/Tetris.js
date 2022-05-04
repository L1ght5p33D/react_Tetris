
import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import MoveButton from './MoveButton';
// up down left right  button input

var bbin;


const Tetris = () => {
  
  const [dropTime, setDropTime] = useState(null);
  
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  console.log('re-render');

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const moveLeft = () => {
    console.log("new moveleft mobbutton")
      movePlayer(-1);
  }

  const moveRight = () => {
    console.log("new  move right mobbbutton")
      movePlayer(1);
  }

  const moveROT = () => {
    console.log("new move rot mobbutton")
    playerRotate(stage, 1);
  }

  const moveDrop = () => {
    console.log("new  move drop mobbbutton")
      drop()
  }


  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37 || 
          bbin ==="left"
        ) {
        movePlayer(-1);
      } else if (keyCode === 39 ||
          bbin === "right"
        ) {
        movePlayer(1);
      } else if (keyCode === 40 ||
          bbin === "down"
        ) {
        dropPlayer();
      } else if (keyCode === 38 ||
            bbin === "up"
        ) {
        playerRotate(stage, 1);
      }
    }
  };

  const test_button= () => {
    console.log("test button click")
  }
  return (
    
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
	id = "tetris_stw"
    >

<div id="si_tetris_title">React TETRIS</div> 

      <StyledTetris id="si_styled_tetris">


        <Stage id="si_tetris_stage" stage={stage} />
        <aside id="gi_aside">
          {gameOver ? (
            <div>
            <Display gameOver={gameOver} text="Game Over" />
            <Display text={`Score: ${score}`} />           
            <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
          </div>
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />

          
        </aside>

        
       
      </StyledTetris>
      
      <div id="mb_row">
       
        <div class="mb_row_item">
        <button class="mbutton" onClick={moveLeft}> Left</button>
        </div>
       
        <div class="mb_row_item">
        <button class="mbutton" onClick={moveRight}> Right</button>
       </div>

        <div class="mb_row_item">
        <button class="mbutton" onClick={moveROT }> ROT </button>
        </div>
       
        <div class="mb_row_item">
        <button class="mbutton" onClick={moveDrop }> Drop </button>
        </div>
       
        </div>
       

   
   
    </StyledTetrisWrapper>
  
  );
};

export default Tetris;
