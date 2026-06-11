import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';

async function test() {
  const form = new FormData();
  form.append('jobDescription', 'Software Engineer');
  form.append('resume', Buffer.from('Software Engineer John Doe...'), { filename: 'resume.txt', contentType: 'text/plain' });
  
  try {
    const res = await fetch('http://localhost:3000/api/analyze', {
      method: 'POST',
      body: form
    });
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Body:', text.substring(0, 500));
  } catch(e) {
    console.error(e);
  }
}
test();
