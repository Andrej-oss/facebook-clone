package com.sawyer.facebookclone.controller;

import com.sawyer.facebookclone.dto.PostDto;
import com.sawyer.facebookclone.entity.Post;
import com.sawyer.facebookclone.service.PostService;
import com.sawyer.facebookclone.service.impl.PostServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/post")
public class PostController {

    private PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public PostDto savePost(@RequestParam Map<String, String> requestParams) {
        String post = requestParams.get("post");
        String email = requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String profilePic = requestParams.get("profilePic");
        PostDto postDto = PostDto.builder()
                .file(file)
                .post(post)
                .email(email)
                .name(name)
                .timeStamp(new Date().toString())
                .build();
        return postService.addPost(postDto);
    }

    @GetMapping("/{id}")
    public PostDto getPost(@RequestParam String id) {
        return postService.getPost(id);
    }

    @GetMapping
    public List<PostDto> getPosts() {
        return postService.getAllPosts();
    }
}
