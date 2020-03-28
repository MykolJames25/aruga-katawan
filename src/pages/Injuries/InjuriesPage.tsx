import React from 'react';
import './injuries.css';
import data from "./injuriesData.json"
import Footer from '../../component/Footer/Footer';

interface SelectedInjury {
    id: number,
    injuryName: string,
    img: string,
    injuryDetails: any[]
}

interface LocalState {
    selectedBodyPart: SelectedInjury | null;
    selectedInjury: any;
}

const injuryImage = [
    require("../../img/inj_leeg-01.svg"),
    require("../../img/inj_balikat-01.svg"),
    require("../../img/inj_siko-01.svg"),
    require("../../img/inj_pulso-01.svg"),
    require("../../img/inj_daliri-01.svg"),
    require("../../img/inj_likod-01.svg"),
    require("../../img/inj_baywang-01.svg"),
    require("../../img/inj_tuhod-01.svg"),
    require("../../img/inj_bukod-01.svg")
]

class Injuries extends React.Component<any, LocalState> {
    injuriesData: SelectedInjury[] = [];
    constructor(props: any) {
        super(props)
        this.renderInjury = this.renderInjury.bind(this);
        this.state = {
            selectedBodyPart: null,
            selectedInjury: null
        }

        for (let injury of data) {
            let data = injury as SelectedInjury
            this.injuriesData.push(data)
        }
        console.log("InjuriesData", this.injuriesData)
    }

    async renderInjury(injury: any) {
        console.log("Selected Injury", injury)
        await this.setState({ selectedInjury: injury })
        console.log("State Selected Injury", this.state.selectedInjury)
    }

    render() {
        return (
            <div className="injuriesContainer">
                <div className="injuries">
                    <div className="injurySelect">
                        <div className="injuryHeader">Mga injuries</div>
                        <div className="injuryDetails">Maraming mga injuries ang pwedeng maganap sa katawan natin. Ang mga nakalagay lamang dito ay ang mga common injuries na pwede nating makuha kapag tayo ay nagta-trabaho. Laging tandaan: ang edukado ay laging panalo!</div>
                        <div className="injuryPanel">
                            {this.injuriesData.map((item, key) =>
                                <div key={key} className="injuryItem" onClick={() => {
                                    console.log("Selected Body Part", item)
                                    this.setState({ selectedBodyPart: item, selectedInjury: item.injuryDetails[0] })
                                }}>
                                    <div className="injuryItemName">{item.injuryName}</div>
                                    <img style={{ height: "auto" }} src={injuryImage[key]} className="injuryItemImage" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="selectedInjuryContainer">
                        {this.state.selectedBodyPart != null &&
                            <div className="selectedInjury">
                                <div className="selectedInjuryHeader">
                                    <div className="selectedInjuryHeaderText">Mga Injury sa {this.state.selectedBodyPart.injuryName}</div>
                                </div>
                                <div className="injuryTabsContainer">
                                    {this.state.selectedBodyPart.injuryDetails.map((item, key) =>
                                        <div key={key} className="injuryTabs" onClick={() => { this.renderInjury(item) }}>
                                            {item.title}
                                        </div>
                                    )}
                                </div>
                                {this.state.selectedInjury != null &&
                                    <div className="injuryDetailsContainer">
                                        <div className="injuryTitle">
                                            {this.state.selectedInjury.title}
                                        </div>
                                        <div className="injuryBody">
                                            {this.state.selectedInjury.detail}
                                        </div>
                                        <div className="injuryDetailsHeader">
                                            Cause
                                        </div>
                                        <div className="injuryCauseItems">
                                            {this.state.selectedInjury.cause.list.map((item: any, key: any) =>
                                                <div key={key}> - {item}</div>
                                            )}
                                        </div>
                                        <div className="injuryDetailsHeader">
                                            Symptoms
                                        </div>
                                        <div className="injurySymptomsItems">
                                            {this.state.selectedInjury.symptoms.list.map((item: any, key: any) =>
                                                <div key={key}> - {item}</div>
                                            )}
                                        </div>
                                    </div>
                                }
                            </div>}
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Injuries;