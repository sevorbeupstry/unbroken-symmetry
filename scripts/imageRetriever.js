/* Function to update any uploaded input image */
function updateImage() {
  /* Identify html element */
  var imgSrc = document.getElementById("inputImg").files[0];
  var image = document.getElementById("inputImgDisplay");
  console.log("imgSrc value=",imgSrc);

  /* Display uploaded image in html */
  try {
    image.src = window.URL.createObjectURL(imgSrc);
  }
  catch(err) {
    console.log("Warning: no image file has been selected.",err.message);
  }
  return false;
};

/* Function to execute clearCut program */
function executeClearCut() {
  console.log("ClearCutter running...");
}
