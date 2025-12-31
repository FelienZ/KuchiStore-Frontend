import { PaginationDemo } from "@/components/Common/Pagination";
import Products from "./Products";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import SearchHelper from "@/utils/util/Helper/SearchMode";
import LoadingFull from "../Loading";
import { AccordionDemo } from "@/components/Common/Accordion";

export default function Dashboard() {
  const [pages, setPages] = useState(1);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const name = params.get("name");
  const products = SearchHelper(pages, name!);
  const filter = {
    title: "Filter Kategori",
    content: [
      {
        title: "Aksesoris",
        path: "accessories",
      },
      {
        title: "Smartphone",
        path: "smartphone",
      },
      {
        title: "Komputer",
        path: "computer",
      },
    ],
  };
  return (
    <article className="flex flex-col gap-5 w-full">
      <section className="w-[90vw] min-h-screen justify-between flex flex-col gap-5 self-center">
        {products.isLoading ? (
          <LoadingFull />
        ) : products.data?.payload.length ? (
          <div className="flex flex-col gap-3">
            <div className="md:hidden">
              <AccordionDemo title={filter.title} contents={filter.content} />
            </div>
            <Products payload={products.data?.payload} />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-3 h-screen">
            <img
              src="/Kuchistore.svg"
              alt="storelogo"
              className="w-[5vw] border"
            />
            <p>Produk Tidak Ditemukan</p>
            <Button
              variant={"outline"}
              className="border drop-shadow-sm"
              onClick={() => navigate("/products")}
            >
              Back?
            </Button>
          </div>
        )}
        {products.data?.detail ? (
          <PaginationDemo
            detail={products.data}
            setPages={setPages}
            page={pages}
          />
        ) : (
          ""
        )}
      </section>
    </article>
  );
}
