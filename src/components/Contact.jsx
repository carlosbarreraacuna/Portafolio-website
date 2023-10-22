import Headline from "../shared/Headline";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto mt-8 px-7 contact"
      id="contact"
    >
      <Headline
        title={"CONTACTAME"}
        subtitle={
          "No dude en ponerse en contacto conmigo enviando el siguiente formulario y me comunicaré con usted lo antes posible."
        }
      />

      <div className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32">
        <form>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresa tu nombre"
            className="p-5"
          />
          <label htmlFor="email">Correo electronico: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu correo electronico"
            className="p-5"
          />
          <label htmlFor="message">Mensaje: </label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="Ingresa tu mensaje"
            className="p-5 mb-8"
          ></textarea>
          <button className="btn px-14 py-4 shadow-sm">Enviar</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
