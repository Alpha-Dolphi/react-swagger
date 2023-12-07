import React from "react";
import SwaggerUIBundle from "./swagger-ui-bundle.js"
import SwaggerUIStandalonePreset from "./swagger-ui-standalone-preset.js"
import "./swagger-ui.css"

export default function Swagger() {

  React.useEffect(() => {
    const ui = SwaggerUIBundle({
        url: "\/swagger\/swagger.json",
        deepLinking:  true ,
        docExpansion: "list",
        dom_id: "#swagger-ui",
        validatorUrl: null,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        filter:  true 
      })
      window.ui = ui
  })

  return (
    <div>
      <div id="swagger-ui"></div>
    </div>
  );
}