import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Instagram, Linkedin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
  _gotcha?: string; // honeypot
};

const FORM_ENDPOINT = 'https://formspree.io/f/myzdagnb';

const ContactSection = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    _gotcha: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // simple honeypot spam check
    if (formData._gotcha && formData._gotcha.trim() !== '') {
      // probably a bot — silently ignore or set an error state
      setStatus('error');
      setErrorMsg('Spam detected.');
      return;
    }

    setStatus('sending');
    setErrorMsg(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // include honeypot key so backend can check it if needed
          _gotcha: formData._gotcha
        })
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setErrorMsg(data?.error || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Liam4Shaw', color: 'hover:text-gray-900' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/liam4shaw', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss opportunities, projects, or just connect
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-gradient rounded-xl p-8 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot (invisible to users) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={6}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="btn-hero w-full py-3 text-lg font-medium"
                    size="lg"
                    disabled={status === 'sending'}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>

                {/* status messages */}
                {status === 'success' && (
                  <p className="text-sm text-green-600 mt-2">Thanks — I got your message and will reply within 24 hours.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-600 mt-2">{errorMsg || 'Something went wrong. Please try again.'}</p>
                )}
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div className="card-gradient rounded-xl p-8 border border-border/50">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-4 h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+91 93303 77645</span>
                  </div>

                  <div className="flex items-center">
                    <Mail className="mr-4 h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Available via contact form</span>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-xl p-8 border border-border/50">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Connect With Me
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      onClick={() => window.open(social.url, '_blank')}
                      variant="outline"
                      size="lg"
                      className={`p-3 transition-colors duration-300 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </Button>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Follow me for updates on projects, insights, and professional journey
                </p>
              </div>

              <div className="bg-primary-light rounded-xl p-6 border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-sm text-primary/80">
                  I typically respond to messages within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;