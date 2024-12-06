type Props = {
  options: { value: string | number; label: string | number }[];
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function Select({
  placeholder,
  options,
  value,
  label,
  onChange,
}: Props) {
  return (
    <label className="flex flex-col">
      {label}
      <select
        className="rounded-full border border-slate-300 p-2"
        required
        name="make"
        id="make"
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
      >
        {placeholder ? (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
