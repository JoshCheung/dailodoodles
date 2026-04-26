import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: "What are the stickers made of?",
    a: "Our stickers are printed on premium vinyl with a waterproof, weather-resistant finish. They're built to survive your water bottle, your laptop, and your life.",
  },
  {
    q: "What sizes are the stickers?",
    a: 'Sizes vary by design, typically ranging from 2" to 3". The size is listed on each sticker\'s page.',
  },
  {
    q: "Are the stickers die-cut?",
    a: "Yes! Most stickers are die-cut to the shape of the design, but a few are not for good reason hehe",
  },
  // {
  //   q: "How do I place an order?",
  //   a: "Head to our Custom Order page and fill out the Google Form, or DM us on Instagram @dailo.doodles. We'll get back to you within a few days.",
  // },
  // {
  //   q: "Do you do custom orders or bulk orders?",
  //   a: "Yes! We love custom and bulk orders. Fill out the Custom Order form and tell us what you're thinking.",
  // },
  // {
  //   q: "How long does shipping take?",
  //   a: "See our Shipping page for current processing times and shipping options.",
  // },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <ul className={styles.list}>
        {FAQS.map((item, i) => (
          <li key={i} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {item.q}
              <span className={styles.icon}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className={styles.answer}>{item.a}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
