import Htext from "@/shared/Htext";
import { 
  HomeModernIcon, 
  UserGroupIcon, 
  AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";


const container ={
  hidden:{},
  visible: {
    transition: { staggerChildren:0.2 }
  }
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Espaço profissional",
    description:"Frequentado por profissionais de boxe, muay thay, karate, nado sincronizado, e pela comitiva brasileira de esportes"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Espaço profissional",
    description:"Frequentado por profissionais de boxe, muay thay, karate, nado sincronizado, e pela comitiva brasileira de esportes"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Espaço profissional",
    description:"Frequentado por profissionais de boxe, muay thay, karate, nado sincronizado, e pela comitiva brasileira de esportes"
  },
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
        className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -200},
                    visible: {opacity: 1, x: 0},
                }}
          >
          <Htext>MAIS DO QUE UM SIMPLES TREINO!</Htext> 
          <p className="my-5 text-sm">
            Oferecemos classes de dança, artes marciais, acrobacias, pole-dance e muito mais. Nos visite para conhecer o nosso ambiente.
          </p>         
        </motion.div>

        {/* Benefits */}
        <motion.div 
        className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView= "visible"
        viewport={{once: true, amount: .5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}         
          />
          ))}
        </motion.div>

        {/* Graphics DESCRIPTION */}
        <div className="mt-16  items-center justify-between gap-20 md:mt-28 md:flex">
          {/*GRAPHIC*/}
          <img
          className="mx-auto"
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}
          />

          {/*DESCRIPTION */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{ delay:0.1, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: 200},
                    visible: {opacity: 1, x: 0},
                }}>
                  <Htext>
                    MILHARES DE CLIENTES SATISFEITOS {""}
                    <span className="text-primary-500"> E CHAPADOS</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -200},
                visible: {opacity: 1, x: 0},
            }}>
              <p className="my-5 font-sans">
              Frequentado por profissionais de boxe, muay thay, karate, nado sincronizado, e pela comitiva brasileira de esportes
              </p>
              <p className="mb-5 font-sans">
              Frequentado por profissionais de boxe, muay thay, karate, nado sincronizado, e pela comitiva brasileira de esportes
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:right-20 before:-bottom-20 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Se Inscreva
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Benefits