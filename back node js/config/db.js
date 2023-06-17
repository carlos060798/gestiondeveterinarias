import mongoose from "mongoose";

// Connect to MongoDB database 

// process.env.MONGO_URI referencia la variable de entorno que se encuentra en el archivo .env que contiene la url

const connectDB = async () => {
 try{
   const db= await mongoose.connect(process.env.MONGO_URI
   ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   });
   const url=`${db.connection.host}:${db.connection.port}`;
   console.log(`MongoDB Connected: ${url}`);
 } catch(error){
 console.log(`Error :" ${error.message}}`);
 process.exit(1);
 }
}

export default connectDB;