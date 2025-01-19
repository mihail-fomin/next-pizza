'use client'

import React, { useState } from 'react'
import { Title } from './Title'
import { FilterCheckbox } from './FilterCheckBox'
import { Input } from '../ui'
import { RangeSlider } from './Range-slider'
import CheckboxFiltersGroup from '../ui/checkbox-filters-group'
import { useFilterIngredients } from '@/app/hooks/useFilterIngredients'

type Props = {}

type PriceProps = {
    priceFrom: number
    priceTo: number
}

const Filters = (props: Props) => {
    const { ingredients, onAddId, selectedIds } = useFilterIngredients()
    const [{ priceFrom, priceTo }, setPrices] = useState<PriceProps>({
        priceFrom: 0,
        priceTo: 5000,
    })

    const handleChangePrice = (name: keyof PriceProps, value: number) => {
        setPrices({
            ...{ priceFrom, priceTo },
            [name]: value,
        })
    }

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
                        placeholder={String(priceFrom)}
                        min={0}
                        max={1000}
                        value={priceFrom}
                        onChange={(e) =>
                            handleChangePrice(
                                'priceFrom',
                                Number(e.target.value),
                            )
                        }
                    />
                    <Input
                        type="number"
                        placeholder={String(priceTo)}
                        min={100}
                        max={1000}
                        value={priceTo}
                        onChange={(e) =>
                            handleChangePrice('priceTo', Number(e.target.value))
                        }
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[priceFrom, priceTo]}
                    onValueChange={([priceFrom, priceTo]) =>
                        setPrices({ priceFrom, priceTo })
                    }
                />
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
