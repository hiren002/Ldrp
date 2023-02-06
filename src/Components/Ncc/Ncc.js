import React, { useState } from 'react'
import nccdata from "./nccdata.json"
const Ncc = () => {

    const [current, setCurrent] = useState(0)
    const [allimges, setAllimages] = useState(nccdata)
    const [nextitems, setNextitems] = useState("")




    return (
        <>
            <div className="p-14 max-w-full">
                <div className="max-w-full flex">
                    <div className='mb-6 items-center flex justify-end w-[50%] ml-[10%] gap-[2%]'>
                        <img src="line.png" alt="" />
                        <p className='aboutheads text-4xl'>NCC</p>
                    </div>
                    <div className='flex justify-end w-[50%]' >
                        <img src="Images/bluelines2.png" alt="" />
                    </div>
                </div>
                <div className="content text-center mt-4 " >
                    <p className='text-base font-normal leading-6 tracking-normal text-center font-sans'>NCC provides a suitable environment to motivate the youth to take up a career in the Armed Forces and Develop Character,Comradeship,Discipline,Leadership,Secular Outlook, <br /> Spirit of Adventure and  Ideals of Selfless Service among the Youth of the Country.</p>
                </div>

                <div className="max-w-full mt-4 mb-4 flex justify-center align-middle flex-col overflow-hidden">
                    <div className="elip1 relative top-[50px] z-10 " >
                        <img src="Images/elipse1.png" alt="" />
                    </div>
                    <div className=" nccimges flex justify-center  ">
                        {
                            allimges.slice(0,4).map((ele) => {
                                const { img, id } = ele
                                return (
                                    <div className='nccimges' key={id}  >
                                        <img className='mx-2' style={{width: "356.54px",height: "395.68px"}} src={img} alt="" />
                                    </div>
                                )

                            })
                        }

                        {/* {
                            allimges.reduce((acc,current, ) => {
                               
                                }
                            }, {})
                        } */}

                    </div>
                    <div className="elip1 relative top-[-50px] " ><img src="Images/elipse2.png" alt="" /></div>
                </div>

                <div className="flex justify-center text-center align-middle flex-col">
                    <p> LDRP is having 50 seats of NCC which is running under 9 BT Gujarat Ahmedabad, NCC.
                        Cadets are having parade on every Monday.
                    </p>
                    <p>Every year Cadets have celebrated Kargil Vijay Diwas, Republic Day and Independence Day and have  given their services in every college events and programme
                        Cadets have attended Advance Leadership Camp, Basic Leadership Camp, National Integration Camp, CATC and NCC National Games.
                    </p>
                </div>


            </div>



        </>
    )
}


export default Ncc