import React from "react";

const HomeCard = () => {
  return (
    <div className="bg-gray-100 py-4 font-lato">
      <div className=" container  mx-auto mt-3 p-2 speachY">
        {/* header  */}

        <div className=" speachY  px-2 md:w-1/2 mx-auto text-center">
          <span className="bg-primary shadow-md shadow-blue-100 text-white rounded-full py-2 px-3 font-semibold">
            Our Services
          </span>
          <h1 className="heading">Being Your Health Journey With Key Wellness Services</h1>
        </div>

        {/* cards */}
        <div className=" mt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-[#21275C]">
          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10  p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/6401/6401082.png"
                alt="women-Helt"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Women&apos;s Health</h2>
              <ul className=" list-disc list-inside">
                <li>Pap Smears</li>
                <li>Breast Exams</li>
                <li>Family Planning</li>
              </ul>
              <p>
                Dedicated to women&apos;s preventive care and lifelong wellness.
              </p>
            </div>
          </div>

          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10 p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/17385/17385105.png"
                alt="Urgent Care"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Urgent Care</h2>
              <ul className=" list-disc list-inside">
                <li>Prompt Evaluation</li>
                <li>Common Illness</li>
                <li>Minor Injury Treatment</li>
              </ul>
              <p>Ensuring timely treatment for better health outcomes.</p>
            </div>
          </div>

          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10 p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/7918/7918134.png"
                alt="women-Helt"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Telehealth Services</h2>
              <ul className=" list-disc list-inside">
                <li>Virtual Consultations</li>
                <li>Remote Monitoring</li>
                <li>Prescription Refills</li>
              </ul>
              <p>Convenient access to healthcare from anywhere.</p>
            </div>
          </div>

          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10 p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/11232/11232259.png"
                alt="Diagnostic Services"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Diagnostic Services</h2>
              <ul className=" list-disc list-inside">
                <li>X-Rays</li>
                <li>Laboratory Testing</li>
                <li>Imaging (MRI, CT)</li>
              </ul>
              <p>Advanced diagnostics for accurate health assessments.</p>
            </div>
          </div>

          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10 p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/18572/18572123.png"
                alt="Primary Care"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Primary Care</h2>
              <ul className=" list-disc list-inside">
                <li>Routine check-ups</li>
                <li>Immunizations</li>
                <li>Preventive Care</li>
              </ul>
              <p>Comprehensive care for long-term health maintenance</p>
            </div>
          </div>

          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10 p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/2209/2209673.png"
                alt="Specialty Care"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Specialty Care</h2>
              <ul className=" list-disc list-inside">
                <li>Cardiology</li>
                <li>Oncology</li>
                <li>Gynecology</li>
              </ul>
              <p>Expert medical services for specialized health needs.</p>
            </div>
          </div>

          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10 p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/15192/15192783.png"
                alt="Mental Health"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Mental Health</h2>
              <ul className=" list-disc list-inside">
                <li>Counseling & Therapy</li>
                <li>Psychiatry</li>
                <li>Medication Management</li>
              </ul>
              <p>Supporting emotional and psychological well-being.</p>
            </div>
          </div>

          <div className="border bg-white shadow hover:shadow-lg hover:bg-emerald-500/10 p-3 rounded-md">
            {/* card heading  */}
            <div>
              <img
                className="icons"
                src="https://cdn-icons-png.flaticon.com/128/12631/12631672.png"
                alt="Senior Care"
              />
            </div>
            {/* card body  */}
            <div className="speachY">
              <h2>Senior Care</h2>
              <ul className=" list-disc list-inside">
                <li>Geriatric Assessments</li>
                <li>Chronic Disease Care</li>
                <li>Memory Care</li>
              </ul>
              <p>Personalized healthcare for aging with dignity.</p>
            </div>
          </div>
        </div>

        {/* to view more buttn  */}
        <button className="Flex capitalize mx-auto Btn ">
          {" "}
          view more services
          <img
            className="w-10 ml-2 h-10 rounded-full"
            src="https://cdn-icons-gif.flaticon.com/7740/7740503.gif"
            alt="Arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
