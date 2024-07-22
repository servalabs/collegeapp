import mongoose from "mongoose";
const DBconn = async()=>{
try {
    const conn = await mongoose.connect("mongodb+srv://pixel:sdgbfhsdgfyusdfuy@myatlasclusteredu.lwtmj66.mongodb.net/finder",{useNewUrlParser:true,  useUnifiedTopology: true,});
    // console.log(`object connection established ${conn.connection.host}:${conn.connection}`);
} catch (error) {
    
}
} 

export default DBconn