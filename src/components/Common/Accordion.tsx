import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type accordion = {
  title: string;
  content?: string;
  contents?: {
    title: string;
    path: string;
  }[];
};
export function AccordionDemo({ title, content, contents }: accordion) {
  // const [category, setCategory] = useState("");
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
            contents.map((c, idx) => (
              <p /* onClick={() => setCategory(c.title)} */ key={idx}>
                {c.title}
              </p>
            ))
          ) : (
            <p>{content}</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
