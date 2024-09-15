import Container from "@/components/shared/Container";
import Filters from "@/components/shared/Filters";
import { Title } from "@/components/shared/Title";
import TopBar from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text='Все пиццы' size='lg' className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
            {/* <ProductsGroupList title='Пиццы' items={[1, 2, 3, 4, 5]}/>
            <ProductsGroupList title='Комбо' items={[1, 2, 3, 4, 5]}/> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
