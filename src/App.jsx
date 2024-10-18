import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Clients from "./pages/Clients";
import InternalAuditing from "./pages/InternalAuditing";
import WhyUs from "./pages/WhyUs";
import QualityManagementSystemISO9001 from "./pages/ISO9001";
import OccupationalHealthAndSafetyISO45001 from "./pages/ISO45001";
import EnvironmentalManagementSystemISO14001 from "./pages/ISO14001";
import EnergyManagementSystemISO50001 from "./pages/ISO50001";
import FoodSafetyManagementSystemISO22000 from "./pages/ISO22000";
import InformationSecurityManagementSystemISO27001 from "./pages/ISO27001";
import ITServiceManagementSystemISO20000 from "./pages/ISO20000";
import EnterpriseRiskManagementSystemISO31000 from "./pages/ISO30001";
import BusinessContinuityManagementSystemISO22301 from "./pages/ISO22301";
import FacilitiesManagementSystemISO41001 from "./pages/ISO41001";
import TestingAndCalibrationLaboratoriesISO17025 from "./pages/ISO17025";
import ConformityAssessmentISO17020 from "./pages/ISO17020";
import MedicalLaboratoriesISO15189 from "./pages/ISO15189";
import IntegratedManagementSystem from "./pages/IMS";
import ApiServices from "./pages/APIService";
import HACCPServices from "./pages/HACCP";
import BRCServices from "./pages/BRC";
import BusinessAdvisoryServices from "./pages/BusinessAdvisory";
import FinancialAdvisoryServices from "./pages/FianacialAdvisory";
import SupplierAuditServices from "./pages/SupplierAudit";
import ThirdPartyAuditServices from "./pages/Thirdpartyaudit";
import MysteryShoppingServices from "./pages/Mystryshoppingservices";
import SkilledTrainingServices from "./pages/Tainingservices";
import SoftSkillsTrainingServices from "./pages/Softskillservices";
import CompanyGrid from "./components/OurClients";
import ImageGallery from "./components/ImageGallery";
import Blog from "./pages/Blog";
import NewsUpdates from "./pages/News&updates";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/why-us" element={<AboutUS />} />
                <Route path="/ourclients" element={<CompanyGrid />} />
                <Route path="/Contact" element={<ContactUs />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/gallery" element={<ImageGallery />} />
                <Route path="/internalAudit" element={<InternalAuditing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/news" element={<NewsUpdates />} />
                <Route path="/iso9001" element={<QualityManagementSystemISO9001 />} />
                <Route path="/iso45001" element={<OccupationalHealthAndSafetyISO45001 />} />
                <Route path="/iso14001" element={<EnvironmentalManagementSystemISO14001 />} />
                <Route path="/iso50001" element={<EnergyManagementSystemISO50001 />} />
                <Route path="/iso22000" element={<FoodSafetyManagementSystemISO22000 />} />
                <Route path="/iso27001" element={<InformationSecurityManagementSystemISO27001 />} />
                <Route path="/iso20000" element={<ITServiceManagementSystemISO20000 />} />
                <Route path="/iso31000" element={<EnterpriseRiskManagementSystemISO31000 />} />
                <Route path="/iso22301" element={<BusinessContinuityManagementSystemISO22301 />} />
                <Route path="/iso41001" element={<FacilitiesManagementSystemISO41001 />} />
                <Route path="/iso17020" element={<TestingAndCalibrationLaboratoriesISO17025 />} />
                <Route path="/iso17025" element={<ConformityAssessmentISO17020 />} />
                <Route path="/iso15189" element={<MedicalLaboratoriesISO15189 />} />
                <Route path="/ims" element={<IntegratedManagementSystem />} />
                <Route path="/apiservices" element={<ApiServices />} />
                <Route path="/haccpservice" element={<HACCPServices />} />
                <Route path="/brcservices" element={<BRCServices />} />
                <Route path="/businessadvisory" element={<BusinessAdvisoryServices />} />
                <Route path="/financialadvisory" element={<FinancialAdvisoryServices />} />
                <Route path="/supplieraudit" element={<SupplierAuditServices />} />
                <Route path="/thirdpartyaudit" element={<ThirdPartyAuditServices />} />
                <Route path="/mystryhoppingservices" element={<MysteryShoppingServices />} />
                <Route path="/skilledtrainingservices" element={<SkilledTrainingServices/>} />
                <Route path="/softskillservices" element={<SoftSkillsTrainingServices />} />

                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
