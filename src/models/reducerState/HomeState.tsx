import { ListingData } from "..";

interface HomeState {
    cryptoList : ListingData[];
    start: number;
    totalCount: number;
}

export type {HomeState}