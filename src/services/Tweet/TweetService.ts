import { Tweet } from '../../entity/Tweet';
import { User } from '../../entity/User';
import { CreateTweetDTO } from './TweetDTO';

class TweetService {
    async getTweetList() {
        const tweetList = await Tweet.createQueryBuilder('tweet')
            .leftJoinAndSelect('tweet.user', 'user')
            .select('tweet.id')
            .addSelect('tweet.content')
            .addSelect('tweet.imageURL')
            .addSelect('tweet.createdAt')
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
    }
}

export default new TweetService();
