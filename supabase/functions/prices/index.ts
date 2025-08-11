import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createPublicClient, http } from 'https://esm.sh/viem@2.21.15';

serve(async (req) => {
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok'), { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { symbol } = await req.json();

    // Placeholder for viem client
    const client = createPublicClient({
      transport: http('https://eth.public-rpc.com')
    });

    // Placeholder for blockchain data fetching
    const blockNumber = await client.getBlockNumber();

    // Placeholder response
    const response = {
      symbol: symbol || 'ETH',
      price: 3000.00, // Placeholder price
      blockNumber: blockNumber.toString(),
      timestamp: new Date().toISOString(),
    };

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in prices function:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});