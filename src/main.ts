import "./styles/main.css";
import { mountLayout } from "./components/layout";

// Each HTML page declares its id on <body data-page="...">.
const pageId = document.body.dataset.page ?? "home";

mountLayout(pageId);

// Load the page-specific module (src/pages/<pageId>.ts) if one exists.
const pageModules = import.meta.glob<{ init?: () => void }>("./pages/*.ts");
const load = pageModules[`./pages/${pageId}.ts`];
if (load) {
  void load().then((module) => module.init?.());
}
