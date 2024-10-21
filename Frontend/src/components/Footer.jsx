import React from "react";

function Footer() {
  return (
    <div className="lg:pt-28 py-16 lg:px-20 px-4">
      {/* Wrapper with space between first and other columns */}
      <div className="lg:flex lg:justify-between lg:items-start">
        {/* Site Title (1st column) */}
        <div className="flex flex-col gap-5">
          <div className="mb-8 lg:mb-0 lg:flex-grow lg:max-w-xs">
            <h2 className="text-6xl font-young-serif">Landsarck</h2>
          </div>
        </div>

        {/* Second and Third Columns wrapped together with space */}
        <div className="flex flex-col lg:flex-row lg:space-x-40">
          {/* Location (2nd column) */}
          <div>
            <h4 className="text-3xl lg:mt-0 mt-8 mb-8 font-young-serif">
              Location
            </h4>
            <p className="text-xl font-bitter">
              123 Demo Street
              <br />
              New York, NY 12345
            </p>
          </div>

          {/* Contact (3rd column) */}
          <div>
            <h4 className="text-3xl font-young-serif mb-8 lg:mt-0 mt-8">
              Contact
            </h4>
            <p className="text-xl">
              <a
                href="mailto:email@example.com"
                className="border-b border-gray-900 font-bitter"
              >
                email@example.com
              </a>
              <br />
              (555) 555-5555
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Privacy Policies, Terms, and Made with GREDX */}
      <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Privacy Policies and Terms of Service */}
        <div className="flex space-x-4 text-lg font-bitter">
          <a href="#" className="border-b border-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="border-b border-gray-900">
            Terms of Service
          </a>
        </div>

        {/* Made with GREDX */}
        <div className="pt-4 lg:pt-0">
          <p className="text-lg font-bitter">
            Made with{" "}
            <a
              href="#"
              className="border-b border-gray-900 font-bitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GREDX
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
