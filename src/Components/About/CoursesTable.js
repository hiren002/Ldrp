import React, { useState } from 'react'

import data from '../data.json'
const CoursesTable = () => {
    // eslint-disable-next-line
    const [allData, setAllData] = useState(data)
    return (
        <>
            <div className="max-w-full">
                <div className=" p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 " style={{ gap: "6%" }}>
                    <div className="mb-4">
                        <table class="table-auto table" style={{ textAlign: "center", width: "100%" }}>
                            <thead>
                                <tr  className='h-16 text-2xl' style={{ background: "#F3F3F3" }}>
                                    <th>
                                    <div className="flex " style={{ marginLeft: "8%", color: "#1B6CE1" }}>UG Course</div>
                                    </th>
                                    <th style={{ borderLeftWidth: " 1px", borderRightWidth: "1px", color: "#1B6CE1" }}>1st Shift <br /> Intake</th>
                                    <th style={{ color: "#1B6CE1 " }}>2nd Shift <br /> Intake</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <div className='flex pt-4' style={{ marginLeft: "8%" }}>Civil Engineering 60</div> </td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td><div className='flex pt-4' style={{ marginLeft: "8%" }}>Automobile Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td><div className='flex pt-4' style={{ marginLeft: "8%" }}>Electronics & Communication Engg</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>
                                    <td>--</td>
                                </tr>
                                <tr>

                                    <td><div className='flex pt-4' style={{ marginLeft: "8%" }}>Information Technology</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td><div className='flex pt-4' style={{ marginLeft: "8%" }}>Electrical Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td><div className='flex pt-4' style={{ marginLeft: "8%" }}>Computer Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>180</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td><div className='flex pt-4 mb-4' style={{ marginLeft: "8%" }}>Mechanical Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>
                                    <td>--</td>
                                </tr>
                                <tr style={{ background: " #1B6CE1", color: "white" }}>
                                    <td>
                                        <div className="flex" style={{ marginLeft: "8%" }}>Total Intake</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>
                                    <td>--</td>
                                </tr>
                                <tr style={{ height: "2vh" }}> </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="mb-4">

                        <table class="table-auto table" style={{ textAlign: "center", width: "100%" }}>
                            <thead>
                                <tr className='h-16' style={{ background: " #F3F3F3" }}>
                                    <th><div className="flex text-2xl" style={{ marginLeft: "8%", color: "#1B6CE1 " }}>PG Course  </div></th>
                                    <th className=' text-2xl' style={{ borderLeftWidth: " 1px", borderRightWidth: "1px", color: "#1B6CE1" }}>PG Intake </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <div className='flex pt-4' style={{ marginLeft: "8%" }}>  Civil Engineering 60</div> </td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                </tr>
                                <tr>
                                    <td><div className='flex  pt-4' style={{ marginLeft: "8%" }}>Automobile Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                </tr>
                                <tr>
                                    <td><div className='flex  pt-4' style={{ marginLeft: "8%" }}>Electronics & Communication Engg</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                </tr>
                                <tr>

                                    <td><div className='flex  pt-4' style={{ marginLeft: "8%" }}>Information Technology</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                </tr>
                                <tr>
                                    <td><div className='flex  pt-4' style={{ marginLeft: "8%" }}>Electrical Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                </tr>
                                <tr>
                                    <td><div className='flex  pt-4' style={{ marginLeft: "8%" }}>Computer Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>180</td>

                                </tr>
                                <tr>
                                    <td><div className='flex  pt-4 mb-4' style={{ marginLeft: "8%" }}>Mechanical Engineering</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                </tr>
                                <tr className='mt-4' style={{ background: " #1B6CE1", color: "white" }}>
                                    <td >
                                        <div className="flex  " style={{ marginLeft: "8%" }}>Total Intake</div></td>
                                    <td style={{ borderLeftWidth: " 1px", borderRightWidth: " 1px" }}>60</td>

                                </tr>
                                <tr style={{ height: "2vh" }}> </tr>

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

        </>
    )
}

export default CoursesTable