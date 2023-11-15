import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DummyImage from "../Images/GRA_Home-Header-Overlay.png"


const Studentdashboard = () => {
    const [indexstate, setindexstate] = useState(null);
    const navigate = useNavigate();

    const handlecardclick = (index) => {
        navigate(`/internshippage${index + 1}`);

    };




    //Dummy data for intership
    const dummyData = [{
        id: 1,
        heading: "Intership1",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    },

    {
        id: 2,
        heading: "Intership2",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    },
    {
        id: 3,
        heading: "Intership3",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    },
    {
        id: 4,
        heading: "Intership4",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    },
    {
        id: 5,
        heading: "Intership5",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    },
    {
        id: 6,
        heading: "Intership6",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    },
    {
        id: 7,
        heading: "Intership7",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    },
    {
        id: 8,
        heading: "Intership8",
        content: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odit, natus ipsa perferendis,
        sapiente tempore rem quam aspernatur dolor cum quisquam
        sequi esse sit accusantium nam itaque obcaecati veritatis
         sunt est! `
    }

    ];







    return (
        <div>

            <h1 style={{ textAlign: "center" }}>Student Dashboard</h1>


            <Grid container spacing={2} style={{
                border: "5px solid black",
                paddingLeft: "70px",
                width: "98%",
                marginLeft: "10px"
            }}>


                {dummyData.map((item, index) => (
                    <div>

                        <Grid item xs={12} md={6} lg={4} xl={3} >
                            <Card style={{ width: "320px", margin: "10px" }} onClick={() => handlecardclick(index)}>
                                <CardActionArea>
                                    <img src={DummyImage} style={{ height: "100px", width: "100px" }} alt="" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.heading}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </div>
                ))}

            </Grid>






        </div>
    )
}

export default Studentdashboard;
