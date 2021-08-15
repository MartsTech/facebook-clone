import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStore } from "stores/store";

const FeedInputAvatar = () => {
  const { user } = useStore().userStore;

  return (
    <Image
      className="rounded-full"
      src={user!.photoURL}
      width={40}
      height={40}
      layout="fixed"
      alt="avatar"
    />
  );
};

export default observer(FeedInputAvatar);
