import { useState } from 'react';
import { TayluxInput } from '../../ui/components/Input/TayluxInput';

export default function Input() {
    const [value, setValue] = useState('');

    return (
        <>
            <TayluxInput modelValue={value} onChange={setValue} />

            <p>{value}</p>
        </>
    );
}
