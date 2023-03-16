import connectMongo from "@/database/conn"
import { getUsers } from "@/database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({error: "Error in the connection"}))

  // Type of Request
  // ['GET', 'POST', 'PUT', 'DELETE']

  const { method } = req

  switch(method){
    case 'GET':
        getUsers(req,res)
        res.status(200).json({ name: 'GET REQUEST' });
        break;
    case 'POST':
        res.status(200).json({ name: 'POST REQUEST'});
        break;
    case 'PUT':
        res.status(200).json({ name: 'PUT REQUEST' });
        break;
    case 'DELETE':
        res.status(200).json({ name: 'DELETE REQUEST' });
        break;
    default :
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} is not allowed!`)
  } 
}