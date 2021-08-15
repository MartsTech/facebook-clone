import { useStore } from "stores/store";

const HeaderProfile = () => {
  const { signOut } = useStore().userStore;

  return (
    <div>
      {/*Profile Pic */}
      <p onClick={signOut} className="whitespace-nowrap font-semibold pr-3">
        Martin Velkov
      </p>
    </div>
  );
};

export default HeaderProfile;
