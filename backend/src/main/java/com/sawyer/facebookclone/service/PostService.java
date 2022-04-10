package com.sawyer.facebookclone.service;

import com.sawyer.facebookclone.dto.PostDto;
import com.sawyer.facebookclone.entity.Post;

import java.util.List;

public interface PostService {

    PostDto addPost(PostDto post);

    List<Post> addAllPosts();

    PostDto getPost(String id);

    List<PostDto> getAllPosts();
}
