import { PostObj, Media } from './original-post-obj';

export class Post {
    public title: string;
    public author: string;
    public entryDate: number; // Check format
    public image?: Media;
    public numberOfComment: number;
    public unreadStatus = true; 


    constructor(private originalPost: PostObj){
        this.title = originalPost.data.title;
        this.author = originalPost.data.author;
        this.entryDate = originalPost.data.created;
        this.image = originalPost.data.media;
        this.numberOfComment = originalPost.data.num_comments;
    }
}
