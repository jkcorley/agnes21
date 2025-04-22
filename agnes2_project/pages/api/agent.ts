import type { NextApiRequest, NextApiResponse } from 'next';
import { agentChain } from '../../lib/agent';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, message } = req.body;
  const response = await agentChain.call({ userId, input: message });
  res.status(200).json({ text: response.text });
}
