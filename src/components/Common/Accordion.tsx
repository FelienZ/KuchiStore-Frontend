import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

type accordion = {
  title: string;
  content?: string;
  contents?: {
    title: string;
    path: string;
  }[];
  setCategory?: (category: string) => void;
  category?: string;
};
export function AccordionDemo({
  title,
  content,
  contents,
  setCategory,
  category,
}: accordion) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border px-3"
      defaultValue="item-1"
    >
      <AccordionItem value="information" className="divide-y">
        <AccordionTrigger className="font-bold">{title}</AccordionTrigger>
        <AccordionContent className="flex flex-col py-5 gap-4 text-balance">
          {contents ? (
            contents.map((c) => (
              <div
                className="flex justify-between items-center"
                key={c.path}
                onClick={() => setCategory!(c.path)}
              >
                <p
                  className={
                    category === c.path
                      ? "font-semibold text-lime-400 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  {c.title}
                </p>
                <ArrowRight />
              </div>
            ))
          ) : (
            <p>{content}</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
