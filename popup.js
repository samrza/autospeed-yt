const silenceSlider = document.getElementById("silence-speed");
const normalSlider = document.getElementById("normal-speed");
const fastSlider = document.getElementById("fast-speed");

// Get value display elements
const silenceValue = document.getElementById("silence-value");
const normalValue = document.getElementById("normal-value");
const fastValue = document.getElementById("fast-value");

silenceSlider.addEventListener("input", () => {
  silenceValue.textContent = silenceSlider.value + "x";
});

normalSlider.addEventListener("input", () => {
  normalValue.textContent = normalSlider.value + "x";
});

fastSlider.addEventListener("input", () => {
  fastValue.textContent = fastSlider.value + "x";
});

const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const settings = {
    enabled: document.getElementById("switch-component").checked,
    silenceSpeed: silenceSlider.value,
    normalSpeed: normalSlider.value,
    fastSpeed: fastSlider.value,
  };

  chrome.storage.local.set({ speedSettings: settings }, () => {
    console.log("Settings saved", settings);
  });
});

