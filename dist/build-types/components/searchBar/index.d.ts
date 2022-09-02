import { FC } from "react";
import "./index.scss";
interface SearchbarProps {
    /** On SearchBar Value Change `return (searchValue)` */
    onChange: (value: string) => void;
}
/**Search Bar Component */
export declare const SearchBar: FC<SearchbarProps>;
export {};
