import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type accordion = {
    title: string,
    content: string
}
export function AccordionDemo({title, content}: accordion) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border px-3"
      defaultValue="item-1"
    >
      <AccordionItem value="information">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{content}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
