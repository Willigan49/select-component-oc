import { CSSProperties, ChangeEventHandler } from "react";

type Props = {
  name: string;
  options: Array<Object>;
  style?: CSSProperties;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  className?: string,
};
/**
 * Functionnal componant with select list.
 * @param name string for id of the select
 * @param options array of object with the different options
 * @param style css propperties for style 
 * @param onChange function called by the change event of the select
 * @param className string for the class
 * @returns select componant
 */
export default function Select({ name, options, style, onChange, className }: Props): JSX.Element {
  return (
    <select
      style={style}
      id={`${name}-select`}
      onChange={onChange}
      className={className}
    >
      {options.map((option: any) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
