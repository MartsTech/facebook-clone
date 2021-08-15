import { CameraIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useStore } from "stores/store";

const FeedInputImagePicker = () => {
  const { selectImageToPost } = useStore().postStore;
  const filePickerRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="feed__inputOption"
      onClick={() => filePickerRef.current?.click()}
    >
      <CameraIcon className="h-7 text-green-400" />
      <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
      <input
        ref={filePickerRef}
        hidden
        type="file"
        onChange={selectImageToPost}
      />
    </div>
  );
};

export default FeedInputImagePicker;
