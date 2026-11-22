import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import BuildingPlanningTool from "@/components/tools/BuildingPlanningTool";
import EngineerSection from "@/components/home/EngineerSection";
import EnquirySection from "@/components/home/EnquirySection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* SECTION 2 — HERO */}
      <HeroSection />

      {/* SECTION 3 — INTRODUCTION */}
      <IntroSection />

      {/* SECTION 4 — SERVICES */}
      <ServicesSection />

      {/* SECTION 5 — WHY CHOOSE SHREE SASTHA ASSOCIATES */}
      <WhyChooseSection />

      {/* SECTION 6 — BUILDING JOURNEY / PROCESS */}
      <ProcessSection />

      {/* SECTION 7 — PROJECTS / PORTFOLIO */}
      <ProjectsSection />

      {/* INTERACTIVE PLANNING & COST ESTIMATOR TOOL */}
      <BuildingPlanningTool />

      {/* SECTION 8 — ENGINEER PROFILE */}
      <EngineerSection />

      {/* SECTION 9 — CUSTOMER ENQUIRY */}
      <EnquirySection />
    </div>
  );
}
