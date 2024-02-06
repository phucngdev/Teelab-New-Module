import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhomBSr9czjxk2gDxZDN5BJFTY4OhYwH4",
  authDomain: "teelab-fab2c.firebaseapp.com",
  projectId: "teelab-fab2c",
  storageBucket: "teelab-fab2c.appspot.com",
  messagingSenderId: "526484702442",
  appId: "1:526484702442:web:195a73f9a00dd54ca58393",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function upload(file) {
  const fileObj = file.files[0];
  let fileUrl = "";
  if (fileObj) {
    const storageRef = ref(storage, `admin/${fileObj.name}`);
    try {
      const snapshort = await uploadBytes(storageRef, fileObj);
      const downloadUrl = await getDownloadURL(snapshort.ref);
      fileUrl = downloadUrl;
    } catch (error) {
      console.log("Đã có lỗi xảy ra", error);
    }
  } else {
    console.log("Đã có lỗi xảy ra");
  }
  return fileUrl;
}

export default upload;
