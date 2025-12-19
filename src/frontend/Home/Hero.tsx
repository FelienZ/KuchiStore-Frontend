import { HeroData } from "@/utils/data/HeroItem"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

const images = HeroData

export default function Hero(){
    const [selected, setSelected] = useState(0)
    const handlePrev = () => {
        setSelected((prev)=> (prev - 1 + images.length) % images.length)
    }
    const handleNext = () => {
        setSelected((prev) => (prev +1) % images.length)
    }
    useEffect(()=>{
        const interval = setInterval(()=> {
            handleNext()
        }, 5000)
        return ()=> clearInterval(interval)
    }, [selected])

    return(
        <section className="flex relative border mx-5 rounded-xs h-[30vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh]">
            <motion.button
                initial={false}
                aria-label="Previous"
                onClick={() => handlePrev()}
                whileFocus={{ outline: `2px solid` }}
                className="rounded-full bg-primary-foreground absolute z-10 top-[50%] left-5 size-fit p-2"
                whileTap={{ scale: 0.9 }}
            >
                <ArrowLeft />
            </motion.button>
            <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={images[selected].title}
                        src={images[selected].url}
                        initial={{ x: 0.5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full rounded-xs brightness-75 object-center object-cover h-full"
                    />
                </AnimatePresence>
            </div>
            <motion.button
                initial={false}
                aria-label="Next"
                onClick={() => handleNext()}
                whileFocus={{ outline: `2px solid` }}
                className="rounded-full bg-primary-foreground absolute z-10 top-[50%] right-5 size-fit p-2"
                whileTap={{ scale: 0.9 }}
            >
                <ArrowRight />
            </motion.button>
            <motion.div 
                className="absolute z-10 text-foreground bg-background/60 max-md:hidden w-fit items-end flex flex-col rounded-tl-sm bottom-0 right-0 p-3"
                initial={{ x: 0.5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <h2 className="font-bold md:text-xl">{images[selected].title}</h2>
                <p>{images[selected].content}</p>
            </motion.div>
        </section>
    )
}