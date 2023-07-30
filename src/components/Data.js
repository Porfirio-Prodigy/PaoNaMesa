import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";

// Configurar a conexão com o Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcRjDiVsZgj6edEZ7RR8QuvhPOclKVcyg",
    authDomain: "paonamesa-e06cc.firebaseapp.com",
    projectId: "paonamesa-e06cc",
    storageBucket: "paonamesa-e06cc.appspot.com",
    messagingSenderId: "19025959669",
    appId: "1:19025959669:web:9e6757f29ffdbbe33b03bc",
    measurementId: "G-9C0BH1YZZ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SaveData = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Salvar os dados no Firebase
        try {
        const docRef = await addDoc(collection(db, "dados"), {
            name: name,
            email: email
        });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        } finally {
            setName('');
            setEmail('');
        }
      };
    
      const retrieveData = async () => {
        const querySnapshot = await getDocs(collection(db, "dados"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => `);
            console.log(doc.data());
        });
      }
    
      const deleteData = async () => {
        await deleteDoc(doc(db, "dados", "kf1IpyHD6g8cc7HfSamZ"));
        await deleteDoc(doc(db, "dados", "qbXNO5GGv18yhSxanIGK"));
      }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={name} onChange={(event) =>  setName(event.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(event) =>  setEmail(event.target.value)} />
      <button type="submit" >Salvar</button>
      <button type="button" onClick={retrieveData}>Recuperar</button>
      <button type="button" onClick={deleteData}>Delete</button>
    </form>
  );
};

export default SaveData;
