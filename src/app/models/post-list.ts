import { OriginalPostObj } from './original-post-obj';
import { Post } from './post';

export class PostList {
    posts: Post[] = [];

    constructor(private originalPostObj: OriginalPostObj) {
        originalPostObj.data.children.forEach(post => this.posts.push(new Post(post)));
    }

    public dismissAll() {
        this.posts.forEach(post => post.dismiss());
    }
}
