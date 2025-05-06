
import { motion, AnimatePresence } from 'motion/react'

import React, { useEffect, useRef, useState } from 'react'

const useOutsideClick = (cb) => {
    const ref = useRef(null)
    useEffect(() => {
      const handleClick = (e) => {

        
        if (ref.current && !ref.current.contains(e.target)) {
          cb()
        }
      }
      document.addEventListener('click', handleClick)
      return () => {
       document.removeEventListener('click' , handleClick)
     }  
    }, [cb])

    return ref
}

const Gallery = () => {
  const [current, setCurrent] = useState(null)

  const parrentAnimation = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const childAnimation = {
    hidden: {opacity: 0, y:20},
    show: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.3}
    }
  }

  const ref = useOutsideClick(() => { setCurrent(null) })

  
  return (
    <motion.div
      variants={parrentAnimation}
      initial="hidden"
      animate="show"
      className=' text-white h-full w-full p-2 grid grid-cols-3 grid-rows-2 gap-4'>
      <AnimatePresence>
        {current && <>
          <motion.div
            initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
            className='fixed z-20 inset-0 w-full h-full bg-black/50 backdrop-blur-sm transition-all duration-300'></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
            ref={ref} layoutId={`card-${current.thumb}`} className='fixed inset-0 z-20 h-fit m-auto w-[420px] rounded-2xl border border-neutral-700 opacity-100 p-4 bg-neutral-800 '>
          <img layoutId={`card-image-${current.thumb}`} src={current.thumb} className='rounded-md' alt={current.thumb} />
          <div className='flex flex-col mt-3 gap-2'>
            <h2 className='font-bold text-2xl'>{current.title}</h2>
            <div className='overflow-auto h-40'>
             <p className='text-neutral-400'>{ current.desc}</p>
            </div>
          </div>
        </motion.div>
        </>
        }
      </AnimatePresence>

      {data.map((card) => (
        <motion.div
          layoutId={`card-${card.thumb}`}
          onClick={(e) => {
            e.stopPropagation()
            setCurrent(card)
          }}
          variants={childAnimation}
          className='group relative overflow-clip bg-neutral-800 p-4 rounded-2xl cursor-pointer' key={card.title}
        >
          <motion.div
            layoutId={`card-image-${card.thumb}`}
            className="absolute inset-0 bg-cover bg-center transition-all duration-300"
            style={{
              backgroundImage: `url(${card.thumb})`,
            }}
            ></motion.div>


          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

        <h2 className='font-bold text-2xl absolute bottom-5 opacity-0 group-hover:opacity-100 transition-all duration-300'>{card.title}</h2>  
        </motion.div>
      ))}
    </motion.div>
  )
}

const data = [
  {
    title: 'Half-Life 2',
    thumb: '/gallery/half-life-2.jpg',
    desc: 'Gordon Freeman became the most popular nameless and voiceless protagonist in gaming history. He is painted as the most famous scientist and a hero within the world of Half-Life, and for a good reason. In the first game he saved the planet from alien invasion, this time, when the invasion is already begun, the world needs his help one more time. And you, as a player, will help this world to survive. This time Gordon arrives in City 17, ravaged and occupied by Combines, where he meets his old Black Mesa friends.'
  },
  {
    title: 'Red Dead Redemption 2',
    thumb: '/gallery/red-dead-redemption-2.jpg',
    desc: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.'
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    thumb: '/gallery/the-witcher-3-wild-hunt.jpg',
    desc: 'The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.'
  }
  ,
  {
    title: 'Elden Ring',
    thumb: '/gallery/elden-ring.jpg',
    desc: "The Golden Order has been broken.Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will."
  }
  ,
  {
    title: 'Need For Speed: Most Wanted',
    thumb: '/gallery/need-for-speed-most-wanted.jpg',
    desc: "Wake up to the smell of burnt asphalt as the scent of illicit street racing permeates the air. Need for Speed Most Wanted challenges you to become the most notorious and elusive street racer. Features • Master the art of cop evasion in Barricade Runner and other new race modes. • Modify your ride to beat any tuner, muscle, or exotic. • Customize the look of your car to elude police pursuit. • Win races, climb the Blacklist, become the Most Wanted."
  }
  ,
  {
    title: 'Dark Souls III',
    thumb: '/gallery/dark-souls-iii.jpg',
    desc: "Dark Souls III is the fourth installment in the Dark Souls series, now introducing the players to the world of Lothric, a kingdom which has suffered the fate similar to its counterparts from the previous games, descending from its height to utter darkness. A new tale of dark fantasy offers to create and guide the path of game’s protagonist, the Ashen One, through the dangers of the world before him."
  }

]

export default Gallery