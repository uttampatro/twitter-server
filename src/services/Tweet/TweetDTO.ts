export interface CreateTweetDTO {
    userId: number;
    content: string;
    imageURL: string;
    // id: number;
}

export interface saveTweetListDTO {
    id: number;
    tweetId: number;
}
