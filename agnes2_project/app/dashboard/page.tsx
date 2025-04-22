import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default function Dashboard() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    supabase.from('orders').select('*').then(({ data }) => {
      setHistory(data || []);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <ul>
        {history.map((order) => (
          <li key={order.id}>
            {order.retailer}: {order.items} - ${order.total} - {order.status}
          </li>
        ))}
      </ul>
      <Link href="/">Back to Chat</Link>
    </div>
  );
}
