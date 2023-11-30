import { OptionsEnum } from "../utils/enums.ts";

export interface Options {
  [OptionsEnum.Base]: string;
  [OptionsEnum.Currencies]: string[];
  [OptionsEnum.Places]: number
}
