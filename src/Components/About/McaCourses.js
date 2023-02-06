import React from 'react'

const McaCourses = () => {
    return (
        <>
            <div className="max-w-full">

                <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                    <div className="mb-4">
                        <div className="flex justify-center"> <img src="/Images/mcapic.png" alt="" /></div>

                    </div>
               

                    <div className="mb-4 mca">
                        <div style={{width: "100%"}}>
                            <table class="table-auto table" style={{ textAlign: "center", width: "80%" }}>
                                <thead>
                                    <tr className='h-16' style={{ background: " #F3F3F3" }}>
                                        <th><div className="flex" style={{ marginLeft: "8%", color: "#1B6CE1 " }}>MBA / MCA Course</div></th>
                                        <th style={{ borderLeftWidth: " 1px", borderRightWidth: "1px", color: "#1B6CE1" }}>Intake <br /> Intake</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <div className='flex pt-4' style={{ marginLeft: "8%", marginBottom: "2%" }}>     M.B.A. Programme</div> </td>
                                        <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                    </tr>
                                    <tr>
                                        <td><div className='flex' style={{ marginLeft: "8%", marginBottom: "2%" }}>M.C.A. Programme</div></td>
                                        <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                    </tr>
                                </tbody>
                            </table>
                            <div className='flex justify-start mcapara text-xl'><p>BCA / B.Sc CS / B.Sc IT / BE Computer / IT Studentscan get an <br />
                                admission as a Lateral Entry also (Directly in MCA 2nd year)</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default McaCourses