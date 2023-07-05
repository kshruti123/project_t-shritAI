import {motion,AnimatePresence, MotionConfig} from 'framer-motion'
import {snapshot, useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components'; 
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
 } from '../config/motion';
const Home = () => {
    const snap=useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro &&(
            <motion.section className="home" {...slideAnimation('left')}>
                  <motion.header {...slideAnimation("down")}>
                    <img
                    src='./threejs.png'
                    alt='logo'
                    style={{ width: '4rem', height: '4rem', objectFit: 'contain' }}
                    />
                  </motion.header>
                  <motion.div className='home-content'{...headContainerAnimation}>
                  <motion.div{...headTextAnimation}>
                  <h1 className="head-text">
                    DESIGN  <br className='xl:block hidden' /> TEE
                  </h1>
                  </motion.div>
                  <motion.div
                    {...headContentAnimation}
                    className="flext flex-col gap-5"
                  >
                  
                    <p className='max-w-md font-normal text-grey-600'><strong>
                        Create your unique T-shirt based on your preference by using 'AI'.</strong>
                    </p>
                  <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => state.intro=false}
                  customStyles="w-fit px-10 py-5.5 font-bold text-sm"
                  />
                  
                  </motion.div>
                  
                  
                  </motion.div>
            </motion.section>

        )}
    </AnimatePresence>
  )
}

export default Home