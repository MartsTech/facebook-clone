import FeedInput from "./input/FeedInput";
import FeedPosts from "./posts/FeedPosts";
import FeedStories from "./stories/FeedStories";

const Feed = () => {
  return (
    <section
      className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 
      overflow-y-auto"
    >
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <FeedStories />
        <FeedInput />
        <FeedPosts />
      </div>
    </section>
  );
};

export default Feed;
