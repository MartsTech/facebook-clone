import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useStore } from "stores/store";

const FeedInputField = () => {
  const { user } = useStore().userStore;
  const { sendPost } = useStore().postStore;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputRef.current?.value !== "") {
      sendPost(inputRef.current!.value);
      inputRef.current!.value = "";
    }
  };

  return (
    <form className="flex flex-1">
      <input
        className="rounded-full h-12 bg-gray-100 flex-grow px-5
        focus:outline-none"
        ref={inputRef}
        type="text"
        placeholder={`What's on your mind, ${user!.displayName}?`}
      />
      <button hidden type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default observer(FeedInputField);
