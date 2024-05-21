import { useCallback, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const initState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initState);
  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendNotification = useCallback((type) => {
    const message =
      type === "success"
        ? "Message sent successfully!"
        : "Something went wrong!";
    setNotification({ type, message });
    setTimeout(() => {
      setNotification({
        type: "",
        message: "",
      });
    }, 3000);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      username: "Message Bot",
      content: `<@771639970854731808> New message from **${form.name}** (${form.email}) \n\`\`\`${form.message}\`\`\``,
    };

    const response = await fetch(import.meta.env.VITE_APP_CONTACT_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch(() => sendNotification("error"));

    if (response.ok) {
      sendNotification("success");
      setForm(initState);
    } else {
      sendNotification("error");
    }
    setLoading(false);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 hover:opacity-80 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {notification.message && (
            <p
              className={
                notification.type === "success"
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {notification.message}
            </p>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
