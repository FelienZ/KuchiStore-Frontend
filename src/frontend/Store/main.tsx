import { PaginationDemo } from "@/components/Common/Pagination";
import Products from "./Products";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import SearchHelper from "@/utils/util/Helper/SearchMode";
import LoadingFull from "../Loading";
import { AccordionDemo } from "@/components/Common/Accordion";
import { SelectDemo } from "@/components/Common/Select";
import useWidth from "@/hooks/useWindow";

export default function Dashboard() {
  const [pages, setPages] = useState(1);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [category, setCategory] = useState("");
  const width = useWidth();
  const name = params.get("name");
  const products = SearchHelper(pages, name!, category);
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
      {
        title: "Semua",
        path: "",
      },
    ],
  };
  function handleSetCategory(cat: string) {
    if (cat === "Semua") {
      return setCategory("");
    }
    return setCategory(cat.toLowerCase());
  }
  return (
    <article className="flex flex-col gap-5 w-full">
      <section className="md:w-[90vw] w-[98vw] min-h-screen justify-between flex flex-col gap-5 self-center">
        {products.isLoading ? (
          <LoadingFull />
        ) : products.data?.payload.length ? (
          <div className="flex flex-col gap-3">
            {width >= 1100 ? (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <p>Menampilkan: </p>
                  <strong>{category === "" ? "Semua" : category}</strong>
                </div>
                <div className="w-[30%]">
                  <SelectDemo
                    title="Filter Kategori"
                    items={filter.content.map((f) =>
                      f.path === ""
                        ? "Semua"
                        : f.path.charAt(0).toUpperCase() + f.path.slice(1)
                    )}
                    handleActions={handleSetCategory}
                  />
                </div>
              </div>
            ) : (
              <AccordionDemo
                title={filter.title}
                contents={filter.content}
                setCategory={setCategory}
                category={category}
              />
            )}
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
