import WidgetsContacts from "./WidgetsContacts";
import WidgetsHeader from "./WidgetsHeader";

const Widgets = () => {
  return (
    <section className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <WidgetsHeader />
      <WidgetsContacts />
    </section>
  );
};

export default Widgets;
