import { API } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

interface ReturnProps {
    ingredients: Ingredient[]
    isLoading: boolean
    selectedIngredients: Set<string>
    onAddId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const [selectedIngredients, { toggle }] = useSet(new Set<string>([]))

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setIsLoading(true)
                const result = await API.ingredients.getAll()
                setIngredients(result)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchIngredients()
    }, [])

    return { ingredients, isLoading, selectedIngredients, onAddId: toggle }
}
