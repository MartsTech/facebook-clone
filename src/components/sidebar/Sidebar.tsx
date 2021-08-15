import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const { user } = useStore().userStore;

  return (
    <section className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={user!.photoURL} title={user!.displayName} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </section>
  );
};

export default observer(Sidebar);
