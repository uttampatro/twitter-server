import { Request, Response } from 'express';
import { get } from 'lodash';
import { TweetService } from '../services';

class TweetController {
    fetchTweetList = async (req: Request, res: Response) => {
        try {
            const tweetList = await TweetService.getTweetList();
            return res.json(tweetList);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    createTweet = async (req: Request, res: Response) => {
        try {
            const userId = get(req, 'body.userId');
            const content = get(req, 'body.content');
            const imageURL = get(req, 'body.imageURL');
            const tweet = await TweetService.createTweet({
                userId: userId,
                content: content,
                imageURL: imageURL,
            });
            return res.json(tweet);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new TweetController();
