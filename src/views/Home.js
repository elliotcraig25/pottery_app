import React from 'react';

function Home() {
    return (
        <div>
            <div className='home-top'>
                <div>
                    <div>
                        Sunny Stewert
                    </div>
                </div>
                <div>
                    <nav>
                        <div>
                            Pottery
                        </div>
                        <div>
                            Lifestyle
                        </div>
                        <div>
                            Bio
                        </div>
                        <div>
                            Contact
                        </div>
                    </nav>
                </div>
            </div>
            <div className='home-mid'>
                <div>
                    <div className='picture_block-a'>

                    </div>
                    <div className='picture_block-b'>

                    </div>
                    <div className='picture_block-c'>

                    </div>
                </div>
            </div>
            <div className='home-bottom'>
                <div className='contact'>
                    <p>555 555-5555</p>
                    <p>sunny_email@email.com</p> 
                </div>
            </div>
        </div>
    );
};

export default Home;