import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const FeedInputSelectedImage = () => {
  const { imageToPost, removeImageToPost } = useStore().postStore;

  return (
    <>
      {imageToPost && (
        <div
          onClick={removeImageToPost}
          className="flex flex-col filter hover:brightness-110 transition
          duration-150 transform hover:scale-105 cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-contain h-10"
            src={imageToPost}
            alt="image to post"
          />
          <p className="text-xs text-red-500 text-center">Remove</p>
        </div>
      )}
    </>
  );
};

export default observer(FeedInputSelectedImage);
