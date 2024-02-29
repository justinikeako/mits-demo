"use client";

import { PageSection, SectionHeading } from "~/components/page-section";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function ServicesSection() {
  return (
    <PageSection className="space-y-16">
      <SectionHeading>Our Services</SectionHeading>

      <dl className="">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 640: 2, 1024: 3 }}
        >
          <Masonry gutter="3rem">
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Tech in Education
              </dt>
              <dd>Training Services</dd>
              <dd>Statistical Analysis</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Infrastructure Services
              </dt>
              <dd>IT Security</dd>
              <dd>Email Service</dd>
              <dd>MonaSecure VPN</dd>
              <dd>MonaSpeedtest</dd>
              <dd>Mona Virtual Desktop Services</dd>
              <dd>Building Access Control</dd>
              <dd>VOIP Phones</dd>
              <dd>Other Infrastructure Services</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Academic Staff and Student Support
              </dt>
              <dd>
                Programming and Administration of the Virtual Learning
                Environment
              </dd>
              <dd>Student Administration</dd>
              <dd>Time Tabling</dd>
              <dd>Computer Purchasing</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                User Support Services
              </dt>
              <dd>General Information</dd>
              <dd>Service Level Agreement</dd>
              <dd>Service Catalogue</dd>
              <dd>Customer Service Questionnaire</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Software Admin
              </dt>
              <dd>Campus Software Listing</dd>
              <dd>Free and Open Source Software</dd>
              <dd>Licensing and Purchasing Considerations</dd>
              <dd>Software Acquisition and Management</dd>
              <dd>Software Request Form</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Research Computing
              </dt>
              <dd>About Sparks</dd>
              <dd>Slurm Quick Reference Guide</dd>
              <dd>Software</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Administration Support
              </dt>
              <dd>Document Management</dd>
              <dd>Financial Management</dd>
              <dd>Human Capital Management</dd>
              <dd>Facilities and Equipment Management</dd>
              <dd>Computer Purchasing</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">Web Services</dt>
              <dd>General Information</dd>
              <dd>E-commerce</dd>
              <dd>Requesting Service</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-semibold md:text-xl">
                Multimedia Services
              </dt>
              <dd>Digital Content Creation</dd>
              <dd>Multimedia Engineering</dd>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </dl>
    </PageSection>
  );
}
