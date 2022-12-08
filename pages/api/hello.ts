// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from "mongodb"




 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // store the TODO in a JSON file

  return res.json({message: 'here'})
  // if(req.method==='POST'){
  //
  //
  //   const data = req.body;
  //   console.log(data)
  //
  //   const client = await MongoClient.connect('mongodb+srv://ciscocodes:Swaress123@cluster0.fmokvne.mongodb.net/notes?retryWrites=true&w=majority')
  //
  //   const db = client.db();
  //
  //     const notesCollection = db.collection('notes')
  //     const results = await notesCollection.insertOne(data)
  //     console.log(results)
  //     client.close();
  //
  //     res.status(200).json({ message: 'Sent successfully' })
  //
  //
  // }
}

export default handler;
