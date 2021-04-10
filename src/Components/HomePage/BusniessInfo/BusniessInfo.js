import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: '',
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10036, USA',
        icon: '',
        background: 'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+154293753242',
        icon: '',
        background: 'primary'
    }
]

const BusniessInfo = () => {
    return (
        <section className="row">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusniessInfo;