import DropdownStyle from "./DropdownStyle.module.css";

interface IOption{
    value: string
}

interface IDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label? :string,
    options: IOption[];
    value?: string;
}

export const Dropdown = (props: IDropdownProps) => {
    const { label, options, value, onChange} = props;

    return (
    <div className={DropdownStyle.content}>
        <select value={value} onChange={onChange}>
            <option className={DropdownStyle.title}>Wybierz {label}</option>
            {options.map((option: IOption, index: number) => {
                return <option key={index} className={DropdownStyle.field}>{option.value}</option>
            })}
        </select>
    </div>
    )
}

