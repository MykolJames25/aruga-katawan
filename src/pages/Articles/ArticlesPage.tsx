import React from 'react';
import './articles.css';
import { Link } from 'react-router-dom';


const articleImage = [
  require("../../img/pt_1-01.svg"),
  require("../../img/pt_2.svg"),
]
class Articles extends React.Component<any, any> {
  render() {
    return (
      <div className="articlesContainer">
        <div className="articleHeader">
          <div className="articleHeaderContent">
            <div className="articleHeaderTitle">Hanap-PT</div>
            <div className="articleHeaderText">Ngayon na alam mo na ang kahalagagan ng physiotherapy, baka
            naisip mo na maghanap ng pwedeng puntahan na mumurahin lang.
            Huwag mag-alala, mayroon ring mga PT na pwede pumunta sa bahay
            mo para di ka na kailangan umalis. Pumili lang sa dalawa ang mas
            madali para sayo!
          </div>
          </div>
          <div className="articleHeaderContentSelect">
            <Link to="/aruga-katawan/location">
              <div className="articleSelectItem">
                <div className="articleSelectItemText">
                  <div className="articleSelectItemTitle">Home-based</div>
                  <div className="articleSelectItemDetail">Kapag hindi mo kaya pumunta sa mga klinika, mayroong
                  mga PT na nagbibigay ng home-service. I-click mo na
                  ito para malaman pa!
              </div>
                </div>
                <img src={articleImage[0]} className="articleSelectItemImage" />
              </div>
            </Link>

            <Link to="/aruga-katawan/location">
              <div className="articleSelectItem">
                <div className="articleSelectItemText">
                  <div className="articleSelectItemTitle">Klinika</div>
                  <div className="articleSelectItemDetail">Mga pwedeng puntahan na PT sa kanilang mga klinika
                  sa loob ng NCR. Simulan na ang landas patungo sa
                  magaling na katawan!
              </div>
                </div>
                <img src={articleImage[1]} className="articleSelectItemImage" />
              </div>
            </Link>

            {/* <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Send Mail</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
