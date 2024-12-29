import { cn } from '@/lib/utils'
import React from 'react'
import Container from './Container'
import SortPopup from './SortPopup'
import Categorites from './Categorites'

type Props = {
    className?: string
}

const TopBar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
                className,
            )}
        >
            <Container>
                <Categorites />
                <SortPopup />
            </Container>
        </div>
    )
}

export default TopBar
