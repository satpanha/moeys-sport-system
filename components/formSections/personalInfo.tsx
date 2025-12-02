import { FormData, FormErrors, OnFieldChange, RegistrationType } from '@/types'
import { FormInput, FormSelect, SectionHeader } from '@/components/common'
import { POSITIONS } from '@/lib/constants'

interface PersonalInfoSectionProps {
  formData: FormData
  handleChange: OnFieldChange
  errors: FormErrors
  registrationType: RegistrationType
}

export function PersonalInfoSection({ formData, handleChange, errors, registrationType }: PersonalInfoSectionProps) {
  return (
    <section className="pb-6 border-b border-border">
      <SectionHeader title="Personal Information" description="Please enter your details. All fields are required." />

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput
            label="First Name"
            value={formData.firstName}
            onChange={(value) => handleChange('firstName', value)}
            placeholder="Enter first name"
            required
            error={errors.firstName}
          />
          <FormInput
            label="Last Name"
            value={formData.lastName}
            onChange={(value) => handleChange('lastName', value)}
            placeholder="Enter last name"
            required
            error={errors.lastName}
          />
          <FormSelect
            label="Position"
            value={formData.position || ''}
            onChange={(value) => handleChange('position', value || 'player')}
            options={POSITIONS}
            required
            error={errors.position}
            disabled={registrationType === 'athletes'}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput
            label="National ID"
            value={formData.nationalID}
            onChange={(value) => handleChange('nationalID', value)}
            placeholder="Enter National ID"
            required
            error={errors.nationalID}
          />
          <FormInput
            label="Date of Birth"
            value={formData.dateOfBirth}
            onChange={(value) => handleChange('dateOfBirth', value)}
            type="date"
            required
            error={errors.dateOfBirth}
          />
          <FormInput
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={(value) => handleChange('phoneNumber', value)}
            placeholder="Enter phone number"
            type="tel"
            required
            error={errors.phoneNumber}
          />
        </div>
      </div>
    </section>
  )
}
