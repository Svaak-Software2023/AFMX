import React from 'react'
import data from "../../assets/data/careerAndEmployment/carrerAndEmployment.json"
function JobDescription({ tonglehandler, title }) {
    const JobData = data.find((item) => item.title === title)
    console.log("JobData", JobData);
    return (

        <div className="container bg-white my-2">

            <div className="tab-pane show active  p-lg-5 p-2" >
                <div className="row">
                    <div className="content mt-3">
                        {JobData.description && <>
                            <p><b>Description</b></p>
                            <p className="font-14">{JobData.description}</p>
                        </>}
                        {(JobData.responsibility.length > 0) && <><p><b>Role and responsibility</b></p>
                            <ul className="apply-job-list">
                                {JobData.responsibility.map((item, index) =>
                                    <li key={index}>{item.text}</li>
                                )}
                            </ul></>}
                        {(JobData.requirment.length > 0) && <> <p><b>Requirment</b></p>
                            <ul className="apply-job-list">
                                {JobData.requirment.map((item, index) =>
                                    item.text ? <li key={index}><b>{item?.bold}</b> {item.text}</li>
                                        : <p className='my-3'><b>{item.heading}</b></p>
                                )}
                            </ul>
                        </>}
                        {(JobData.qualifications.length > 0) && <> <p><b>Qualifications</b></p>
                            <ul className="apply-job-list">
                                {JobData.qualifications.map((item, index) =>
                                    item.text ? <li key={index}><b>{item?.bold}</b> {item.text}</li>
                                        : <p className='my-3'><b>{item.heading}</b></p>

                                )}
                            </ul>
                        </>}
                        {(JobData.sheduale?.length > 0) && <> <p><b>Schedule</b></p>
                            <ul className="apply-job-list">
                                {JobData.sheduale.map((item, index) =>
                                    <li key={index}>{item.text}</li>
                                )}
                            </ul>
                        </>}
                        {(JobData.benefits?.length > 0) && <> <p><b>Benefits</b></p>
                            <ul className="apply-job-list">
                                {JobData.benefits.map((item, index) =>
                                    <li key={index}>{item.text}</li>
                                )}
                            </ul>
                        </>}

                        {JobData.jobType && <p><b>Job-Type :</b> {JobData.jobType}</p>}
                        {JobData.experience && <p><b>Experience :</b> {JobData.experience}</p>}
                        {JobData.location && <p><b>Work Location :</b> {JobData.location}</p>}

                    </div>
                </div>
            </div>
            <div className="apply-job-button pb-3">
                <button onClick={tonglehandler}>Apply</button>
            </div>
        </div>
    )


}

export default JobDescription