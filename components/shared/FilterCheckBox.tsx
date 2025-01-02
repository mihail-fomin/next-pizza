import React from 'react'
import { Checkbox } from '../ui/checkbox'

export interface FilterChecboxProps {
    id: string
    text: string
    endAdornment?: React.ReactNode
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
    name?: string
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
    id,
    text,
    endAdornment,
    onCheckedChange,
    checked,
    name,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={id}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${String(name)}-${String(id)}`}
            />
            <label
                htmlFor={`checkbox-${String(name)}-${String(id)}`}
                className="leading-none cursor-pointer flex-1"
            >
                {text}
            </label>
            {endAdornment}
        </div>
    )
}
