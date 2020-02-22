function getAttributeString(element, attributeName) {
  if (element.getAttribute(attributeName) !== null) {
    return element.getAttribute(attributeName);
  }

  return "";
}

function documentFragmentFromString(fragment) {
  const result = document.createDocumentFragment();
  const container = document.createElement("div");

  container.innerHTML = fragment;

  while (container.firstChild) {
    result.appendChild(container.firstChild);
  }

  return result;
}

function loadJS(url) {}

function scanContent(fragment) {
  const element = fragment.querySelector("script");

  return {
    jsScriptTag: element
  };
}

class FragmentLoader extends HTMLElement {
  async connectedCallback() {
    const href = getAttributeString(this, "href");
    const fragmentResponse = await fetch(href);
    const fragment = await fragmentResponse.text();
    this.innerHTML = fragment;

    const documentFragment = documentFragmentFromString(fragment);
    const { jsScriptTag } = scanContent(documentFragment);

    const jsScriptTagUrl = getAttributeString(jsScriptTag, "src");

    var script = document.createElement("script");
    script.src = jsScriptTagUrl;

    document.head.appendChild(script);
  }
}

customElements.define("fragment-loader", FragmentLoader);
