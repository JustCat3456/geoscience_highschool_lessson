module.exports = {
    hooks: {
      "page:before": function(page) {
        page.content = `
  <script>
    MathJax = {
      tex: { 
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      },
      svg: {
        fontCache: 'global'
      }
    };
  </script>
  <script type="text/javascript" id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
  </script>
  ${page.content}
  `;
        return page;
      }
    }
  };