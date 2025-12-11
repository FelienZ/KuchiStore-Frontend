import { createContext } from "react";
import type { ThemeContextInterface } from "@/utils/types/ThemeContext";

export const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);
