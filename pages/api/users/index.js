import { users } from "@/user";

export default function handler(req,res){
  if(req.method === 'GET'){
    res.status(200).json(users)
  }
  else if(req.method === 'POST'){
    const user = req.body.user
    console.log(user);
    const newUser = {
      id: Date.now(),
      name: user
    }
    users.push(newUser);
    res.status(201).json(newUser);
  }
}