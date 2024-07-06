import { NewsListModel } from "./NewsListModel";

interface NewsResponse {
    status: string;
    results: NewsListModel[]
}

export type {NewsResponse}