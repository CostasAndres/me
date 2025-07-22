// Worker para servir la aplicación Next.js
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Configurar CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Manejar preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Redirigir a tu aplicación Docker (necesitarás un dominio personalizado)
    const dockerAppUrl = 'https://andrescosta.dev'; // Cambiar por tu URL real
    
    try {
      const response = await fetch(dockerAppUrl + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        body: request.method !== 'GET' ? await request.text() : undefined,
      });

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers.entries()),
          ...corsHeaders,
        },
      });
    } catch (error) {
      return new Response('Error: ' + error.message, {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
}; 