"use client"

import * as React from "react"
import { Check, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import useSearch from "@/utils/util/Hooks/Products/useSearch"
import { useLocation, useNavigate } from "react-router"
import { toast } from "sonner"


export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const path = useLocation()
  const {data, isLoading} = useSearch(value)
  const navigate = useNavigate()
  React.useEffect(()=>{
    setValue("")
  }, [path.pathname])
  function handleNavigate(name: string, e: React.KeyboardEvent): void{
    if(e.key === 'Enter' && !isLoading && name.length > 3){
      navigate(`/products?name=${name.trim()}`)
    }
    if(e.key === 'Enter' && !isLoading && name.length <= 3){
      toast('Masukkan Minimal 3 Keyword')
    }
    if(e.key === 'Enter' && !isLoading && !name.length){
      navigate('/products')
    }
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[20vw] justify-between overflow-x-auto scrollbar-hide rounded-xs"
        >
          {value ? (
            value
          ): 'Cari Barang...'}
          <Search className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Masukkan Nama Barang" value={value} onValueChange={(e)=> setValue(e)} onKeyDown={(e)=> handleNavigate(value, e)} className="h-9" />
          <CommandList className="scrollbar-hide max-h-[20vh]">
            <CommandEmpty>No Product Matches.</CommandEmpty>
            <CommandGroup>
              {isLoading ? ('') : (
                data!.payload.map((d) => (
                <CommandItem
                  key={d.id}
                  value={d.shortname}
                  onMouseDown={()=>{
                    navigate(`/products/${d.id}`)
                    setOpen(false)
                  }}
                >
                  {d.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === d.shortname ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
