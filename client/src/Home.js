
import { Card } from 'semantic-ui-react';
import Game1 from "./gameImages/game1.jpg"
import Game2 from "./gameImages/game2.jpg"
import Game3 from "./gameImages/game3.jpg"

function Home({ user, navigate}) {

  if (user) {
    return (
      <>
        <h3 id="welcome">Welcome, {user.username}!</h3>
       
        <div id="container">
        
        <Card color='orange' image={Game1} onClick={() => navigate("/gameone")} />
        <Card color='yellow' image={Game2} onClick={() => navigate("/gametwo")}/>
        <Card color='yellow' image={Game3} onClick={() => navigate("/gamethree")}/>

        </div>

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