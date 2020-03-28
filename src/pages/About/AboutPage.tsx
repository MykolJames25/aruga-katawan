import React from 'react';
import './about.css';
import Footer from '../../component/Footer/Footer';

const aboutImage = [
  require("../../img/about_1-01.svg"),
  require("../../img/about_2-01.svg"),
  require("../../img/about_3-01.svg"),
]
class About extends React.Component {

  render() {
    return (
      <div>
        <div className="aboutHeaderContainer">
          <div className="aboutDetails">
            <div className="aboutTitle">Para saan ba 'to?</div>
            <div className="aboutText">Ang ArugaKatawan ay isang proyektong thesis ni Kenneth James, at ito ay isang website na nagpapahayag ng kahalagaan sa pag-trato ng ating mga katawan sa pamamagitan ng pisikal na terapyutika.</div>
          </div>
        </div>
        <div className="aboutContentContainer">
          <div className="about">
            <div className="aboutMain">ArugaKatawan - adbokasiya tungo sa kaginhawaan ng katawan</div>
            <div className="aboutContent">Iisa lamang anag ating katawan kaya ay dapat mahalin ito ng walang hanggan. Maipapakita ng ArugaKatawan kung bakit napaka-importante na malaman natin ang physiotherapy o pisikal na terapyutika, at ang mga proseso nito. Hindi lang para sa mayaman ang physiotherapy, para ito sa lahat.</div>
          </div>
          <div className="aboutItems">
            <div className="items">
              <img src={aboutImage[0]} className="itemImg" />
              <div className="itemTitle">Matuto!</div>
              <div className="itemText">Hindi sapat ang hilot! Kailangan natin malaman  paano gumagaling ang ating mga muscle at makukuha dito ang mga detalye na nais mong masulyap.</div>
            </div>
            <div className="items">
              <img src={aboutImage[1]} className="itemImg" />
              <div className="itemTitle">Umaksyon!</div>
              <div className="itemText">Kung gusto natin gumaling ang katawan, kinakailangan ang pag-eehersisyo at pag-alaga. Sabi nga nila: walang mangyayari kapag walang ginagawa.</div>
            </div>
            <div className="items">
              <img src={aboutImage[2]} className="itemImg" />
              <div className="itemTitle">Magtanong!</div>
              <div className="itemText">Mas maganda palagi kapag may propesyonal kang kasalamuha. Mayroong maraming mga klinika na swak sa presyo kaya dapat bigyan tingin rin ang kapakanan ng katawan mo!</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
