import { InputProps } from '../../types/Input/input';

export interface ReactInputProps extends InputProps {
    className?: string;
    onChange?: (value: string) => void;
}

export const TayluxInput = ({
    type = 'text',
    name = '',
    placeholder = 'text',
    disabled = false,
    size = 'sm',
    className = '',
    modelValue = '',
    onChange,
}: ReactInputProps) => {
    const baseClass = 'taylux-input';
    const classes = [baseClass, `${baseClass}--${size}`, disabled ? `${baseClass}--disabled` : '', className]
        .filter(Boolean)
        .join(' ');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };
    return (
        <input
            className={classes}
            type={type}
            disabled={disabled}
            id={name}
            name={name}
            placeholder={placeholder}
            value={modelValue}
            onChange={handleInput}
        />
    );
};
