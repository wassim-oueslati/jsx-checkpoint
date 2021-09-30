import './Style.css';
import myWonderfulImage from "./imageInSrc.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">Your name here</h1>
      <br/>
      <img src={myWonderfulImage} alt="imageInSrc"/>
      <br/>
      <img src="/imageInPublic.jpg" alt="imageInPublic"/>
      </div>
      <video className="vid"  controls>
      <source src={"myVideo.mp4"} type="video/mp4"/>
      </video>
    </div>
);
}
export default App;
