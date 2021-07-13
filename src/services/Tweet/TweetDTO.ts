export interface CreateTweetDTO {
    userId: number;
    content: string;
    imageURL: string;
}

export interface ReplyTweetDTO {
    userId: number;
    replyContent: string;
    replyImageURL: string;
    parentTweetId: number;
}

export interface FindReplyTweet {
    parentTweetId: number;
}
