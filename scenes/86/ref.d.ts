declare interface Video {
    name: string
    author: string
    projectId: number
    thumbnail: string
}

declare interface CommentReplyBase {
    author: string,
    content: string
}

declare interface Reply extends CommentReplyBase {
    tagged?: string
}

declare interface Comment extends CommentReplyBase {
    replies: Reply[]
}