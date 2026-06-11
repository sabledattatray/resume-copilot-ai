import fetch from 'node-fetch';
import FormData from 'form-data';

// minimal valid PDF: %PDF-1.4\n%EOF
const pdfBuffer = Buffer.from('%PDF-1.4\n1 0 obj\n<<>>\nendobj\ntrailer\n<< /Size 1 /Root 1 0 R >>\n%%EOF\n', 'utf-8');

async function test() {
  const form = new FormData();
  form.append('jobDescription', 'Software Engineer');
  form.append('resume', pdfBuffer, { filename: 'resume.pdf', contentType: 'application/pdf' });
  
  try {
    const res = await fetch('http://localhost:3000/api/analyze', {
      method: 'POST',
      body: form
    });
    const text = await res.text();
    console.log('Status:', res.status, res.headers.get('content-type'));
    console.log('Body:', text.substring(0, 150));
  } catch(e) {
    console.error(e);
  }
}
test();
