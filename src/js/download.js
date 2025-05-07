import resumePDF from 'url:../files/Vitalii_Aleksandrov_Junior_FrontEnd_Developer.pdf';

document.getElementById('download-btn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'Vitalii_Aleksandrov_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
