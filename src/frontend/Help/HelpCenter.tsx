import { AccordionDemo } from "@/components/Common/Accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HelpCenter(){
    return(
        <article className="flex flex-col gap-8">
            <h3 className="font-bold">Pusat Bantuan</h3>
            <div className="flex items-center gap-3">
                <Input className="w-[60%] max-sm:w-[80%] rounded-xs" placeholder="Masukkan Topik.."/>
                <Button variant={'secondary'} className="rounded-xs"><Search/></Button>
            </div>
            <div className="flex flex-col gap-3">
                <AccordionDemo title="Question-1" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, dignissimos."/>
                <AccordionDemo title="Question-2" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, dignissimos."/>
            </div>
        </article>
    )
}