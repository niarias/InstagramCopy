import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from 'src/services/PostsService/posts.service';
import { UserService } from 'src/services/UserService/user.service';

import { Post } from 'src/data/Post';
import { Comment } from 'src/data/Comment';
import { User } from 'src/data/User';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss']
})
export class CommentsPage implements OnInit, OnDestroy {
  subscription: any;
  post: Post;

  commentContent = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.post = this.postsService.getPost(params['id']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToProfile(author: User) {
    this.router.navigate(['/profile', author.id]);
  }

  commentHeartClick(comment: Comment) {
    comment.isLiked = !comment.isLiked;
  }

  addComment() {
    if (this.commentContent === '') {
      return;
    }

    const comment = new Comment(this.userService, true, this.commentContent);
    this.post.comments.push(comment);

    this.commentContent = '';
  }
}
