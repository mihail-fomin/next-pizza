'use client'

import React, { useState } from 'react'
import { FilterChecboxProps, FilterCheckbox } from '../shared/FilterCheckBox'
import { Input } from './input'
import { Skeleton } from './skeleton'
import { useFilterIngredients } from '@/app/hooks/useFilterIngredients'

type Item = FilterChecboxProps

type Props = {
    title: string
    items: Item[]
    defaultItems: Item[]
    limit?: number
    searchInputPlaceholder?: string
    className?: string
    onClickCheckbox?: (id: string) => void
    defaultValue?: string
    selectedIds?: Set<string>
}

export default function CheckboxFiltersGroup({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onClickCheckbox,
    defaultValue,
    selectedIds,
}: Props) {
    const [showAll, setShowAll] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const { isLoading } = useFilterIngredients()

    if (isLoading) {
        return (
            <div className={className}>
                <p className="font-bold mb-3">{title}</p>

                {...Array(limit)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton className="h-6 mb-4 rounded-[8px]" />
                    ))}
            </div>
        )
    }

    const list = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : defaultItems?.slice(0, limit)

    const onChangeSearchInput = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        id={item.id}
                        endAdornment={item.endAdornment}
                        checked={selectedIds?.has(item.id)}
                        onCheckedChange={() => onClickCheckbox?.(item.id)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div
                    className={
                        showAll ? 'border-t border-t-neutral-100 mt-4' : ''
                    }
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-primary mt-3"
                    >
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    )
}
