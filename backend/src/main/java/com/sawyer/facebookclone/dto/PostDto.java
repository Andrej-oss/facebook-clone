package com.sawyer.facebookclone.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class PostDto {

    private String id;
    private String post;
    private String name;
    private String email;
    private String profilePic;
    private String file;
    private String timeStamp;
}