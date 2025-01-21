const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const credentials = "./X509-cert-528190240967817566.pem";
const client = new MongoClient(
  "mongodb+srv://patientdata.ddsxp.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=PatientData",
  {
    tlsCertificateKeyFile: credentials,
    serverApi: ServerApiVersion.v1,
  }
);

let coll;
async function run() {
  try {
    await client.connect();
    const db = client.db("school");
    coll = db.collection('mca');
    startServer();
  } catch{};
}
run().catch(console.dir);

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/',(req,res)=>{
    coll.insertOne(req.body).then(()=>{
        res.send('Form Submit Successfully...');
    }).catch((err)=>{
        res.send(err);
    })
})

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDA2sBIJxXRSL-ORIcJvQp1hB6BiXtQK48",
  authDomain: "portfolio77180.firebaseapp.com",
  projectId: "portfolio77180",
  storageBucket: "portfolio77180.firebasestorage.app",
  messagingSenderId: "834858930899",
  appId: "1:834858930899:web:581c76f0d0b19da02fba26",
  measurementId: "G-2VH05FCDZJ"
};

const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1);