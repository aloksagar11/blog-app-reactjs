import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../componant";

import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((state) => state.auth.userData);
  // console.log(userData);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appWriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // console.log(posts);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h2 className="text-2xl font-bold hover:text-gray-500">
                Login to Read Post
              </h2>
            </div>
          </div>
        </Container>
      </div>
    );
  }
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

export default Home;
