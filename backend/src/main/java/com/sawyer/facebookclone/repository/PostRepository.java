package com.sawyer.facebookclone.repository;

import com.sawyer.facebookclone.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, String> {
}
