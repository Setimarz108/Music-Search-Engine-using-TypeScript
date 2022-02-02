import { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

// https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever

const Home = () => {
  const [music, setMusic] = useState<Music[]>([]);

  useEffect(() => {
    getMusic();
  }, []);

  interface Music {
    title: string;
    cover: string;
  }

  const getMusic = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever"
      );
      if (response.ok) {
        let music = await response.json();
        console.log(music);
        setMusic(music.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>Music Player on development</h1>
      </div>
     
     <div style={{display: 'flex', flexWrap: 'wrap', marginLeft:"10%"}}>
      {music.map((album) => (

             <Col className="">
            <Card className="album mb-3" style={{ width: "18rem" }}>
              <Card.Img className="mt-3"variant="top" src={album.cover} />
              <Card.Body>
                <Card.Title className="mt-3">{album.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col> 
       
      ))} </div>
    </>
  );
};

export default Home;
