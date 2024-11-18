export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    disabled?: boolean;
}
export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;
export const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
