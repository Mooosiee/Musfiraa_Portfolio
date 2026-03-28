import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_s9qad9o",
        "template_0rxjhg8",
        {
          from_name: form.name,
          to_name: "Musfiraa",
          from_email: form.email,
          to_email: "musfiraaarif12@gmail.com",
          message: form.message,
        },
        "RS5oewK_dwhBMRm_8",
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="flex items-center justify-center">
        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
          
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e1e] border-b border-white/10">
            {/* Traffic lights */}
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Terminal body */}
          <div className="bg-[#0d0d0d] px-6 sm:px-10 py-10">
            {/* Fake terminal prompt line */}
            <p className="font-mono text-green-400 text-sm mb-6">
              <span className="text-white/40">~/musfiraa</span> $ send_message
            </p>

            <h3 className="head-text max-w-xl mx-auto">Let's Connect!</h3>

            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-5 max-w-xl mx-auto flex flex-col space-y-7"
            >
              <label className="space-y-2">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-2">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-2">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </button>
            </form>

            {/* Fake blinking cursor at bottom */}
            <p className="font-mono text-white/80 text-sm mt-8">
              <span className="text-green-400">$</span> <span className="animate-blink">|</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;