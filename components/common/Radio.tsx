export default function Radio({
  label,
  checked,
  onChange,
  name,
}: {
  label?: string;
  checked: boolean;
  onChange: () => void;
  name?: string;
}) {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange()}
        className="w-4 h-4 rounded border-border"
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
