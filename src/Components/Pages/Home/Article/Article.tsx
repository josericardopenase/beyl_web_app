import React from 'react'
import { Container } from 'react-bootstrap'
import { Bolder } from '../../../General/Constants/Text/Bolder'
import { Paragraph } from '../../../General/Constants/Text/Paragraph'
import { Title1 } from '../../../General/Constants/Text/Title1'
import { Title3 } from '../../../General/Constants/Text/Title3'
import { Title4 } from '../../../General/Constants/Text/Title4'

export const Article = () => {
    return (
        <Container className ="mt-5">
            <Title1><Bolder>Los peligros de un pectoral acortado y
                    como solucionarlo correctamente</Bolder></Title1>


            <Title3 style={{marginTop: "1rem", marginBottom: "2rem"}}>El pectoral acortado es una consecuencia de malas posturas, el escaso énfasis
en la flexibilidad así como el trabajo de dominadas, press de banca y demás
ejercicios.</Title3>        

            <img src="https://sabercompetir.com/wp-content/uploads/2019/09/relacion-entrenador-jugador-SC.jpg" style={{width: "100%", height: "500px", borderRadius: "20px", objectFit: "cover"}}></img>


            <Title4 style={{marginTop: "2rem"}} color="secondary" > 
            Comúnmente se suele recomendar únicamente el trabajo de la musculatura de la
espalda alta (romboides, deltoides posterior, trapecios…) y de la musculatura
inhibida, es decir, ejercicios como el band pull apart o el face pull. Sin embargo el
trabajar dicha musculatura no basta para solucionar el problema. A su vez, el ya
mencionado fenómeno, conlleva una postura cifótica y perjudicial. Sin embargo, el
típico consejo de simplemente retraer los hombros y forzar una postura correcta, no
va a cambiar de forma óptima el percance muscular y a largo plazo podríamos llegar
a tener graves dificultades en la espalda dado que la musculatura tendería a ejercer
una fuerza compresora y desembocando en hernias u otras problemáticas
asociadas a la zona de la espalda baja.
 Entonces, ¿cómo podemos solucionarlo correctamente?
Lo que debemos hacer en primera instancia, es liberar tensión de las regiones
musculares que tienden a propiciar una postura adelantada. Un trabajo de liberación
miofascial en puntos gatillo y diferentes zonas del pectoral junto con una posterior
liberación en trapecios y espalda alta nos ayudará a mejorar notablemente nuestra
higiene postural. Aplicando el foam y una pelota dura lograremos nuestro objetivo.
            </Title4>


            <Title4 style={{marginTop: "2rem"}} color="secondary" > 
            Comúnmente se suele recomendar únicamente el trabajo de la musculatura de la
espalda alta (romboides, deltoides posterior, trapecios…) y de la musculatura
inhibida, es decir, ejercicios como el band pull apart o el face pull. Sin embargo el
trabajar dicha musculatura no basta para solucionar el problema. A su vez, el ya
mencionado fenómeno, conlleva una postura cifótica y perjudicial. Sin embargo, el
típico consejo de simplemente retraer los hombros y forzar una postura correcta, no
va a cambiar de forma óptima el percance muscular y a largo plazo podríamos llegar
a tener graves dificultades en la espalda dado que la musculatura tendería a ejercer
una fuerza compresora y desembocando en hernias u otras problemáticas
asociadas a la zona de la espalda baja.
 Entonces, ¿cómo podemos solucionarlo correctamente?
Lo que debemos hacer en primera instancia, es liberar tensión de las regiones
musculares que tienden a propiciar una postura adelantada. Un trabajo de liberación
miofascial en puntos gatillo y diferentes zonas del pectoral junto con una posterior
liberación en trapecios y espalda alta nos ayudará a mejorar notablemente nuestra
higiene postural. Aplicando el foam y una pelota dura lograremos nuestro objetivo.
            </Title4>
        </Container>
    )
}
