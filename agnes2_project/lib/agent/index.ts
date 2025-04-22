import { OpenAI } from 'langchain/llms/openai';
import { ConversationalChain } from 'langchain/chains';
import { SupabaseMemory } from './memory/supabaseMemory';
import { amazonAdapter, targetAdapter } from './tools/retailAdapters';

const llm = new OpenAI({ temperature: 0.3, modelName: 'gpt-4' });
const memory = new SupabaseMemory();

export const agentChain = new ConversationalChain({
  llm,
  memory,
  tools: [amazonAdapter, targetAdapter],
});
