import React from 'react';
import './remedies.css';
import Footer from '../../component/Footer/Footer';

function Remedies() {
  return (
    <div className="remediesContainer">
      <div className="remediesHeaderContainer">
        <div className="remediesHeader">KAUNTING KAALAMAN!</div>
        <div className="remediesHeaderText">Kahit epektibo ang mga ito, limitado lamang ang tulong na mabibigay ng mga tutorial na ito. Mas maganda kapag ikaw ay magpunta sa mga propesyonal na physiotherapists para siguradong sigurado ang paggaling mo!</div>
      </div>
      <div className="remediesBodyContainer">
        <div className="remediesBodyHeader">Ano sumasakit sayo?
        </div>
        <div className="remediesBodyText">
          Gamit ng katawan sa baba, hanapin lamang at pindutin mo kung saan mo nararanasan ang sakit upang malaman ang mga dapat gawin para guminhawa ito. Tara at subukan na!
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Remedies;
