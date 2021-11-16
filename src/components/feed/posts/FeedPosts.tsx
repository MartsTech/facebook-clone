import { collection, query } from "@firebase/firestore";
import { db } from "config/firebase";
import { orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { Post } from "types/post";
import FeedPostsItem from "./FeedPostsItem";

const FeedPosts = () => {
  const [posts] = useCollection(query(collection(db, 'posts'), orderBy("timestamp", "desc")));

  return (
    <div>
      {posts?.docs.map((doc) => {
        const post: Post = {
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          image: doc.data().image,
          message: doc.data().message,
          postImage: doc.data().postImage,
          timestamp: doc.data().timestamp,
        };
        return <FeedPostsItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default FeedPosts;
