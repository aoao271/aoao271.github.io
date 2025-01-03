window.MathJax = {
  tex: {
    inlineMath: [
      ["\\(", "\\)"],
      ["$", "$"]
    ],
    displayMath: [
      ["\\[", "\\]"],
      ["$$", "$$"]
    ],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let lastUrl = location.href.split('#')[0]; 
  
  const reloadMathJax = () => {
    if (typeof MathJax !== 'undefined') {
      MathJax.typesetPromise && MathJax.typesetPromise();
    }
  };

  new MutationObserver(() => {
    const url = location.href.split('#')[0];
    if (url !== lastUrl) {
      lastUrl = url;
      reloadMathJax();
    }
  }).observe(document, {subtree: true, childList: true});
});
