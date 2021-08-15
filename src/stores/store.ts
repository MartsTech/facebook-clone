import { createContext, useContext } from "react";
import PostStore from "./postStore";
import UserStore from "./userStore";

interface Store {
  userStore: UserStore;
  postStore: PostStore;
}

export const store: Store = {
  userStore: new UserStore(),
  postStore: new PostStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
