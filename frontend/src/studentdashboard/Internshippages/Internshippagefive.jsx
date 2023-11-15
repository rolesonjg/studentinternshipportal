import React from 'react'
import DummyImage from "../../Images/GRA_Home-Header-Overlay.png"
import { Grid, Paper } from '@mui/material'
import "./intershippages.css"
const Internshippagefive = () => {
    return (
        // <div>
        //     <h1>Internshippagefive</h1>

        // </div>
        <div className='containeroftheInternshippage'>
            <h1 className='h1oftheInternshippage'>
                Internship page five
            </h1>


            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img className="ImageoftheIntershippage" src={DummyImage} alt="" />
                </Grid>
                <Grid item xs={8}>
                    <p className='paraoftheIntershippage' >Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Itaque molestiae modi quas sit consequatur quis voluptate nihil fugiat? Facere libero id nulla co
                        nsequatur veritatis esse nihil eius quasi, debitis excepturi. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Incidunt odit praesentium magni molestiae
                        nisi corrupti similique itaque, veniam sunt quaerat autem! Mollitia earum facil
                        is veritatis expedita quo soluta illum architecto.lorem
                        se nihil eius quasi, debitis excepturi. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Incidunt odit praesentium magni molestiae
                        nisi corrupti similique itaque, veniam sunt quaerat autem! Mollitia earum facil
                        is veritatis expedita quo soluta illum architecto.lo
                        se nihil eius quasi, debitis excepturi. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Incidunt odit praesentium magni molestiae
                        nisi corrupti similique itaque, veniam sunt quaerat autem! Mollitia earum facil
                        is veritatis expedita quo soluta illum architecto.lo</p>
                </Grid>
            </Grid>
            <p className='paraoftheIntershippage' >Lorem ipsum dolor sit amet, consectetu
                adipisicing elit. Officiis nobis eaque placeat ipsam, animi, velit odit rerum
                iusto doloribus, ducimus recusanda
                nemo commodi praesentium vel ab. Quaerat quas odio culpa.</p>
            <button className='buttonoftheIntershippage'>Click Here to Confirm your Intership</button>

        </div>
    )
}

export default Internshippagefive
