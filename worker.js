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

    // URL de tu aplicación Docker (donde está corriendo tu Next.js)
    const dockerAppUrl = 'https://andrescosta.dev';
    
    try {
      // Construir la URL completa
      const targetUrl = dockerAppUrl + url.pathname + url.search;
      
      // Crear headers para la petición
      const headers = new Headers(request.headers);
      
      // Remover headers que pueden causar problemas
      headers.delete('host');
      headers.delete('origin');
      headers.delete('referer');
      
      // Hacer la petición a tu aplicación Docker
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: headers,
        body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.text() : undefined,
      });

      // Crear headers de respuesta
      const responseHeaders = new Headers(response.headers);
      
      // Agregar headers de CORS
      Object.entries(corsHeaders).forEach(([key, value]) => {
        responseHeaders.set(key, value);
      });

      // Agregar headers de seguridad
      responseHeaders.set('X-Content-Type-Options', 'nosniff');
      responseHeaders.set('X-Frame-Options', 'DENY');
      responseHeaders.set('Referrer-Policy', 'origin-when-cross-origin');

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      console.error('Error en Worker:', error);
      
      // Si no puede conectar con la aplicación Docker, mostrar página de error
      return new Response(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <title>Andrés Costas Moreno - Portfolio</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="description" content="Portfolio de Andrés Costas Moreno - Desarrollador Full Stack & DevOps">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }
            
            .container {
              max-width: 800px;
              width: 100%;
              padding: 40px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 20px;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              text-align: center;
            }
            
            h1 { 
              font-size: 3em; 
              margin-bottom: 20px; 
              font-weight: 700;
              text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .subtitle {
              font-size: 1.5em;
              margin-bottom: 30px;
              opacity: 0.9;
            }
            
            .description {
              font-size: 1.2em;
              margin-bottom: 40px;
              line-height: 1.6;
              opacity: 0.8;
            }
            
            .tech-stack {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 10px;
              margin-bottom: 40px;
            }
            
            .tech-tag {
              padding: 8px 16px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 20px;
              font-size: 0.9em;
              border: 1px solid rgba(255, 255, 255, 0.3);
            }
            
            .btn {
              display: inline-block;
              padding: 15px 30px;
              background: rgba(255, 255, 255, 0.2);
              color: white;
              text-decoration: none;
              border-radius: 10px;
              border: 1px solid rgba(255, 255, 255, 0.3);
              transition: all 0.3s ease;
              font-size: 1.1em;
              font-weight: 600;
              margin: 10px;
            }
            
            .btn:hover {
              background: rgba(255, 255, 255, 0.3);
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            }
            
            .btn-primary {
              background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
              border-color: #4facfe;
            }
            
            .btn-primary:hover {
              background: linear-gradient(135deg, #43a3f5 0%, #00e6f2 100%);
            }
            
            .social-links {
              margin-top: 30px;
            }
            
            .social-links a {
              color: white;
              text-decoration: none;
              margin: 0 10px;
              opacity: 0.8;
              transition: opacity 0.3s ease;
            }
            
            .social-links a:hover {
              opacity: 1;
            }
            
            .error-message {
              background: rgba(239, 68, 68, 0.2);
              border: 1px solid rgba(239, 68, 68, 0.3);
              border-radius: 10px;
              padding: 15px;
              margin: 20px 0;
              font-size: 0.9em;
            }
            
            @media (max-width: 768px) {
              h1 { font-size: 2.5em; }
              .subtitle { font-size: 1.3em; }
              .container { padding: 30px 20px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Andrés Costas Moreno</h1>
            <p class="subtitle">Desarrollador Full Stack & DevOps</p>
            <p class="description">
              Apasionado por crear soluciones tecnológicas innovadoras. 
              Especializado en desarrollo web moderno, DevOps y arquitectura de sistemas.
            </p>
            
            <div class="error-message">
              <strong>⚠️ Aplicación principal no disponible</strong><br>
              La aplicación Next.js no está ejecutándose actualmente.
            </div>
            
            <div class="tech-stack">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Next.js</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">Cloudflare</span>
              <span class="tech-tag">DevOps</span>
            </div>
            
            <div>
              <a href="mailto:costasandres01@gmail.com" class="btn btn-primary">Contactar</a>
              <a href="https://github.com/CostasAndres" class="btn" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/andres-costas-moreno/" class="btn" target="_blank">LinkedIn</a>
            </div>
            
            <div class="social-links">
              <p>🚀 Servido desde Cloudflare Workers</p>
            </div>
          </div>
        </body>
        </html>
      `, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          ...corsHeaders,
        },
      });
    }
  },
}; 