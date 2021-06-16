// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: 'negative' | 'positive'
}

export default function handler(
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

      res.status(200).json({ result: 'negative' })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
