import { atom } from "recoil";

export const countryListState = atom({
  key: "countryLists",
  default: [],
});
