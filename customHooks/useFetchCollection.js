import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../fooddaswebapp/src/firebase/firebase";


const useFetchCollection = (collectionName) => {
 const [data, setData]  = useState([]);

 const getCollection = async () => {
   try {
     const docRef = collection(db, collectionName);
     const q = query(docRef, orderBy("createdAt", "desc"));

     onSnapshot(q, (snapshot) => {
       //console.log(snapshot.docs);
       const allData = snapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       setData(allData);
      
     });
   } catch (error) {
     console.log(error.message);
   }
 };

 useEffect(()=>{
    getCollection()
 },[])

 return {data}


}

export default useFetchCollection