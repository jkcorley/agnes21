import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload = req.body;
  await supabase
    .from('order_status')
    .update({ status: payload.status })
    .eq('order_id', payload.orderId);
  res.status(200).send('OK');
}
