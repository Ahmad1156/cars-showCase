import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface FilterProps {
  manufacturor: string;
  year: Number;
  fuel: string;
  limit: Number;
  model: string;
}
export interface CustomButton2Props {
  title: String;
  options: OptionProps[];
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface showMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: 1993;
}
