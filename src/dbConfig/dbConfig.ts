import mongoose from "mongoose";


export async function connect () {

  try {

     await mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    connection.on('connected',()=>{
      console.log('mongodb connected successfully')
    })

    connection.on('error',(err)=>{
        console.log('mongodb connection error'+err);
        process.exit();
    })
    
  } catch (error) {
    
      console.log('error in db connection');
      console.log(error);
  }
  
}