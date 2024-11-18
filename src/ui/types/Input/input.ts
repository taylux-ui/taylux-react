export interface InputProps {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    modelValue: string;
    size?: 'sm' | 'md' | 'lg';
}
