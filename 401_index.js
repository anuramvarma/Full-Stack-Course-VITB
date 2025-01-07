const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
var serviceAccount = require("./key.json");
initializeApp
({
  credential: cert(serviceAccount)
});

const db = getFirestore();
db.collection('Practice').add({
    name:"Anuram Varma",
    email:"anuramvarma811@gmail.com",
    Phone:"9638521470",
    place:"Bhimavaram",
    class:"B.TECH CSE-C",
    College:"VITB"
})
db.collection("Data_MSGS_TELEGRAM").get().then(function(docs)
{
      docs.forEach((doc) => 
        {
          console.log(doc.id, '=>', doc.data());
      });
})

db.collection("Practice").get().then(function(docs)
{
    docs.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
})
