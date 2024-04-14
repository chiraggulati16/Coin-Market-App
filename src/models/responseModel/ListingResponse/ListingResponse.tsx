import { ListingData } from "./ListingData";
import { Status } from "./Status";

interface ListingResponse {
    status: Status
    data: ListingData
}

export type {ListingResponse}