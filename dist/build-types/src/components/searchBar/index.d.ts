import { FC } from "react";
import "./index.scss";
interface SearchbarProps {
    /** On SearchBar Value Change `return (searchValue)` */
    onChange: (value: string) => void;
    /** On Clear Input Button Clicked (The x Button) `return(e)`*/
    onClearInput: (e: any) => void;
}
/**Search Bar Component */
export declare const SearchBar: FC<SearchbarProps>;
export {};
