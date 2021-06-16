// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import classifierPromise from './../../classifier';

type Data = {
  result: 'negative' | 'positive'
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    body: { sentence },
    method,
  } = req

  switch (method) {
    case 'POST':
      // your check of sentence with your model trained
      const classifier = await classifierPromise;
      res.status(200).json({ result: classifier.classify(sentence) })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
