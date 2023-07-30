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

const SaveFamilias = async (nome, endereco, telefone, situacao) => {
    try {
        const docRef = await addDoc(collection(db, "Familias"), {
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            situacao: situacao
        });
        console.log("Document written with ID: ", docRef.id);
        return 'success';
    } catch (e) {
        console.error("Error adding document: ", e);
        return 'error';
    }
}

export default SaveFamilias;