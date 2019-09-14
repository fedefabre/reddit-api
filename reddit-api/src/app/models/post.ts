import { PostObj, Media } from './original-post-obj';

export class Post {
    public title: string;
    public author: string;
    public entryDate: number; // Check format
    public thumbnail: string;
    public numberOfComment: number;
    public unreadStatus = true; 
    public visible = true;

    constructor(private originalPost: PostObj){
        this.title = originalPost.data.title;
        this.author = originalPost.data.author;
        this.entryDate = originalPost.data.created_utc;
        this.thumbnail = originalPost.data.thumbnail;
        this.numberOfComment = originalPost.data.num_comments;
    }

    public open(){
        this.unreadStatus = false;
    }

    public dismiss(){
        this.visible = false;
    }
}
