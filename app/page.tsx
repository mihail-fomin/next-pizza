import Container from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import TopBar from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text='Все пиццы' size='lg' className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            {/* <Filters /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
