import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectItems = {
  title: string;
  items: string[];
  defaultValue?: string;
  handleActions: (cat: string) => void;
};
export function SelectDemo({
  title,
  items,
  handleActions,
  defaultValue,
}: SelectItems) {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(val) => handleActions(val)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {items.map((i, idx) => (
            <SelectItem key={idx} value={i}>
              {i}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
