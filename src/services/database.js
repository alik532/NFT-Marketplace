import { ref, set, get, child, push } from "firebase/database";
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
  
export const getUserCartById = (id) => {
    return get(child(ref(database), `users/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('returning user data')
      console.log(snapshot.val())
      return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}