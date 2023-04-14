import { client } from '@/utils/db-connect';

async function newContactHandler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.status(422).json({
        message: 'Not a valid email.',
      });
      return;
    }
    if (!name || name.trim().length < 3) {
      res.status(422).json({
        message: 'Not a valid name, should have at least 3 characters.',
      });
      return;
    }
    if (!message || message.trim().length < 20) {
      res.status(422).json({
        message:
          'Not a valid message, message should have at least 20 characters.',
      });
      return;
    }
    const newContactInfo = {
      email,
      name,
      message,
    };

    try {
      await client.connect();
      console.log('Connected to MongoDB!');
    } catch (err) {
      res.status(500).json({
        status: 'failed',
        message: 'Connecting to database failed.',
      });
      return;
    }
    try {
      const database = client.db('shawn-blog');
      const contacts = database.collection('contacts');
      const result = await contacts.insertOne(newContactInfo);
      res.status(201).json({
        id: result.insertedId,
        status: 'success',
        message: 'Contact info sent successfully. We will assist you shortly.',
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        status: 'failed',
        message: err.message || 'Storing message failed.',
      });
    }
    client.close();
  }
}

export default newContactHandler;
