import { OriginalPostObj } from './original-post-obj';
import { Post } from './post';

export class PostList {
    posts: Post[];

    constructor(private originalPostObj: OriginalPostObj){
        
    }
}
