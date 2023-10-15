const filePickerElement = document.querySelector("#image");
const imagePreviewElement = document.querySelector("#image-preview");

filePickerElement.addEventListener("change", () => {
  const files = filePickerElement.files;

  if (!files || files.length === 0) {
    imagePreviewElement.style.display = "none";
    return;
  }

  const picketFile = files[0];
  imagePreviewElement.src = URL.createObjectURL(picketFile);
  imagePreviewElement.style.display = "block";
});
