import { ButtonProps } from "../types";

export interface ReactButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export default function TayluxButton({
    variant = "primary",
    size = "md",
    disabled = false,
    children,
    onClick,
    className = "",
    ...props
}: ReactButtonProps) {
    const baseClass = "taylux-btn";
    const classes = [
        baseClass,
        `${baseClass}--${variant}`,
        `${baseClass}--${size}`,
        disabled ? `${baseClass}--disabled` : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classes} disabled={disabled} onClick={onClick} {...props}>
            {children}
        </button>
    );
}
