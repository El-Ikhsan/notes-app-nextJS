import { prismaClient } from "../../../database/database.js";

const removebyId = async (req, res) => {
    if (req.method === 'DELETE') {
        const noteId = req.query.noteId;
      try {
        const notes = await prismaClient.note.findFirst({
            where: {
                id: Number(noteId)
            },
        });

        res.status(200).json(notes);
        const deleteNote = await prismaClient.note.delete({
            where: {
                id: Number(noteId)
            },
            select: {
                id: true,
                title: true,
                body: true,
                createdAt: true,
            }
        });
        console.log(`delete note succes ${deleteNote}`);
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }

  export default removebyId;