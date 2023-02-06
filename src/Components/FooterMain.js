import React from 'react'

const FooterMain = () => {
    return (
        <div>
            <footer>
                <div className="p-14 footer max-w-full gap ">
                    <div className='flex justify-center'> <img src="bluelines.png" alt="" /></div>

                    <div className="footerin text.center mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 ">
                        <div className=" mb-6 footerstart">
                            <img src="ldrplogo.png" alt="" />
                            <p>Far far away, behind the word  <br /> mountains, far from the countries <br /> Vokalia and Consonantia</p>

                        </div>
                        <div className=" mb-6 footermid">
                            <div className="reachus">
                                <h1 style={{ fontSize: " 20px", fontWeight: "600" }}> <strong  >REACH US</strong>
                                </h1>
                                <ul >
                                    <li className='text-start flex'><i className="fa-solid fa-location-dot mx-4" style={{ position: "relative", marginBottom: " 9%", display: "flex", alignItems: "center" }}></i>
                                        <div className="">LDRP Institute of Technology & Research,<br /> Near KH-5,
                                            Sector-15,
                                            Gandhinagar - 382015.
                                        </div>
                                    </li>
                                    <li><i className="fa-regular fa-envelope mx-4"></i>info@ldrp.ac.in</li>
                                    <li><i className="fa-solid fa-phone-volume mx-4"></i>+ 91 - 079 - 23241492</li>
                                    <li><i className="fa-solid fa-blender-phone mx-4"></i>+ 91 - 079 - 23241493</li>
                                </ul>

                            </div>

                        </div>
                        <div className=" mb-6footerend">
                            <img className='rounded-2xl' src="map.png" alt="" />
                            <div className='flex justify-start items-center gap-6 mt-4 social'>
                                <a className='fb flex items-center justify-center w-10 h-10 rounded-full bg-red-400 mx-1 pt-1  hover:bg-red-600' href="/"><i className="fa-brands fa-facebook"></i></a>
                                <a className='insta flex items-center justify-center w-10 h-10 rounded-full bg-red-400 mx-1 pt-1  hover:bg-red-600' href="/"><i className="fa-brands fa-instagram"></i></a>
                                <a className='yt flex items-center justify-center w-10 h-10 rounded-full bg-red-400 mx-1 pt-1  hover:bg-red-600' href="/"><i className="fa-brands fa-youtube"></i></a>
                                <a className='linkedin flex items-center justify-center w-10 h-10 rounded-full bg-red-400 mx-1 pt-1  hover:bg-red-600' href="/"><i className="fa-brands fa-linkedin"></i></a>

                            </div>


                        </div>




                    </div>

                </div>


            </footer>

        </div>
    )
}

export default FooterMain