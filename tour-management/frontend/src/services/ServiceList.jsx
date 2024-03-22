import React from 'react'
import SerciveCard from './ServiceCard';
import {Col} from 'reactstrap';


import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const serviceData = [

    {
        imgUrl:weatherImg,
        title:"calculate weather",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

    {
        imgUrl:customizationImg,
        title:"calculate weather",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },



    
]


const ServiceList=() =>{
  return(
  <>
  { serviceData.map((item,index) => (
  <Col lg='3' key = {index}>
    <SerciveCard item= {item}/>
    </Col>
    ))}
  </>
  );
};

export default ServiceList
