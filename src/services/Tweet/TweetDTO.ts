export interface CreateTweetDTO {
    userId: number;
    text: string;
    imageURL: string;
}

export interface ReplyTweetDTO {
    userId: number;
    parentTweetId: number;
    text: string;
    imageURL: string;
}

export interface FindReplyTweet {
    parentTweetId: number;
}
