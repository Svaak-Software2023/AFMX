import React from 'react'
import CommunityCollege from './IndustriesItem/Community College/CommunityCollege'
import LiberalArtsCollege from './IndustriesItem/Liberal Arts College/LiberalArtsCollege'
import LeftMenue from '../../components/leftmenu/LeftMenu'
import industryData from "../../assets/data/industriesWeServeData.json";
import IvyLeagueUniversity from './IndustriesItem/Ivy League University/IvyLeagueUniversity';


function NewPage() {
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                        <LeftMenue
                            type="Industries We Serve"
                            data={industryData}
                            url={`/industries-list`}
                        />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="mb-3">
                            <CommunityCollege />
                        </div>
                        <div className="mb-3">
                            <LiberalArtsCollege />
                        </div>
                        <div className="mb-3">
                            <IvyLeagueUniversity />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewPage