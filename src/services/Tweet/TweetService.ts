import { TweetReply } from '../../entity/TweetReply';
import { Tweet } from '../../entity/Tweet';
import { User } from '../../entity/User';
import { CreateTweetDTO, FindReplyTweet, ReplyTweetDTO } from './TweetDTO';

class TweetService {
    async getTweetList() {
        const tweetList = await Tweet.createQueryBuilder('tweet')
            .leftJoinAndSelect('tweet.user', 'user')
            .select('tweet.id')
            .addSelect('tweet.text')
            .addSelect('tweet.imageURL')
            .addSelect('tweet.createdAt')
            .addSelect('user.id')
            .addSelect('user.username')
            .addSelect('user.email')
            .getMany();
        return tweetList;
    }
    async getReplyTweetByTweetId(dto: FindReplyTweet) {
        const { parentTweetId } = dto;
        const replyTweetList = await TweetReply.find({
            parentTweetId: parentTweetId,
        });
        return replyTweetList;
    }
    async createTweet(dto: CreateTweetDTO) {
        const { userId, text, imageURL } = dto;
        const user = await User.findOne({
            where: { id: userId },
        });
        const tweet = new Tweet();
        tweet.text = text;
        tweet.imageURL = imageURL;
        tweet.user = user!;
        await tweet.save();
        return tweet;
    }
    async saveTweetReply(dto: ReplyTweetDTO) {
        const { parentTweetId, userId, text, imageURL } = dto;
        const user = await User.findOne({
            where: { id: userId },
        });
        const parentTweet = await Tweet.findOne({ id: parentTweetId });

        const tweet = new Tweet();
        tweet.text = text;
        tweet.imageURL = imageURL;
        tweet.user = user!;
        const savedTweetEntry = await tweet.save();
        const tweetReply = new TweetReply();
        tweetReply.tweetId = savedTweetEntry.id;
        tweetReply.parentTweetId = parentTweetId;
        tweetReply.tweet = tweet;
        tweetReply.parentTweet = parentTweet!;
        await tweetReply.save();
        return tweetReply;
    }
}

export default new TweetService();
