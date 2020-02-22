/**
 * Get attribute of an HTML Element
 * @param {HTMLElement} element
 * @param {*Element attribute} attributeName
 * @returns {String value}
 */
function getAttributeString(element, attributeName) {
  if (element.getAttribute(attributeName) !== null) {
    return element.getAttribute(attributeName);
  }

  return "";
}

/**
 * Create simple version of DocumentFragment for an fragment
 * @param {MicroFE framgnet} fragment
 * @returns {DocumentFragment}
 */
function documentFragmentFromString(fragment) {
  const result = document.createDocumentFragment();
  const container = document.createElement("div");

  container.innerHTML = fragment;

  while (container.firstChild) {
    result.appendChild(container.firstChild);
  }

  return result;
}

/**
 * Scan and get element
 * @param {DocumentFragment} fragment
 */
function scanContent(fragment) {
  // limitation : only one script at an fragment
  const element = fragment.querySelector("script");

  return {
    jsScriptTag: element
  };
}

/**
 * Create new element by extend it from HTMLElement
 */
class FragmentLoader extends HTMLElement {
  async connectedCallback() {
    // get the fragmen URL by href attribute
    const href = getAttributeString(this, "href");
    // fetch it
    const fragmentResponse = await fetch(href);
    // get the text version of it
    const fragment = await fragmentResponse.text();
    // insert it to the fragment-loader element
    this.innerHTML = fragment;

    // create miniature of documenen fragment from loaded fragment
    const documentFragment = documentFragmentFromString(fragment);
    // get the <script> tag inside DocumentFragment
    const { jsScriptTag } = scanContent(documentFragment);

    // get the JS URL asset from it
    const jsScriptTagUrl = getAttributeString(jsScriptTag, "src");

    // create script element
    var script = document.createElement("script");
    // add source
    script.src = jsScriptTagUrl;

    // append it to document head, that will automatically load after appended
    document.head.appendChild(script);
  }
}

// Register the custom element of <fragment-loader>
customElements.define("fragment-loader", FragmentLoader);
