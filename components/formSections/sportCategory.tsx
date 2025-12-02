import { FormData, FormErrors, OnFieldChange } from '@/types'
import { FormSelect, SectionHeader, CategoryButton } from '@/components/common'
import { SPORT_CATEGORIES, SPORTS } from '@/lib/constants'

interface SportCategorySectionProps {
  formData: FormData
  handleChange: OnFieldChange
  errors?: FormErrors
}

export function SportCategorySection({ formData, handleChange, errors }: SportCategorySectionProps) {
  const filteredSports = formData.typeOfSport
    ? SPORTS.filter((sport) => sport.category === formData.typeOfSport).map(sport => ({
        value: sport.value,
        label: sport.label
      }))
    : []

  return (
    <section className="pb-6 border-b border-border">
      <SectionHeader
        title="Sport Category"
        description="Select a sport category"
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {SPORT_CATEGORIES.map((category) => (
          <CategoryButton
            key={category.id}
            name={category.name}
            isSelected={formData.typeOfSport === category.name}
            onClick={() => {
              handleChange('typeOfSport', category.name)
              handleChange('selectedSport', null ) // Clear selected sport when category changes
            }}
          />
        ))}
      </div>

      <FormSelect
        label="Select Sport"
        value={formData.selectedSport || ''}
        onChange={(value) => handleChange('selectedSport', value || null)}
        options={filteredSports}
        required
        error={errors?.selectedSport}
      />
    </section>
  )
}

