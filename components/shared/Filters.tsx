'use client'

import React from 'react'
import { Title } from './Title'
import { FilterCheckbox } from './FilterCheckBox'
import { Input } from '../ui'
import { RangeSlider } from './Range-slider'
import CheckboxFiltersGroup from '../ui/checkbox-filters-group'
import { useFilterIngredients } from '@/app/hooks/useFilterIngredients'

type Props = {}

const Filters = (props: Props) => {
    const { ingredients, onAddId, selectedIds } = useFilterIngredients()

    const items = ingredients.map((item) => ({
        id: String(item.id),
        text: item.name,
    }))

    return (
        <div>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" id="1" />
                <FilterCheckbox text="Можно собирать" id="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        defaultValue={500}
                    />
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                className="mt-5"
                limit={5}
                defaultItems={items.slice(0, 6)}
                items={items}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
            />
        </div>
    )
}

export default Filters
