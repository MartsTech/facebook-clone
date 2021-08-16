import contacts from "data/widgetsContacts.json";
import WidgetsContactsItem from "./WidgetsContactsItem";

const WidgetsContacts = () => {
  return (
    <>
      {contacts.map((contact) => (
        <WidgetsContactsItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default WidgetsContacts;
