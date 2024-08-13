import { prismaClient } from "../../database/database.js";

const deleteAllNotes = async (req, res) => {
    if (req.method === 'DELETE') {
      try {
        const notes = await prismaClient.note.deleteMany();
        res.status(200).json(notes);

        console.log(`delete note succes ${notes}`);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }

  export default deleteAllNotes;