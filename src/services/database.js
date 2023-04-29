import { ref, set, child, push } from "firebase/database";
import { database } from "../firebase-config";
import { auth } from "../firebase-config";

export const writeUserToDB = (user) => {
    set(ref(database, 'users/' + user.uid), {
      id: user.uid,
      email: user.email,
      cart: [],
    })
    console.log("user written")
}

export const addAssetToCartDB = (asset) => {
  const thekey = push(child(ref(database), '/users/' + auth.currentUser.uid + '/cart'), asset)
  console.log("asset added to users cart in db")
  console.log(`thekey: ${thekey}`)
}