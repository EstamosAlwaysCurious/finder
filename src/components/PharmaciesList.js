import React from "react";
import PharmacyItem from "./PharmacyItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSyringe, faTruck, faLaptopMedical, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import pharmFind from "../images/LogoMakr_1cvDUu.png";
import w3wlogo from "../images/w3w_logo.png";

class PharmaciesList extends React.Component {
    render() {
        const pharmacies = this.props.pharmacies

        return (

            <div id="list-pharmacy" className="row">
                <div className="appRow mx-auto col-12 col-lg-9">
                    <div className="card bg-white mb-2" >

                        <div className="card-header bg-transparent">
                            <div className="row">
                                <div className="col-9 col-md-6">
                                    <h5>Pharmacies Found! <img src={pharmFind} alt="icon magnifier with pharmacy symbol" width="30 px" /></h5>
                                </div>
                                <div className="col-8 col-md-6 d-flex justify-content-center">
                                    <h6>(Click <img width="20 px" src={w3wlogo} alt="w3wLogo" /> to find location)</h6>
                                </div>
                            </div>
                            <div className="row taskRow">
                                <div className="col-2 col-md-2">
                                    <h5><FontAwesomeIcon icon={faMapMarked} /></h5>
                                </div>
                                <div className="col-10 col-md-3 ">
                                    <h5>Town</h5>
                                </div>

                                <div className="col-8 col-md-4 d-flex justify-content-around">
                                    <h5><FontAwesomeIcon icon={faMoon} /></h5>
                                    <h5><FontAwesomeIcon icon={faSyringe} /></h5>
                                    <h5><FontAwesomeIcon icon={faTruck} /></h5>
                                    <h5><FontAwesomeIcon icon={faLaptopMedical} /></h5>
                                </div>
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="card-text">

                                {pharmacies.map(pharmacy => {
                                    return <PharmacyItem deleteItemFunc={this.props.deleteItemFunc} updateItemFunc={this.props.updateItemFunc} location={pharmacy.location} town={pharmacy.town} key={pharmacy.id} id={pharmacy.id} late={pharmacy.late} vaccine={pharmacy.vaccine} delivery={pharmacy.delivery} e_pres={pharmacy.e_pres} date={pharmacy.date} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PharmaciesList;