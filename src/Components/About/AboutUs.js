import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className=" p-14 max-w-full">
                <div className="max-w-full flex">
                    <div className='mb-6' style={{ alignItems: "center", display: "flex", justifyContent: "flex-end", width: "50%",marginLeft: "10%",gap:"2%" }}>
                        <img src="/Images/line.png" alt="" />
                        <p className='aboutheads text-4xl'>About Us</p>
                    </div>
                    <div style={{display:" flex",justifyContent:"flex-end",width:"50%"}}>
                        <img src="/Images/bluelines2.png" alt="" />
                    </div>
                </div>
                <div className="content text-center ">
                    <p className='aboutheads my-6 text-4xl mb-20'>LDRP Institute of Technology and Research</p>
                    <p className='text-base font-normal leading-6 tracking-normal text-center' style={{fontFamily:"Work Sans"}}>LDRP INSTITUTE OF TECHNOLOGY AND RESEARCH, Gandhinagar was established in 2005 – 2006. The college has made steady progress during the past one year of its existence. <br />
                        Established as a pace setting Institute of Technical Education imparting undergraduate and postgraduate education,
                        it has played a vital role in engineering colleges of Gujarat. <br /> In this mission today it has progressed to offering several B.E., M.B.A. and M.C.A. Programs and facilities. <br />
                        LDRP INSTITUTE OF TECHNOLOGY AND RESEARCH, Gandhinagar is a constituent institute of Kadi Sarva Vishwavidyalaya.</p>
                </div>


            </div>


        </>
    )
}

export default AboutUs