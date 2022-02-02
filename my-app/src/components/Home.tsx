import { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardGroup, Form} from "react-bootstrap";

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
        <h1 >Music Player on development</h1>
      </div>

      <Form className="mb-5" >
              <Form.Control
                type="search"
                 placeholder="type and press Enter" style={{
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid #c3ff0d",
                  borderRadius: "10px",
                  boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px ",
                  width:"50%",
                  height:"50%",
                  marginBottom:"40px"
                }}
              />
            </Form>
     
     <div style={{display: 'flex', flexWrap: 'wrap', marginLeft:"10%"}}>
      {music.map((album) => (

             <Col className="">
            <Card className="album mb-5" style={{ width: "12rem", marginBottom:"30px"}}>
              <Card.Img className="mt-3"variant="top" src={album.cover} />
              <Card.Body>
                <Card.Title className="mt-3">{album.title}</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
            </Card>
            </Col> 
       
      ))} </div>
    </>
  );
};

export default Home;
