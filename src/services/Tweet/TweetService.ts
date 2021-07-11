import { TweetReply } from '../../entity/TweetReply';
import { Tweet } from '../../entity/Tweet';
import { User } from '../../entity/User';
import { CreateTweetDTO, ReplyTweetDTO } from './TweetDTO';

class TweetService {
    async getTweetList() {
        const tweetList = await Tweet.createQueryBuilder('tweet')
            .leftJoinAndSelect('tweet.user', 'user')
            .leftJoinAndSelect('tweet.tweetReply', 'tweetReply')
            .select('tweet.id')
            .addSelect('tweet.content')
            .addSelect('tweet.imageURL')
            .addSelect('tweet.createdAt')
            .addSelect('tweetReply.id')
            .addSelect('tweetReply.replyContent')
            .addSelect('tweetReply.replyImageURL')
            .addSelect('user.id')
            .addSelect('user.username')
            .addSelect('user.email')
            .getMany();
        return tweetList;
    }
    async getReplyTweet() {
        const replyTweetList = await TweetReply.find();
        return replyTweetList;
    }
    async createTweet(dto: CreateTweetDTO) {
        const { userId, content, imageURL } = dto;
        const user = await User.findOne({
            where: { id: userId },
        });
        const tweet = new Tweet();
        tweet.content = content;
        tweet.imageURL = imageURL;
        tweet.user = user!;
        await tweet.save();
    }
    async replayTweet(dto: ReplyTweetDTO) {
        const { userId, parentTweetId, replyContent, replyImageURL } = dto;
        const user = await User.findOne({
            where: { id: userId },
        });
        const replayTweet = new TweetReply();
        replayTweet.replyContent = replyContent;
        replayTweet.replyImageURL = replyImageURL;
        replayTweet.parentTweetId = parentTweetId;
        replayTweet.user = user!;
        await replayTweet.save();
        return replayTweet;
    }
}

export default new TweetService();
