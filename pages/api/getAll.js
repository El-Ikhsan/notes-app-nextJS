import { prismaClient } from "../../database/database.js";

const getAllNotes = async (req, res) => {
    if (req.method === 'GET') {
      try {
        const notes = await prismaClient.note.findMany();
        res.status(200).json(notes);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }

  export default getAllNotes;