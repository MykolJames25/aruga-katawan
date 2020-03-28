import React from 'react';
import './physiotherapy.css';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';

const physioImage = [
  require("../../img/anoba_1-01.svg"),
  require("../../img/anoba_2-01.svg"),
  require("../../img/anoba_3-01.svg"),
  require("../../img/anoba_4-01.svg"),
  require("../../img/anoba_5-01.svg")
]
class Physiotherapy extends React.Component {
  render() {
    return (
      <div className="physiotherapyContainer">
        <div className="physiotherapyHeader">
          <div className="physiotherapyHeaderContent">
            <h1>Ano ba ang Physiotherapy?</h1>
            <p>Kailangan ba ito sa buhay natin? Saan ba ito makakatulong at bakit mahalaga ito mas lalo na sa mga nagtatrabaho?</p>
          </div>
        </div>
        <div className="psyArticleContainer">
          <div className="psyArticle">
            <div className="psyArticleDetails">
              <h1>Nakakatulong ito, pramis.</h1>
              <div className="psyArticleText">Ang physiotherapy, o pisikal na terapyutika, ay ang proseso ng pag-recover at tuluyang pag-iwas o rehabilitate ng mga sakit sa katawan sa pamamagitan ng mobility treatment o pag-eehersisyo, masahe at iba pa. </div>
            </div>
            <img src={physioImage[0]} className="psyArticleImage" />
          </div>
        </div>
        <div className="separator">Ano ba ang ginagawa dito?</div>
        <div className="separatorContentContainer">
          <img src={physioImage[1]} className="separatorImageMain" />
          <div className="separatorDetail">
            <div className="separatorText">Dahil ang physiotherapy ay ang kasagutan sa mga sakit-saskit na nararamdaman natin sa ating mga katawan, ang pangunahing ginagawa dito ay ang pag ehersisyo ng mga naturang muscles na nasaktan upang mawala ang sakit at lumakas para hindi na mauulit ang dating injury, at tuluyang makakabalik ang tao sa kanilang mga dating gawi.</div>
            <div className="separatorHeader">Di ba masahe lang sakto na?</div>
            <div className="separatorText">Kung pwede sana masahe lang, sapat na. Pero mahirap ang buhay kaya hindi lagi naaayon ang buhay sa ating mga kagustuhan. Ang masahe ay parte lamang ng proseso ng physiotherapy sapagkat mayroon pang mga ibang kailangan gawin upang gumaling ang mga sira nating mga katawan. Sa physiotherapy, mayroong tatlong pangunahing proseso ang dadaanan ng pasyente hanggang sa siya ay gumaling. Ito ay ang Pain Management, Exercise and Strengthening, at ang Reinforcement.
            </div>
          </div>
        </div>
        <div className="phiContentContainer">
          <div className="phiAboutItems">
            <div className="phiItems">
              <img src={physioImage[2]} className="phiItemImg" />
              <div className="phiItemTitle">Pain Management</div>
              <div className="phiItemText">Inuuna ito upang mabawasan ang sakit ng injury, at para ihanda ang pasyente sa mga sumusunod na gawain. Ang masahe o soft tissue release ay isang halimbawa nito. Ang pag-yeyelo o paglalagay ng hotpack sa may sakit ay halimbawa rin ng pain management.</div>
            </div>
            <div className="phiItems">
              <img src={physioImage[3]} className="phiItemImg" />
              <div className="phiItemTitle">Exercise & Strengthening</div>
              <div className="phiItemText">Ang pinakamahalaga na proseso dahil ito ang dahilan sa tuluyang paglakas at pagwala ng sakit sa katawan kapag ginawa ito ng maayos. Pinapalakas ang mga muscle na naapektuhan sa pamamagitan ng mga simpleng ehersisyo at pagbubuhat na kung saan nakatungo ang ginagawa sa sakit ng katawan.</div>
            </div>
            <div className="phiItems">
              <img src={physioImage[4]} className="phiItemImg" />
              <div className="phiItemTitle">Reinforcement</div>
              <div className="phiItemText">Upang mabawasan ang nararamdamang sakit pagkatapos ng physiotherapy, ginagawa ang reinforcement para malimit ang galaw sa naapektuhang parte ng katawan. Halimbawa nito ay ang paglalagay ng muscle o white tape sa naapektuhang muscle para hindi masyado magalaw ito.</div>
            </div>
          </div>
        </div>
        <div className="puntaNa">
          <div className="puntaNaText">Gets mo na? Oras na para malaman ang mga iba't ibang parte ng katawan natin!
          </div>
          <Link to="/aruga-katawan/katawan">
            <div className="puntaNaBtn">Punta na! &nbsp; &nbsp;></div>
          </Link>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Physiotherapy;
