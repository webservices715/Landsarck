import React from "react";

const AppointmentScheduler = () => {
  return (
    <div className="bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1722375620.686804-HMGLIWUZVJUYXYSFRXXK/imgg-od3-odnbd9id.png")',
      }}
    >
        
      <div className="fluid-engine fe-6706b711fee54d658c04d0c9">
        
        <div className="fe-block fe-block-8ed5a5e9bdc9e098901d">
          <div
            className="sqs-block acuity-block sqs-block-acuity"
            id="block-8ed5a5e9bdc9e098901d"
          >
            <div className="sqs-block-content">
              <div className="acuity-block-wrapper">
                <iframe
                  src="https://blueprintcatalogen.as.me/"
                  title="Schedule Appointment"
                  frameBorder="0"
                  allow="payment"
                  className="w-full"
                  style={{
                    maxHeight: "none",
                    overflow: "hidden",
                    height: "959px",
                  }}
                ></iframe>
                <script
                  src="https://embed.acuityscheduling.com/js/embed.js"
                  async
                ></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
