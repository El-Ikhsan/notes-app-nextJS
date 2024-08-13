import { prismaClient } from "../../../database/database.js";

const editNote = async (req, res) => {
    if (req.method === 'PATCH') {
      const { title, body } = req.body;
      const noteId = req.query.noteId;
      const createdAt = new Date().toISOString();
      try {
        const note = await prismaClient.note.update({
          where: {
            id: Number(noteId)
          },
          data: {
            id: Number(noteId),
            title: title,
            body: body,
            createdAt: createdAt,
          },
          select: {
            id: true,
            title: true,
            body: true,
            createdAt: true,
          }
        });
  
        res.status(200).json({ data: note });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['PATCH']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }


  export default editNote;