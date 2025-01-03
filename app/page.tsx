import Container from '@/components/shared/Container'
import Filters from '@/components/shared/Filters'
import ProductsGroup from '@/components/shared/ProductsGroup'
import { Title } from '@/components/shared/Title'
import TopBar from '@/components/shared/TopBar'

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroup
                                title="Пиццы"
                                items={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={1}
                                listCassName=""
                            />

                            <ProductsGroup
                                title="Завтраки"
                                items={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={2}
                                listCassName=""
                            />

                            <ProductsGroup
                                title="Десерты"
                                items={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={3}
                                listCassName=""
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
