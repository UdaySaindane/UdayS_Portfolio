import { motion } from 'framer-motion';

// Fades + slides content up once when it scrolls into view.
// Only animates opacity/transform, so it stays smooth on low-end phones.
const tags = {
  div: motion.div,
  p: motion.p,
  li: motion.li,
  article: motion.article,
  ul: motion.ul,
};

const Reveal = ({ as = 'div', delay = 0, y = 24, children, ...rest }) => {
  const Tag = tags[as] ?? motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
