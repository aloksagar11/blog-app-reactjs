import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../componant";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appWriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // console.log(posts);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post, index) => (
            <div className="p-2 w-1/4" key={post.$id || index}>
              <PostCard post={{ post }} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
