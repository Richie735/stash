---
tags: ["Coding", "VS Code", "Config"]
title: "VS Code - Extensions & Settings"
description: "All my settings and extensiosn for VS Code."
icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.7851 1.38057L5.56484 5.25075L7.68844 6.87108L10 5.10733V2C10 1.76607 9.91968 1.5509 9.7851 1.38057Z"></path><path d="M10 9.89268L2.58433 4.23442C2.37657 4.0759 2.08597 4.08889 1.89301 4.26532L1.17719 4.91984C1.08223 5.00667 1.02543 5.11898 1.00681 5.23629C0.979153 5.41056 1.03574 5.59585 1.17661 5.72504L9.7851 13.6194C9.91968 13.4491 10 13.2339 10 13V9.89268Z"></path><path d="M10.7532 1.0368C10.9105 1.32251 11 1.65081 11 2V13C11 13.3492 10.9105 13.6775 10.7532 13.9632C10.7906 13.9515 10.8274 13.9369 10.8634 13.9195L13.5399 12.625C13.8211 12.4889 14 12.2028 14 11.8889V3.11109C14 2.79721 13.8212 2.5111 13.5399 2.37507L10.8634 1.08048C10.8274 1.06306 10.7906 1.04852 10.7532 1.0368Z"></path><path d="M1.17661 9.27496L2.37233 8.17842L4.00854 9.6789L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496Z"></path></svg>'
reviewDate: 2024-05-29
---

-  **Theme:** [Min Theme](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.min-theme)
-  **Icons:** [Symbols](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols)
-  **Font:** [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## Extensions

### General

-  [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
-  [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
-  [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-  [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
-  [Apc Customize UI++](https://marketplace.visualstudio.com/items?itemName=drcika.apc-extension)
-  [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)
-  [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

### Web (Js)

-  [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
-  [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
-  [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
-  [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
-  [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-  [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
-  [Console Ninja](https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja)

### Web (.Net)

-  [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
-  [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)
-  [C# Extensions](https://marketplace.visualstudio.com/items?itemName=kreativ-software.csharpextensions)
-  [.NET Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscode-dotnet-pack)
-  [.NET Install Tool](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscode-dotnet-runtime)
-  [NuGet Gallery](https://marketplace.visualstudio.com/items?itemName=patcx.vscode-nuget-gallery)

## Settings

```json
{
   // Some settings require specific extensions:
   // 1. APC Customize UI++
   // 2. Prettier - Code formatter

   // Fonts Needed:
   // 1. JetBrains Mono
   // 2. Inter
   // 3. JetBrainsMono Nerd Font

   // Window and Theme Settings
   "window.zoomLevel": 1,
   "workbench.colorTheme": "Min Dark",
   "symbols.hidesExplorerArrows": false,
   "workbench.iconTheme": "symbols",

   // Editor Settings
   "editor.fontFamily": "JetBrains Mono",
   "editor.fontSize": 14,
   "editor.lineHeight": 1.8,
   "editor.rulers": [80, 120],
   "editor.bracketPairColorization.enabled": true,
   "editor.renderLineHighlight": "gutter",
   "editor.fontLigatures": true,

   // Workspace Settings
   "workbench.startupEditor": "newUntitledFile",
   "workbench.editor.labelFormat": "short",
   "editor.semanticHighlighting.enabled": false,
   "breadcrumbs.enabled": false,
   "workbench.activityBar.location": "default",
   "extensions.ignoreRecommendations": true,

   // Explorer Settings
   "explorer.compactFolders": false,
   "explorer.fileNesting.enabled": true,
   "explorer.fileNesting.patterns": {
      "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-lock*, bun.lockb, nest*",
      "tailwind.config.js": "tailwind.config*, postcss.config*",
      ".env.local": ".env*",
      ".env": ".env*"
   },

   // Minimap and Scrollbar Settings
   "editor.minimap.enabled": true,
   "editor.minimap.scale": 1,
   "editor.minimap.renderCharacters": false,
   "editor.scrollbar.vertical": "hidden",
   "editor.scrollbar.horizontal": "hidden",

   // Status Bar and Layout Settings
   "workbench.statusBar.visible": true,
   "workbench.layoutControl.enabled": false,
   "window.commandCenter": false,

   // Font and Terminal Settings
   "apc.font.family": "Inter",
   "apc.listRow": {
      "height": 24
   },
   "terminal.integrated.fontSize": 14,
   "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",

   // Custom Stylesheet
   "apc.stylesheet": {
      ".title-label > h2": "display: none",
      ".editor-actions": "display: none",
      ".nosidebar .inline-tabs-placeholder": "width: 75px",
      ".pane-header": "padding: 0 8px",
      ".pane-body": "padding: 8px",
      ".split-view-view:first-child .pane-header": "display: none !important;",
      ".monaco-list-row": "border-radius: 4px;",
      ".monaco-workbench .monaco-list:not(.element-focused):focus:before": "display: none;"
   },

   // Code Formatting and Prettier Settings
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true,
   "editor.formatOnPaste": true,
   "editor.codeActionsOnSave": {
      "source.fixAll": "always",
      "source.organizeImports": "always"
   },
   "prettier.tabWidth": 3,
   "workbench.sideBar.location": "right",
   "javascript.updateImportsOnFileMove.enabled": "always",
   "workbench.editor.empty.hint": "hidden",
   "[csharp]": {
      "editor.defaultFormatter": "ms-dotnettools.csharp"
   },
   "github.copilot.editor.enableAutoCompletions": true,
   "terminal.integrated.env.windows": {},
   "console-ninja.featureSet": "Community"
}
```
