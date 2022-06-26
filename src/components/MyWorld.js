import React from 'react';
import { motion } from 'framer-motion';

function MyWorld() {
  return (
    <motion.div 
        className="bg-tangerine-900 md:h-screen"
        id="about"
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.9}}
    >
        <div  className="md:w-3/5 md:mx-auto px-4 md:px-0 py-36">
            <h2 className="text-charcoal-grey-900 text-3xl mb-6 font-bold">My world today</h2>
            <p className="text-lg">
                Cras tempus ridiculus fermentum sagittis fames. Convallis non montes mauris lobortis mauris suscipit interdum inceptos cras libero per rutrum. Molestie conubia torquent amet habitant magna torquent mus. <button className="font-medium underline">View all days</button> aliquam tellus lacus cursus euismod praesent. Vel porttitor cum facilisis dapibus justo nullam non est pulvinar ut semper. 
                Leo semper vulputate quisque lacus donec blandit pharetra iaculis? Sollicitudin tempus consequat montes laoreet dignissim, lectus pretium molestie parturient pharetra fringilla. Morbi ultrices tellus vel curabitur quam dolor class! Odio neque sagittis primis ligula in congue cursus porttitor arcu facilisi purus. In pulvinar 
                sed eu imperdiet mollis ipsum quis sociosqu nunc convallis. Habitasse, lacinia parturient porttitor. Semper inceptos curae; facilisi mattis conubia mollis condimentum litora accumsan pulvinar. Facilisi. Cras tempus ridiculus fermentum sagittis fames. Convallis non montes mauris lobortis mauris suscipit interdum inceptos cras libero per rutrum. sed eu imperdiet mollis ipsum quis sociosqu nunc convallis. Habitasse, lacinia parturient porttitor. Semper inceptos curae; facilisi mattis conubia mollis condimentum litora accumsan pulvinar. Facilisi.
            </p>
        </div>
    </motion.div>
  )
}

export default MyWorld