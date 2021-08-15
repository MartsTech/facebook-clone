import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStore } from "stores/store";

const HeaderProfile = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <>
      <Image
        onClick={signOut}
        className="rounded-full cursor-pointer"
        src={user!.photoURL}
        width={40}
        height={40}
        layout="fixed"
        alt="avatar"
      />
      <p className="whitespace-nowrap font-semibold pr-3">
        {user?.displayName}
      </p>
    </>
  );
};

export default observer(HeaderProfile);
