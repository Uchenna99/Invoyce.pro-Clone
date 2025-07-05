import CreateSendTrackInvoices from "../Components/CreateSendTrackInvoices";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import HeroButton from "../Components/HeroButton";
import HowItWorksSecttion from "../Components/HowItWorksSecttion";
import TextBox from "../Components/TextBox";
import TransparentPricingSection from "../Components/TransparentPricingSection";
import hero from "../assets/Images/hero-illustration.svg";
import { motion } from "framer-motion";



const HomePage = () => {
  return (
    <>
      <div className="w-full h-fit lg:aspect-[3/1.85] xl:w-[1280px] flex max-lg:flex-col items-center justify-between gap-8 max-xl:px-4 
        max-md:pt-34 max-lg:pt-24">

        <div className="w-full lg:w-[520px] lg:min-w-[480px] h-fit flex flex-col gap-4">

          <motion.div className="w-full h-fit flex flex-col gap-4"
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, ease:'easeInOut'}} >
            <TextBox
              texts="New: 1% Transaction Fee Model"
              colorSelect="primary"
              fontSize="small"
            />

            <h2 className="text-4xl md:text-5xl text-[#0a0a0a] font-bold leading-11 md:leading-15 mb-2 mt-1">
              Smart Invoicing for Africa's <span className="text-[#285cb4]">
                  Freelancers
                </span>
            </h2>
          </motion.div>

          <motion.div className="w-full h-fit flex"
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.1, ease:'easeInOut'}} >

            <p className="max-w-[520px] text-lg text-[#737373] leading-7 mb-2">
              Create and send professional invoices, get paid faster, and track payments—with our simple invoicing tool 
              designed for freelancers in Africa and beyond.
            </p>
          </motion.div>

          <motion.div className="w-full h-fit flex"
            initial={{opacity:0, y:15}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2, ease:'easeInOut'}} >
            <p className="text-[#285cb4] font-medium mb-2">
              No monthly subscriptions - pay only 1% when your clients pay you.
            </p>
          </motion.div>

          <motion.div className="w-full flex max-sm:flex-col gap-4 mt-2"
            initial={{opacity:0, y:15}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.3, ease:'easeInOut'}} >
            <div className="w-full sm:w-fit ">
              <HeroButton buttonText="Get Started for Free"/>
            </div>
            <div className="w-full sm:w-fit h-[54px] flex items-center justify-center px-6 border border-[#e5e5e5] rounded-xl cursor-pointer
              hover:bg-[#737373]/10 active:bg-[#737373]/10 transition-all duration-200">
              <p className="font-medium text-lg">View Features</p>
            </div>
          </motion.div>

        </div>

        <motion.div className="w-[360px] min-w-[280px] lg:w-[600px] aspect-square bg-cover bg-right"
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2, ease:'easeInOut'}} >
          <img src={hero} alt="" className="drop-shadow-xl" />
        </motion.div>

      </div>


      <CreateSendTrackInvoices/>


      <HowItWorksSecttion/>


      <TransparentPricingSection/>


      <FAQ/>


      <Footer/>

    </>
  )
}

export default HomePage;