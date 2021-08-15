import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const FeedInputField = () => {
  const { user } = useStore().userStore;

  return (
    <form className="flex flex-1">
      <input
        className="rounded-full h-12 bg-gray-100 flex-grow px-5
        focus:outline-none"
        type="text"
        placeholder={`What's on your mind, ${user!.displayName}?`}
      />
      <button hidden type="submit" onClick={(e) => e.preventDefault()}>
        Submit
      </button>
    </form>
  );
};

export default observer(FeedInputField);
