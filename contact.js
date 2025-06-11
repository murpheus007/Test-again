document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = encodeURIComponent(this.name.value);
  const email = encodeURIComponent(this.email.value);
  const message = encodeURIComponent(this.message.value);

  const subject = encodeURIComponent('Contact via Website');
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

  window.location.href = `mailto:support@yourdomain.com?subject=${subject}&body=${body}`;
});
