import { ButtonProps } from '../../types/Button/button';

export interface ReactButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export const TayluxButton = ({
    variant = 'primary',
    size = 'md',
    disabled = false,
    children,
    onClick,
    className = '',
}: ReactButtonProps) => {
    const baseClass = 'taylux-btn';
    const classes = [
        baseClass,
        `${baseClass}--${variant}`,
        `${baseClass}--${size}`,
        disabled ? `${baseClass}--disabled` : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};
