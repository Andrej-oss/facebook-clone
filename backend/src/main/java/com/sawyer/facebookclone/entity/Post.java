package com.sawyer.facebookclone.entity;

@Entity
@Table(name = "POSTS")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @Lob
    private String post;
    private String name;
    private String email;

    @Lob
    private String image;
    private String profilePic;
    private String timeStamp;
}
