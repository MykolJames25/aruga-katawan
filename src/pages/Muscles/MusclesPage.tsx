import React from 'react';
import ImportantMessage from '../../component/ImportantMessage/ImportantMessage';
import './muscles.css';
import { Link } from 'react-router-dom';

class Muscles extends React.Component {
  render() {
    return (
      <div className="katawanContainer">
        <div className="katawanHeader">
          <div className="katawanHeaderContent">
            <h1>Ang Ating Katawan</h1>
            <p>Ang katawan ay ang ating capital, kaya dapat ay laging ingatan ito at umiwas sa sakuna.</p>
          </div>
        </div>
        <div className="katArticleContainer">
          <div className="katArticle">
            <div className="katArticleDetails">
              <h1>Ano kaya masakit sa akin?</h1>
              <div className="katArticleText">Mahalaga ang mga muscles natin dahil ito ang dahilan kaya tayo ay nakakagalaw. Normal lang masaktan, pero mas maganda kung alam natin ano nangyayari sa muscle natin kapag tayo ay nasasaktan.</div>
            </div>
            <div className="katArticleImage">
            </div>
          </div>
        </div>
        <div className="separator">
          Mga Muscle Sa Katawan
        </div>
        <div className="separatorContentContainer">
          <div className="separatorImageMain">
          </div>
          <div className="separatorDetail">
            <div className="separatorText">Pinapalibutan ang ating katawan ng muscle. Sila ay ang dahilan kung bakit ang katawan mo ay kung ano siya ngayon. Hindi lang iyon, kahit ang mga kalooban ng ating mga laman-loob ay gawa rin sa muscle. Ang dahilan kung bakit umiikot ang dugo sa ating katawan o bumababa ang ating kinakain sa tiyan natin ay dahil sa mga muscle na nagtatrabaho sa loob natin. Ang muscle rin ang dahilan kung bakit tayo nakakagalaw mismo. Binubuo tayo ng nasa 650-800 muscles at lahat iyon ay nagtutulong tulong upang maayos ang pag-function ng ating mga katawan. Swabe diba?</div>
            <div className="separatorHeader">Ano ang nangyayari kapag may injury na nagaganap?</div>
            <div className="separatorText">Samakatuwid, nagaganap ang muscle injury kapag ito ay nasobrahan sa punit dahil sa kahit anong gawain. Normal naman ang pagpupunit ng muscle sapagkat ito ay laging nangyayari kapag tayo ay may ginagawang nakakapagod kagaya ng pagbubuhat o pagtatakbo. Pagkatapos nito ay sariling gumagaling ang mga nagawang punit at ito ang dahilan kung bakit lumalaki ang muscle at lumalakas ang tao. <br /><br />
            Sa pag-sobra lamang ng paggamit ng muscle ay kung saan nagdudulot ng injury. Sa oras na ito, sa sobrang punit ay hindi nagagawa ang self-healing ng muscle kaya nagdudulot ito ng sakit. Maaaring hindi natin mararamdaman ang sakit dahil sa adrenaline na umiikot sa katawan natin gawa ng ating utak kapag tayo ay nasa trabaho. Lalabas lang ang sakit ilang oras matapos tayo magpahinga. Mapapansin natin sa injury ay ang pag-maga at pag-iba ng kulay ng balat at ito ang indikasyon na may problema sa mga naturang muscles doon. Masama ang pagbalewala ng indikasyon na ito dahil kapag patuloy ang paggamit ng naturang muscles ay baka mas lalo pa itong mapunit hanggang sa magkakaroon ka ng bagong injury at mahirapan ka sa paggaling. <br /><br />
            Maraming mga iba't ibang injury sa ating katawan, maging strain man o sprain. Hindi pala natin alam na mayroon na tayong mga injury sa ating katawan, kaya halina at I-click ito upang malaman ang mga common na injury sa katawan.
            </div>
          </div>
        </div>
        <div className="puntaNa">
          <div className="puntaNaText">Masakit talaga pag pinipilit. Kaya kung ako sayo, maghahanap ako kung paano gumaling ang injury ko!
          </div>
          <Link to="/physiotherapy">
            <div className="puntaNaBtn">Punta na! &nbsp; &nbsp;></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Muscles;
