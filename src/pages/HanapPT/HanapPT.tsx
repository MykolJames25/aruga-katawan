import React from 'react';
import './hanappt.css';
import Footer from '../../component/Footer/Footer';
import Dropdown from 'react-dropdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactList from 'react-list';
import GoogleMapReact from 'google-map-react';
import 'react-tabs/style/react-tabs.css';
import 'react-dropdown/style.css';

const location = [
    'Muntinlupa', 'Makati', 'Manila', 'Navotas', 'Quezon City', 'Las Pinas', 'Taguig', 'Pasay', 'Paranaque', 'Pasig', 'San Juan', 'Malabon', 'Valenzuela', 'Caloocan', 'Pateros', 'Marikina'
];

const defaultOption = location[0];

class HanapPT extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    renderItem(index: any, key: any) {
        return <div key={key} className="locationItem">
            <div className='clinicName'>Clinic Name</div>
            <div>115 Example Street, Murilla Heights Sbvd. Muntinlupa City</div>
            <div>00:00AM - 00:00PM | Call: 888-8888</div>
            <div className="clinicUrl">
                {/* <Link to="/aruga-katawan/katawan"> */}
                <div className="clinicBtn">Directions&nbsp; &nbsp;></div>
                {/* </Link>
                <Link to="/aruga-katawan/katawan"> */}
                <div className="clinicBtn">Website &nbsp; &nbsp;></div>
                {/* </Link> */}
            </div>
        </div>
    }
    render() {
        return (
            <div className="hanapPTContainer">
                <div className="hanapPT">
                    <div className="hanapPTSelect">
                        <div className="hanapPTHeader">Hanap PT</div>
                        <div className="hanapPTPanel">
                            <Tabs className="panel">
                                <TabList>
                                    <Tab>Home Based</Tab>
                                    <Tab>Klinika</Tab>
                                </TabList>
                                <TabPanel >
                                    <Dropdown options={location} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                                    <div style={{ overflow: 'auto', maxHeight: 400 }}>
                                        <ReactList
                                            itemRenderer={this.renderItem}
                                            length={100}
                                            type='uniform'
                                        />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <Dropdown options={location} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                                    <div style={{ overflow: 'auto', maxHeight: 400 }}>
                                        <ReactList
                                            itemRenderer={this.renderItem}
                                            length={100}
                                            type='uniform'
                                        />
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <div className="mapContainer">
                        <GoogleMapReact
                            // style={{ width: "100%", height: "500" }}
                            bootstrapURLKeys={{ key: "AIzaSyA1g28SRG9CvT_2jbNEd-16foK03-HVP-E" }}
                            defaultCenter={{lat: 59.95, lng: 30.33}}
                            defaultZoom={11}
                        />
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default HanapPT;