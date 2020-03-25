import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("Home Props", window.innerHeight);
    // this.state = {
    //   height: 0,
    //   width: 0
    // }

  }

    //   componentDidMount() {
    //     this.updateWindowDimensions();
    //     window.addEventListener("resize", this.updateWindowDimensions);
    // }
    // updateWindowDimensions = () => {
    //   console.log("Inner Height", window.innerHeight);
    //   console.log("Inner Width", window.innerWidth);
    //   this.setState({ width: window.innerWidth, height: window.innerHeight });
    // };
  render() {
    const videoSource = require("./homeBG.mp4");
    return (
      <div className="homeContainer">
        <div className="homeArticle">
          <div className="articleTitle">Ang katawan ay ang ating kapital.</div>
          <div className="articleText">Ang physiotherapy ay ang solusyon para sa mga masasakit ninyong katawan. Mahirap magtrabaho kapag nakakaramdam ng sakit sa katawan, diba? Kaya dapat agapan kagad habang hindi pa ito hadlang sa trabaho. Halina at alamin kung paano nakakatulong ang physiotherapy sa ating buhay.</div>

          <Link to="/physiotherapy">
            <div className="articleBtn">Alamin Dito &nbsp; &nbsp;></div>
          </Link>
        </div>
        <div className="videoBackground" >
          <video autoPlay={true} loop={true} muted>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  }
}

export default Home;
