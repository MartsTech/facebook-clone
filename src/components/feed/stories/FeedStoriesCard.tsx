import Image from "next/image";
import { Story } from "types/story";

interface FeedStoriesCard {
  story: Story;
}

const FeedStoriesCard: React.FC<FeedStoriesCard> = ({ story }) => {
  const { name, src, profile } = story;

  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32
      cursor-pointer overflow-hidden p-3 transition duration-200
      transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full
        z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        alt="profile"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full
        lg:rounded-3xl"
        src={src}
        layout="fill"
        alt="story"
      />
      <p
        className="absolute opacity-0 lg:opacity-100
        bottom-4 w-5/6 text-white text-sm font-bold truncate"
      >
        {name}
      </p>
    </div>
  );
};

export default FeedStoriesCard;
