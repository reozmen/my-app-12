import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  //* const {name, img, statistics} = props => yukarıdaki parametreyi props olarak alırsak bu şekilde de destructure edebiliriz

  const handleClick = () => setShowImage(!showImage);
  return (
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      //   onClick={() => setShowImage(!showImage)}
      onClick={handleClick}
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return (
              <li key={i} className="h-5 text-start list-unstyled">
                🏀 {item}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
