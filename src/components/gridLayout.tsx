import React from "react";
import { Tile } from "../models";
import styles from "./styles.module.scss";


interface GridLayoutProps {
  random?: boolean;
}

const GridLayout: React.FC<GridLayoutProps> = ({ random }: GridLayoutProps) => {
  let rows = 7;
  let cols = 7;
  const [highlighted, setHighlighted] = React.useState<
    Array<{ i: number; j: number }>
  >([]);

  React.useEffect(() => {
    if (random) {
      let i = 0;
      const arr: Tile[] = [];
      while (i < 18) {
        const rI = Math.round(Math.random() * 6);
        const rJ = Math.round(Math.random() * 6);
        if (!arr.find((e) => e.i === rI && e.j === rJ)) {
          arr.push({ i: rI, j: rJ });
          ++i;
        }
      }
      setHighlighted(arr);
    }
  }, []);

  const divClicked = (tile: Tile) => {
    if (isHighlighted(tile.i, tile.j)) {
      setHighlighted(highlighted.filter((e) => !(e.i === tile.i && e.j === tile.j)));
    } else {
      setHighlighted([...highlighted, tile]);
    }
  };

  const isHighlighted = (i: number, j: number) => {
    return !!highlighted.find((e) => e.i === i && e.j === j);
  };

  return (
    <div className={`container-fluid ${styles.gridContainer}`}>
      {Array.from({ length: rows }, (_, i) => {
        return (
          <div className={`row justify-content-center ${styles.tileRow}`}>
            {Array.from({ length: cols }, (_, j) => {
              return (
                <div
                  className={`${styles.tile}`}
                  style={{
                    backgroundColor: isHighlighted(i, j) ? "red" : "black",
                    margin: random ? "-2.5px 2.5px" : "0px 5px",
                    width: random ? "40px" : "100px", //was width: random ? "2vw" : "4vw"
                    height: random ? "40px" : "100px", //was height: random ? "2vw" : "4vw"
                  }}
                  onClick={() => (random ? null : divClicked({ i, j }))}
                >
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridLayout;
