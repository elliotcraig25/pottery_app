import React from 'react';
import './Home.scss';

function Home() {
    return (
        <div>
            <div className='home-top'>
                <div className='logo-navbar'>
                    <div className='sunny_logo'>
                        <div className='sunny_logo-one'>
                            <div className='sunny_logo-two'>
                                <p>Sunny Stewart</p>
                            </div>
                        </div>
                    </div>
                    <div className='top_home-navbar'>
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
                    </div>
                </div>
            </div>
            <div className='home-mid'>
                <div className='home-mid-block-container'>
                    <div className='picture_block'>
                        <div className='picture_block_text'>
                            <p>View Travel</p>
                        </div>
                        <div className='picture_block_picture_container'>
                            <div className='picture_block_picture'>
                                picture one
                            </div>
                            <div className='picture_block_picture'>
                                picture two
                            </div>
                        </div>
                    </div>
                    <div className='picture_block'>
                        <div className='picture_block_text'>
                            <p>View Pottery</p>
                        </div>
                        <div className='picture_block_picture_container'>
                            <div className='picture_block_picture_b'>
                                picture one
                            </div>
                        </div>
                    </div>
                    <div className='picture_block'>
                        <div className='picture_block_text'>
                            <p>View Recipes</p>
                        </div>
                        <div className='picture_block_picture_container'>
                            <div className='picture_block_picture'>
                                picture one
                            </div>
                            <div className='picture_block_picture'>
                                picture two
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-bottom'>
                <div className='contact_info_container'>
                    <div className='contact_info_title'>
                        <p>Contact Info</p>
                    </div>
                    <div className='contact_info'>
                        <p>555 555-5555</p>
                        <p>sunny_email@email.com</p>
                        <p>@sunny_socail_media</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;