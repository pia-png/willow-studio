document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Stay curious.",
    "Bloom where you're planted.",
    "The woods are lovely, dark and deep.",
    "Everything starts somewhere.",
    "Dream bigger.",
    "Create what you wish existed.",
    "Find beauty in the little things.",
    "Take the scenic route.",
    "Collect moments, not things.",
    "Write your own story.",
    "Adventure awaits.",
    "Keep growing.",
    "The best is yet to come.",
    "Let your ideas bloom.",
    "One day at a time."
    ];
  const userInput = document.getElementById("userInput");
  const preview = document.getElementById("preview");

  const fontSize = document.getElementById("fontSize");
  const fontSizeValue = document.getElementById("fontSizeValue");

  const spacing = document.getElementById("spacing");
  const spacingValue = document.getElementById("spacingValue");

  const lineHeight = document.getElementById("lineHeight");
  const lineHeightValue = document.getElementById("lineHeightValue");

  const textColor = document.getElementById("textColor");
  const bgColor = document.getElementById("bgColor");

  const previewBox = document.querySelector(".preview-box");
  const downloadBtn = document.getElementById("downloadBtn");

  const randomQuoteBtn = document.getElementById("randomQuote");

  const defaultText = "The quick brown fox jumped over the lazy dog.";

  function pop() {
    preview.classList.remove("animate");
    // force reflow so the animation can retrigger
    void preview.offsetWidth;
    preview.classList.add("animate");
  }

  function updateText() {
    const value = userInput.value.trim();
    preview.textContent = value.length ? userInput.value : defaultText;
    pop();
  }

  function updateFontSize() {
    preview.style.fontSize = `${fontSize.value}px`;
    fontSizeValue.textContent = `${fontSize.value}px`;
  }

  function updateSpacing() {
    preview.style.letterSpacing = `${spacing.value}px`;
    spacingValue.textContent = `${spacing.value}px`;
  }

  function updateLineHeight() {
    preview.style.lineHeight = lineHeight.value;
    lineHeightValue.textContent = lineHeight.value;
  }

  function updateTextColor() {
    preview.style.color = textColor.value;
  }

  function updateBgColor() {
    previewBox.style.background = bgColor.value;
  }

  function setControls({ size, letterSpacing, height, color, background }) {
    fontSize.value = size;
    spacing.value = letterSpacing;
    lineHeight.value = height;
    textColor.value = color;
    bgColor.value = background;

    updateFontSize();
    updateSpacing();
    updateLineHeight();
    updateTextColor();
    updateBgColor();
    pop();
  }


  // --- Presets ---
  const presets = {
    journal: {
      size: 32,
      letterSpacing: 0,
      height: 1.6,
      color: "#2b2b2b",
      background: "#f4e8ce"
    },
    poster: {
      size: 110,
      letterSpacing: 4,
      height: 1.1,
      color: "#910909",
      background: "#ce4646"
    },
    signature: {
      size: 70,
      letterSpacing: -1,
      height: 1.2,
      color: "#467f29",
      background: "#000000"
    },

    randomQuote: {
      size: 30,
      letterSpacing: 0,
      height: 1.2,
      color: "#467f29",
      background: "#e1ffd3"
    }
  };

  Object.keys(presets).forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => setControls(presets[id]));
    }
  });

  randomQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    userInput.value = randomQuote;

    updateText();
});

  // --- Download as PNG ---
  downloadBtn.addEventListener("click", () => {
    html2canvas(previewBox).then((canvas) => {
      const link = document.createElement("a");
      link.download = "willow-design.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });

  userInput.addEventListener("input", updateText);
  fontSize.addEventListener("input", () => { updateFontSize(); pop(); });
  spacing.addEventListener("input", () => { updateSpacing(); pop(); });
  lineHeight.addEventListener("input", () => { updateLineHeight(); pop(); });
  textColor.addEventListener("input", updateTextColor);
  bgColor.addEventListener("input", updateBgColor);

  // Initialize preview with current control values
  updateFontSize();
  updateSpacing();
  updateLineHeight();
  updateTextColor();
  updateBgColor();
}); 




    