import { Tweet } from '../../entity/Tweet';
import { User } from '../../entity/User';
import { TweetList } from '../../entity/TweetList';
import { CreateTweetDTO } from './TweetDTO';

class TweetService {
    async getTweetList() {
        const tweetList = await TweetList.createQueryBuilder('tweetList')
            .leftJoinAndSelect('tweetList.tweet', 'tweet')
            .leftJoinAndSelect('tweet.user', 'user')
            .select('tweetList.id')
            .addSelect('tweet.id')
            .addSelect('tweet.content')
            .addSelect('tweet.imageURL')
            .addSelect('user.id')
            .addSelect('user.username')
            .addSelect('user.email')
            .getMany();
        return tweetList;
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
        return tweet;
    }
}

export default new TweetService();
