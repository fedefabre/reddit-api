import { PostObj } from './original-post-obj';

export class Post {
    public id: string;
    public title: string;
    public author: string;
    public entryDate: number; // Check format
    public thumbnail: string;
    public numberOfComment: number;
    public unreadStatus = true; 
    public visible = true;
    public thumbnail_height;

    constructor(private originalPost: PostObj){
        this.id = originalPost.data.id;
        this.title = originalPost.data.title;
        this.author = originalPost.data.author;
        this.entryDate = originalPost.data.created_utc;
        this.thumbnail = originalPost.data.thumbnail;
        this.numberOfComment = originalPost.data.num_comments;
        this.thumbnail_height = originalPost.data.thumbnail_height;
    }

    public open(){
        this.unreadStatus = false;
    }

    public dismiss(){
        this.visible = false;
    }
}
