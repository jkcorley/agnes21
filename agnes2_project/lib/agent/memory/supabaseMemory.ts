import { createClient } from '@supabase/supabase-js';
import { BaseMemory } from 'langchain/memory';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export class SupabaseMemory extends BaseMemory {
  async loadMemory(userId: string) {
    const { data } = await supabase
      .from('agent_memory')
      .select('memory')
      .eq('user_id', userId)
      .single();
    return data?.memory || {};
  }

  async saveMemory(userId: string, memory: any) {
    await supabase
      .from('agent_memory')
      .upsert({ user_id: userId, memory });
  }
}
