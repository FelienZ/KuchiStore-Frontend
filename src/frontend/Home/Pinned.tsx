import { CarouselSpacing } from "@/components/Common/Carousel";
import { Spinner } from "@/components/ui/spinner";
import useFilteredProducts from "@/utils/util/Hooks/Products/useFilteredProducts";

export default function Pinned() {
  const popularProduct = useFilteredProducts("label", "popular");
  const newProduct = useFilteredProducts("label", "_new");
  const recommendedProduct = useFilteredProducts("label", "recommended");
  return (
    <section className="flex flex-col gap-8 xl:gap-15 divide-y">
      <div className="flex flex-col gap-3 pb-5">
        <h3 className="font-bold md:text-lg">
          {`Popular Products`.toUpperCase()}
        </h3>
        {popularProduct.isLoading ? (
          <div className="flex justify-center items-center gap-3 border rounded-sm h-[25vh] md:h-[50vh]">
            <p>Loading...</p>
            <Spinner />
          </div>
        ) : Number(popularProduct.data?.payload.length) ? (
          <CarouselSpacing payload={popularProduct.data?.payload} limit={8} />
        ) : (
          <div className="flex justify-center items-center  border rounded-sm h-[25vh] md:h-[50vh]">
            <p>Gagal Memuat Data</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 pb-5">
        <h3 className="font-bold md:text-lg">{`New Products`.toUpperCase()}</h3>
        {newProduct.isLoading ? (
          <div className="flex justify-center items-center gap-3 border rounded-sm h-[25vh] md:h-[50vh]">
            <p>Loading...</p>
            <Spinner />
          </div>
        ) : Number(newProduct.data?.payload.length) ? (
          <CarouselSpacing payload={newProduct.data?.payload} limit={8} />
        ) : (
          <div className="flex justify-center items-center  border rounded-sm h-[25vh] md:h-[50vh]">
            <p>Gagal Memuat Data</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 pb-5">
        <h3 className="font-bold md:text-lg">
          {`Recommended Products`.toUpperCase()}
        </h3>
        {recommendedProduct.isLoading ? (
          <div className="flex justify-center items-center gap-3 border rounded-sm h-[25vh] md:h-[50vh]">
            <p>Loading...</p>
            <Spinner />
          </div>
        ) : Number(recommendedProduct.data?.payload.length) ? (
          <CarouselSpacing
            payload={recommendedProduct.data?.payload}
            limit={8}
          />
        ) : (
          <div className="flex justify-center items-center  border rounded-sm h-[25vh] md:h-[50vh]">
            <p>Gagal Memuat Data</p>
          </div>
        )}
      </div>
    </section>
  );
}
