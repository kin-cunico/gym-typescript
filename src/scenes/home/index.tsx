import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    
  return (
    <section 
    id="Home"
    className="gap-16 bg-gray-20 py10 md:h-full md:pb-0"
    onClick={() => setSelectedPage(SelectedPage.Home)}
    >
        {/* IMG AND HEADER */}
        <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {/*HEADER*/}
            <div className= "z-10 mt-32 md:basis-3/5">
                {/*HEADING*/}
                <motion.div                 
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}>
                    <div className="relative">
                        {/* USING BEFORE TO POSITION RELATIVE TO ORIGINAL IMG*/}
                        <div className="before:absolut before:-top-20 before:z-[-1] md:before:content-evolvetext">
                        <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Se inspira no All Might? Quer treinar para vencer  o Goku num x1? 
                        Venha conhecer nossa gym, a mais preparada para você. Aqui temos classes todos os dias.
                        Aberta durante 24 horas, a nossa sociedade é o Goku.
                    </p>
                </motion.div>
                {/*Actions*/}
                <motion.div 
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -200},
                    visible: {opacity: 1, x: 0},
                }}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Se Inscreva
                    </ActionButton>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}>
                        <p>Saiba Mais</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/*IMG*/}
            <div className="flex basis -3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-page-graphic" src={HomePageGraphic} />
            </div>
        </motion.div>
        {/*Sponsors*/}
        {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex items-center gap-[20%] justify-center">
                <img alt="sponsor-red-bull" src={SponsorRedBull} />
                <img alt="sponsor-forbes" src={SponsorForbes} />
                <img alt="sponsor-fortune" src={SponsorFortune} />
                </div>
            </div>
        </div>
        )
        }
    </section>
  )
}

export default Home