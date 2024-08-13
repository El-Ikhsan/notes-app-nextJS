import { prismaClient } from "../../../database/database.js";

const getbyId = async (req, res) => {
    if (req.method === 'GET') {
        const noteId = req.query.noteId;
      try {
        const notes = await prismaClient.note.findFirst({
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

  export default getbyId;