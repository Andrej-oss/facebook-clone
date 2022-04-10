package com.sawyer.facebookclone.service.impl;

import com.sawyer.facebookclone.dto.PostDto;
import com.sawyer.facebookclone.entity.Post;
import com.sawyer.facebookclone.repository.PostRepository;
import com.sawyer.facebookclone.service.PostService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;

    @Autowired
    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public PostDto addPost(PostDto postDto) {
        Post post = new Post();
        BeanUtils.copyProperties(postDto, post);
        if (postDto.getFile() != null) post.setImage(postDto.getFile());
        else post.setImage(null);
        postRepository.save(post);
        postDto.setId(post.getId());
        postDto.setFile(post.getImage());
        return postDto;
    }

    @Override
    public List<Post> addAllPosts() {
        return null;
    }

    @Override
    public PostDto getPost(String id) {
        Post post = postRepository.getById(id);
        PostDto postDto = new PostDto();
        BeanUtils.copyProperties(post, postDto);
        postDto.setFile(post.getImage());
        return postDto;
    }

    @Override
    public List<PostDto> getAllPosts() {
        List<Post> postList = postRepository.findAll();
        List<PostDto> postDtoList = new ArrayList<>();
        postDtoList = postList.stream().map(post -> {
            PostDto postDto = new PostDto();
            BeanUtils.copyProperties(post, postDto);
            postDto.setFile(post.getImage());
            return postDto;
        }).collect(Collectors.toList());
        return postDtoList;
    }
}
