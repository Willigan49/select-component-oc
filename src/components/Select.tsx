import { CSSProperties, ChangeEventHandler } from "react";

type Props = {
  name: string;
  options: Array<Object>;
  style?: CSSProperties;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function Select({ name, options, style, onChange }: Props): JSX.Element {
  return (
    <select
      style={style}
      id={`${name}-select`}
      onChange={onChange}
    >
      {options.map((option: any) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
