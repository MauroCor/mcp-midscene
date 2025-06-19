# Playwright IA: Midscene.js

Proyecto de automation con Playwright e inteligencia artificial (Midscene).

1. Instala dependencias, ejecuta tests y visualiza el reporte para tener un primer vistazo del modo en que opera Midscene.

2. Configura el MCP Server de Midscene para que automatize lo que le pidas desde un prompt.

---

## 📥 Instalación

Instalar dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

---

## ▶️ Ejecución de pruebas

Primero exporta tu API_KEY:

```bash
#linux
export OPENAI_API_KEY="tu_api_key"
```

Ejecuta los tests con Playwright y genera un reporte en HTML:

```bash
npx playwright test
```

Si deseas ver el proceso de ejecución:
```bash
npx playwright test --headed
```

---

## 📂 Abrir el reporte

Para visualizar el reporte generado, usa el comando:

```bash
open midscene_run/report/tu_reporte.html
```

Se abrirá automáticamente una ventana del navegador con el dashboard de resultados (flujos de MidSceneJS, capturas y trazas).

------

## 📂 MidScene: APIs básicas de operación de IA

Usa estas APIs en tus steps para que la IA haga el trabajo. 

- ai o aiAction – Interacción general con IA
- aiTap – Operación de clic
- aiHover – Operación de hover (pasar el cursor)
- aiInput – Operación de entrada de texto
- aiKeyboardPress – Operación de teclado
- aiScroll – Operación de desplazamiento
- aiQuery – Consulta a IA
- aiAssert – Aserción de IA
- aiWaitFor – Espera basada en IA

Puedes encontrar más detalles en midscenejs.com/api

---
---

## 🧠 MidScene: MCP Server

Permite usar lenguaje natural para automatizar flujos y generar pruebas con **Playwright**, utilizando el agente de inteligencia artificial **MidScene** a través de su **MCP Server**.

---

## ✅ Requisitos

1. Instala [Cursor](https://cursor.sh/).
2. Abre este proyecto con Cursor.
3. Configura el MCP en Cursor.  

---

## ⚙️ Configuración del MCP en Cursor

1. Abre Cursor  
2. Ve a: `File > Preferences > Settings`  
3. Agrega la siguiente configuración en el apartado **MCP**:

```json
{
  "mcpServers": {
    "mcp-midscene": {
      "command": "npx",
      "args": ["-y", "@midscene/mcp"],
      "env": {
        "MIDSCENE_MODEL_NAME": "gpt-4o-mini",
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "MCP_SERVER_REQUEST_TIMEOUT": "800000"
      }
    }
  }
}
```
4. No olvides ingresar tu OPENAI_API_KEY en el json.

---

## 🤖 Enviar prompt en Cursor

Abre un chat en **Cursor** (Ctrl + N) y escribe tu prompt. Por ejemplo:

```bash
Usa el MCP de Midscene para:
1. Open page https://practicetestautomation.com/practice-test-login/ 
2. Type username incorrectUser into Username field
3. Type password Password123 into Password field
4. Push Submit button
5. Verify error message is displayed
6. Verify error message text is Your username is invalid!

Al finalizar:
Crea el test case en Playwright con midscene, en la carpeta e2e con nombre login, usa de ejemplo @sauce-demo.spec.ts 
Exporta OPENAI_API_KEY que esta en @mcp.json 
Ejecuta el test npx playwright test e2e/login.spec.ts --headed
```

Nota: En el prompt, brinda contexto (ej: "@mcp.json"). De esta manera, Midscene encuentra la información necesaria para cumplir tu solicitud con éxito (templates, API_KEYS, etc). 