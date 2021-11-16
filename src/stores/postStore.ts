import { serverTimestamp } from "@firebase/firestore";
import { db, storage } from "config/firebase";
import { makeAutoObservable } from "mobx";
import { store } from "./store";

class PostStore {
  imageToPost: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      this.imageToPost = (readerEvent.target?.result as string) || null;
    };
  };

  removeImageToPost = () => {
    this.imageToPost = null;
  };

  sendPost = (message: string) => {
    const user = store.userStore.user;

    if (!user) {
      return;
    }

    db.collection("posts")
      .add({
        message,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        timestamp: serverTimestamp(),
      })
      .then((doc) => {
        if (this.imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(this.imageToPost, "data_url");

          this.removeImageToPost();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
  };
}

export default PostStore;
