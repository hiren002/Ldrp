import React from 'react'

const Features = () => {
    return (
        <>
            <div className="p-14 max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="mb-4 flex justify-center">
                        <img src="/Images/featureimg.png" alt="" />
                    </div>
                    <div className="mb-4">
                        <div className='flex flex-col'><div className=""></div>
                            <p className='mb-9 featurehead' style={{ position: "relative", left: "5%" }}>Features</p>
                            <ul>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Admission through ACPC procedure (No Management / NRI Quota).</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Means & Meritorious Scholarship to the students.</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Air Condition Library from 8:00 A.M. to 8:00 P.M.</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Transportation Facility available from all the routes of Ahmedabad .</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Boys & Girls Separate Hostel Facility available.</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">ATM Facility in the campus.</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Fees as per Fee Regulatory Committee.</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Research Project Grants for faculties & students.</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Internet:  1 GBPS Internet with Fiber optics line   /  Wi-Fi Campus</div></li>
                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Placements :  Project & Job placement Assistance</div></li>

                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i>
                                    <div className="">Placement Partners : L&T Infotech, Infosys, Tech Mahindra, Syntel, iGate Patni,<br />
                                        MPhasis, eInfochip, IBM, Persistent, Cognizent, TCS, amdocs, ZEUS Learning,<br />
                                        ESSAR, AXELOR, BOSCH, GIPL, DRC System, argusoft, TATVA Soft, ADANI, MAVEN <br />
                                        VISTA, VERSE, RELIANCE, ANCHOR, TEGA Industries, KALYANI etc.
                                    </div>
                                </li>

                                <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className=""> MOU for Research & Development with well known Industries.</div></li>


                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Features