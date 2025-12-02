"use client";

import { useState } from "react";
import Header from "@/components/header";
import TwoSideLayout from "@/components/layout/TwoSideLayout";
import RegistrationForm from "@/components/registrationForm";
import { RegistrationType } from "@/types";

export default function RegistrationPage() {
  const [registrationType, setRegistrationType] =
    useState<RegistrationType>("athletes");

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onRegistrationTypeChange={setRegistrationType}
        currentType={registrationType}
      />
      <TwoSideLayout
        right={
          <div className="w-full min-h-screen">
            <RegistrationForm registrationType={registrationType} />
          </div>
        }
      />
    </div>
  );
}
