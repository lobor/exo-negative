// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import classifierPromise from './../../classifier';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    body: { sentence, stem },
    method,
  } = req

  switch (method) {
    case 'POST':
      const classifier = await classifierPromise;
      // your check of sentence with your model trained
      classifier.addDocument(sentence, stem)
      classifier.train();
      classifier.save('classifier.json', function(err, classifier) {
        res.status(200).json({ ok: 200 })
      });
      
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
