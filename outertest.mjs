import mongoose from "mongoose";

console.log("hatrg")
await mongoose.connect("mongodb+srv://pixel:sdgbfhsdgfyusdfuy@myatlasclusteredu.lwtmj66.mongodb.net/finder", { useNewUrlParser: true, useUnifiedTopology: true });
console.log("544aas5sa1d5sa1dsa")

const userSchema = new mongoose.Schema({
    name:String
})
const User = mongoose.model("User", userSchema);

const newUser = new User({name:"John Doe"});

newUser.save()