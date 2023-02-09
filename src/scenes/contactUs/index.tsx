import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from "@/shared/Htext";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
    const {
        register,
        trigger,
        formState: { errors },

    } = useForm();

const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
}
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div
            className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}>
                    <Htext>
                        <span className="text-primary-500">SE INSCREVA AGORA</span> PARA CUIDAR DO SEU CORPO
                    </Htext>
                    <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
            </motion.div>
            {/* FORM AND IGM*/}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }}
                >
                    <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/f954b4876b80ab6f691fb008c61600ad"
                    method="POST"
                    >
                        <input
                        className={inputStyles}
                        type="text"
                        placeholder="NOME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "O nome é obrigatório"}
                                {errors.name.type === "maxLength" && "Numero de caracteres máximo é 100"}
                            </p>
                        )}
                        <input
                        className={inputStyles}
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                        />
                        {errors.email && (
                            <p className="mt-10 text-primary-500">
                                {errors.email.type === "required" && "email é obrigatório"}

                                {errors.email.type === "pattern" && "caracteres inválidos"}
                            </p>
                        )}
                        <textarea
                        className={inputStyles}
                        rows={5}
                        cols={50}
                        {...register("message", {
                            required: true,
                            maxLength: 1000,
                        })}
                        placeholder="MENSAGEM"
                        {...register("message", {
                            required: true,
                            maxLength: 500,
                        })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "Campo obrigatório"}

                                {errors.message.type === "maxLength" && "Numero de caracteres máximo é 500"}
                            </p>
                        )}

                        <button
                        type="submit"
                        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration -500 hover:text-white"
                        >
                            ENVIAR
                        </button>
                    </form>
                </motion.div>

                <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }}
                >
                    <div  className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[1]">
                        <img 
                        className="w-full"
                        alt="contact-us-page-graphic"
                        src={ContactUsPageGraphic}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
};

export default ContactUs