interface Status {
    timestamp: string;
    error_code: number;
    error_message: string | any;
    total_count: number;
}

export type {Status}