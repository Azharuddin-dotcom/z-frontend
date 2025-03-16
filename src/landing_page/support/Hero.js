import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='/' className='fs-5'>Track tickets</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: how do i activate F&O' className='mb-3' />
                    <br />
                    <a href='/'>Track account opening </a>
                    <a href='/' className='mx-5'>Track segment activation</a> 
                    <a href='/' className='mx-3'>Intraday margins</a>
                    <br /><br />
                    <a href='/'>Kite user manual</a>
                </div>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol style={{lineHeight: '2.5'}} className='fs-6'>
                        <li><a href='/'>Issue with order placement on Kite [Resolved]</a></li>
                        <li><a href='/'>Surveillance measure on scrips - March 2025</a></li>
                    </ol>                  
                </div>
            </div>
        </section>
    );
}

export default Hero;