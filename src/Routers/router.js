import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import PlansManagement from "../modules/Planos/Page/PlanManagement/index";
import HospitalRegistrationForm from "../modules/Register/Pages/NewPatient";
import PatientList from "../modules/Register/Pages/PatientList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HospitalRegistrationForm />} />
          <Route path="patient/list" element={<PatientList />} />
          <Route path="plans" element={<PlansManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
