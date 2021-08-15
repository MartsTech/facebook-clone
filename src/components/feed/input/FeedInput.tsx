import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStore } from "stores/store";

const FeedInput = () => {
  const { user } = useStore().userStore;

  return (
    <div>
      <div>
        <Image
          className="rounded-full"
          src={user!.photoURL}
          width={40}
          height={40}
          layout="fixed"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default observer(FeedInput);
