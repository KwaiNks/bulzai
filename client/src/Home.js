
import { Card, Container } from 'semantic-ui-react';
import Game1 from "./gameImages/game1.jpg"
import Game2 from "./gameImages/game2.jpg"
import Game3 from "./gameImages/game3.jpg"

function Home({ user, navigate}) {

  if (user) {
    return (
      <>
        <h3 id="welcome">Welcome, {user.username}!</h3>
        <Container>
        <Card.Group>
        <Card color='red' image={""} />
        <Card color='orange' image={Game1} />
        <Card color='yellow' image={Game2} />
        <Card color='yellow' image={Game3} />
        </Card.Group>
        </Container>
        
      </>   
    )
  }
  else {
    return (
      <>
       {navigate("/login")}
      </>
    )
  }
}
export default Home;