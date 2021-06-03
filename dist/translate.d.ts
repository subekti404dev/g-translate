interface Result {
    targetText?: string;
    romanization?: string;
}
export declare function translate(text: string, config?: {
    from?: string;
    to?: string;
}): Promise<Result>;
export {};
