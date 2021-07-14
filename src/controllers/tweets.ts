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
    fetchReplyTweetByTweetId = async (req: Request, res: Response) => {
        try {
            const parentTweetId = get(req, 'params.id');
            const replyTweetList = await TweetService.getReplyTweetByTweetId({
                parentTweetId,
            });
            return res.json(replyTweetList);
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
            const text = get(req, 'body.text');
            const imageURL = get(req, 'body.imageURL');
            const tweet = await TweetService.createTweet({
                userId: userId,
                text: text,
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
    replyTweet = async (req: Request, res: Response) => {
        try {
            const userId = req.body.userId;
            const text = req.body.text;
            const imageURL = req.body.imageURL;
            const parentTweetId = req.body.parentTweetId;
            const tweetReply = await TweetService.saveTweetReply({
                text: text,
                imageURL: imageURL,
                parentTweetId: parentTweetId,
                userId: userId,
            });
            return res.json(tweetReply);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new TweetController();
