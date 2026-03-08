import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import Alert from "../components/Alert";
// import useAlert from '../hooks/useAlert.js';
// service_s9qad9o
// template_0rxjhg8
const Contact = () => {
  const formRef = useRef();

  //  const { alert, showAlert, hideAlert } = useAlert();
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
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Musfiraa",
          from_email: form.email,
          to_email: "musfiraaarif12@gmail.com",
          message: form.message,
        },
        "RS5oewK_dwhBMRm_8",
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
    } catch (error) {
      console.error(error);
    }
    //   .then(
    //     () => {
    //       setLoading(false);
    //       showAlert({
    //         show: true,
    //         text: 'Thank you for your message :)',
    //         type: 'success',
    //   });

    //       setTimeout(() => {
    //         hideAlert(false);
    //         setForm({
    //           name: '',
    //           email: '',
    //           message: '',
    //         });
    //       }, [3000]);
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       showAlert({
    //         show: true,
    //         text: "I didn't receive your message :/",
    //         type: 'danger',
    //       });
    //     },
    //   );
  };

  return (
    <section className="c-space my-20">
      {/* {alert.show && <Alert {...alert} />} */}
      <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
          <h3 className="head-text mt-10">Let's Connect!</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col space-y-7"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
