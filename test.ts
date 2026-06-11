import fetch from 'node-fetch';
import FormData from 'form-data';

async function test() {
  const form = new FormData();
  form.append('jobDescription', 'test');
  
  const res = await fetch('http://localhost:3000/api/analyze', {
    method: 'POST',
    body: form
  });

  const text = await res.text();
  console.log('Status:', res.status, res.headers.get('content-type'));
  console.log('Body:', text.substring(0, 100));
}
test();
