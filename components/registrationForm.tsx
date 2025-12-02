"use client";

import { useState } from "react";
import { LocationEventSection } from "./formSections/locationEvent";
import { SportCategorySection } from "./formSections/sportCategory";
import { PersonalInfoSection } from "./formSections/personalInfo";
import { PhotoUploadSection } from "./formSections/photoUpload";
import { FormActions } from "./formSections/formActions";
import { FormData, FormErrors, RegistrationType } from "@/types";
import { validateForm } from "@/lib/validators";
import { useRegister } from "@/src/hooks/useRegister";

interface RegistrationFormProps {
  registrationType: RegistrationType;
}

export default function RegistrationForm({
  registrationType,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    province: null,
    department: null,
    eventType: null,
    typeOfSport: null,
    selectedSport: null,
    firstName: "",
    lastName: "",
    nationalID: "",
    dateOfBirth: "",
    position: registrationType === "athletes" ? "Leader" : "",
    phoneNumber: "",
    photoUpload: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { submitRegistration, loading, error: submitError, success } = useRegister();

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await submitRegistration(formData);
      } catch (err) {
        // Error is handled by the hook
        console.error('Registration submission failed:', err);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      province: null,
      department: null,
      eventType: null,
      typeOfSport: null,
      selectedSport: null,
      firstName: "",
      lastName: "",
      nationalID: "",
      dateOfBirth: "",
      position: registrationType === "athletes" ? "Leader" : "",
      phoneNumber: "",
      photoUpload: null,
    });
    setErrors({});
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-card rounded-2xl shadow-lg  overflow-hidden p-8 md:p-12 border border-border">
        <div className="mb-10 items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 ">
            Registration Form
          </h1>
          <p className="text-muted-foreground">
            Please fill out the form below to register for sports programs and
            events.
          </p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            <p className="font-semibold">
              Registration submitted successfully!
            </p>
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <p className="font-semibold">
              Registration failed: {submitError}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          <LocationEventSection
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <SportCategorySection
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <PersonalInfoSection
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            registrationType={registrationType}
          />
          <PhotoUploadSection
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <FormActions handleReset={handleReset} />
        </form>
      </div>
    </div>
  );
}
