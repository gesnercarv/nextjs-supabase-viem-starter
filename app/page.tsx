import { createPublicClient, http } from 'viem';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  // Placeholder for Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! ?? ''
  );

  // Placeholder for viem client
  const client = createPublicClient({
    transport: http('https://eth.public-rpc.com')
  });

  const testEdgeFunction = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('prices', {
        body: { symbol: 'ETH' }
      });

      if (error) {
        console.error('Edge function error:', error);
      } else {
        console.log('Edge function response:', data);
      }
    } catch (err) {
      console.error('Error calling edge function:', err);
    }
  };

  return (
    <main className="min-h-screen p8 flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md text-center space-y-6">
        <h1>Next.js + Supabase + viem Starter</h1>
        <p className="text-gray-600 leading-relaxed">
          Minimal starter with Next.js, Supabase Edge Functions, and viem integration.
        </p>
        <div className="space-x-4">
          <button
            onClick={testEdgeFunction}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Test Edge Function
          </button>
        </div>
      </div>
    </main>
  );
}