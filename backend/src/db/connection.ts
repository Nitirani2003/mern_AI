import { connect, disconnect } from "mongoose";
const MONGODB_URL='mongodb+srv://HemloNiti:niti@cluster0.mongodb.net/chatbot1?retryWrites=true&w=majority'
const mongo = 'mongodb+srv://HemloNiti:niti@cluster0.9qpvk1h.mongodb.net/Chatbot1?retryWrites=true&w=majority&appName=Cluster0'
async function connectToDatabase() {
  try {
    await connect(mongo);
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
