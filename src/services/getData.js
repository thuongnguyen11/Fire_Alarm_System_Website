import { onValue, ref } from "firebase/database";
import { database } from "../firebase";


const GetAllDataRealTime = async (AddAllTitemsToTable) => {
    const dbRef = ref(database, "FireAlarm");

    onValue(dbRef, (snapshot) => {
        var infor = [];
        snapshot.forEach(childSnapshot => {
            infor.push(childSnapshot.val());
        });
        // console.log(infor)
        AddAllTitemsToTable(infor);
    })
}

export {
    GetAllDataRealTime
}
// window.onload = GetAllDataRealTime;