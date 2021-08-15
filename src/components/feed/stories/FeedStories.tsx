import stories from "data/feedStories.json";
import FeedStoriesCard from "./FeedStoriesCard";

const FeedStories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <FeedStoriesCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default FeedStories;
