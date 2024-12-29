import { Ingredient } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export const getAll = async (): Promise<Ingredient[]> => {
    const { data } = await axiosInstance.get<Ingredient[]>(
        ApiRoutes.SEARCH_PRODUCTS,
    )

    return data
}
