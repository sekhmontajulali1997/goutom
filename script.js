const downloadCvButton = document.getElementById('download-cv');

downloadCvButton.addEventListener('click', () => {
  const cvLink = document.createElement('a');
  cvLink.href = './cv.pdf'; // replace with your CV file path
  cvLink.download = 'YourName_CV.pdf'; // replace with your desired file name
  cvLink.click();
});
