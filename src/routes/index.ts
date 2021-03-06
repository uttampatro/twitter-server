import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/users';
import TweetController from '../controllers/tweets';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('server up and running');
});

// User controller
router.get('/users', UserController.fetchUserProfile);
router.post('/login', UserController.loginUser);

//Tweet controller
router.get('/tweetList', TweetController.fetchTweetList);
router.get('/replyTweetList/:id', TweetController.fetchReplyTweetByTweetId);
router.post('/tweet', TweetController.createTweet);
router.post('/replyTweet', TweetController.replyTweet);

export default router;
