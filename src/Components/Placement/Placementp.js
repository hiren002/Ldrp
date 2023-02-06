import React from 'react'

const Placementp = () => {
  return (
    <>
      <div className="p-14 max-w-full">
        <div className="max-w-full flex">
          <div className='mb-6' style={{ alignItems: "center", display: "flex", justifyContent: "flex-end", width: "52%", marginLeft: "10%", gap: "2%" }}>

            <img src="/Images/line.png" alt="" />
            <p className='aboutheads text-4xl'>Placement</p>
          </div>
          <div style={{ display: " flex", justifyContent: "flex-end", width: "50%" }}>
            <img src="/Images/bluelines2.png" alt="" />
          </div>
        </div>
        <div className="content text-center mt-4 " >
          <p className='text-base font-normal leading-6 tracking-normal text-center ' style={{ fontFamily: "Work Sans" }}>Training and Placement is an important wing for any institution to promote knowledge with the advancement of technology. LDRP offer training for both students and faculties. <br /> Additionally, Institute is always engaging the faculty as well students in the career base workshops and other extra curriculum activities.</p>
        </div>
        {/* placement part */}
        <div className=" mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 " style={{ marginTop: "2%" }}>
          <div className="flex justify-center pt-3 pb-3 mb-4 "> 
          {/* image part */}
            <img src="/Images/ketanbhai.png" alt="" style={{ objectFit: "contain" }} />
          </div>
          <div className="maincont text-left">
            <div className="plachead " style={{ marginBottom: "5%", marginop: "-3%" }}>
              <h1 style={{ fontWeight: "600" }} className=" text-2xl leading-9 font-bold"> <strong  ><i class="fa-solid fa-user-tie mr-4" style={{ color: "#1B6CE1" }}></i>Ketan Chaudhari</strong>
              </h1>
              <p className='ml-8 text-lg font-normal leading-7 mt-4 mb-4'>Placement Officer,LDRP-ITR, Gandhinagarplacement@ldrp.ac.in</p>

              <div className=" flex align-center "><i class="fa-solid fa-location-arrow pt-2 " style={{ color: "#1B6CE1" }}></i><p style={{ marginLeft: "2%" }} className="text-lg font-normal leading-7">placement@ldpr.ac.in </p></div>
            </div>
            <p className='font-normal text-base leading-6 mb-12' style={{ fontFamily: "Work Sans" }}>
              Industry Institution Interaction Cell (III Cell) is established a close and continuing inter-action between the industry and Institute.
              As there are large numbers of Engineering and Management colleges coming up in Gujarat, the competition for employment is increasing every day and the job of placement is becoming a challenging one.
              To deal with the current scenario and academic demand, a full pledged III – cell is functioning in our college with a full time placement officer.
              This is the team work and supported by the faculty as well student’s coordinators.
            </p>
            {/* right part */}
            <div className="mb-4">
              <div className='flex flex-col'><div className=""></div>
                <p className='mb-9 featurehead' style={{ position: "relative", left: "2%" }}>Our III – Cell is performing the following activities :-
                </p>
                <ul>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Arranging in plant training for students through the industrial visits.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Training to suit various needs of industry.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Expert Lecture.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Work shops on latest technology.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Carrier counseling.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Alumni networking.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Training sessions on soft skill development.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Inviting various organizations for campus recruitment.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Arrangement for the on as well pooled campus.</div></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        {/* partners part */}

        <div className=" mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 " style={{ marginTop: "5%" }}>
          <div className="maincont text-left flex justify-center align-bottom">
            <div className="mb-4">
              <div className='flex flex-col'>
                <p className='mb-9 ' style={{ position: "relative", left: "2%" }}>Here we ensure and take care to provide the best arrangements and hospitality for the <br /> visiting cooperates.  We have,
                </p>
                <ul>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Auditoriums with the capacity of 1000, 400 and 150.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Well established computer labs with the capacity of 300 – 500 students for on -line exams.</div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">Promote the pooled campus drive concept and location wise easily connected  </div></li>
                  <li className='mb-4 flex'><i className="mx-4 fa-regular fa-circle-check" style={{ color: "#1B6CE1" }}></i><div className="">with Ahmedabad railway and Airport as well major good engineering colleges of Gujarat.</div></li>
                </ul>
                <p className='mt-9 ' style={{ position: "relative", left: "2%" }}>We have successfully arranged the pooled campus of MNC like Amdocs, Tech Mahindra, <br /> Bharat Forge, L&T Infotech, and Infosys.
                </p>
              </div>

            </div>
          </div>
          {/* right part */}
          <div className="partners flex justify-center">
            <img src="/Images/partners.png" alt="" />
          </div>
        </div>


      </div>
    </>
  )
}

export default Placementp