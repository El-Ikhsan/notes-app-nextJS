import { prismaClient } from "../../database/database.js";

const add = async (req, res) => {
    if (req.method === 'POST') {
      const { title, body } = req.body;
      const createdAt = new Date().toISOString();
      try {
        const note = await prismaClient.note.create({
          data: {
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
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }


  export default add;