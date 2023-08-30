import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

import slider1 from '../../image/slider.jpg';
import SingleProduct from './SingleProduct/SingleProduct';
import post1 from '../../image/post1.jpg';
import post2 from '../../image/post2.jpg';
import person1 from '../../image/person1.jpg';
import person2 from '../../image/person2.jpg';

const HOME = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slider1} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <div className="slider-info text-primary">
                                <h1>POWER & BEAUTY IN IC</h1>
                                <p>Free Library’s $1M auto archives are moving to Philly’s world-famous videos and to a Hershey attraction</p>
                                <div>
                                    <NavLink className="post-btn" to="/shop">Visit Here</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>



            {/* <div className="container">
                <div class="container py-5">
                    <h2 className="span-text align-left pb-2">New Car</h2>
                    <h4 className="pb-2">Awesome Class Model</h4>
                    <div class="row row-cols-1 row-cols-md-4 g-3">
                        {
                            products.map(product => <SingleProduct
                                key={product.key}
                                product={product}
                            >
                            </SingleProduct>)
                        }
                    </div>
                </div>
            </div> */}
            <div className="container pt-3">
                <h2>Our Recent Post</h2>
                <h4>"Here I share my all recent post and pic--"</h4>
                <div class="row text-info">
                    <div class="col text-dark text">
                        <div class="post">
                            <div class="post-text">
                                <h3>Beautiful Post</h3>
                                <p>This pic click by MORPH clan. When this clan visit a place this time they see a beautiful see then they are clicxk this pic […]</p>
                                <button class="post-btn">Visit Post</button>
                            </div>
                            <div>
                                <img src={post1} alt="" class="post-img" />
                            </div>
                        </div>
                    </div>
                    <div class="col text-dark text">
                        <div class="post">
                            <div class="post-text">
                                <h3>Beautiful Pic Ever</h3>
                                <p>This pic click by mogOp clan. When this clan visit a place this time they see a beautiful see then they are clicxk this pic […]</p>
                                <button class="post-btn">Visit Picture</button>
                            </div>
                            <div>
                                <img src={post2} alt="" class="post-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pa py-3">
                <div className="container person-info">
                    <h2>What Our Viwers Say About Page</h2>
                    <p class="pa1">"THIS IS WHAT OUR CLIENTS SAY ABOUT US AND HOW THE FEEL WITH OUR PROJECTS"</p>
                    <div class="row text-info">
                        <div class="col text-dark text">
                            <div class="pos">
                                <div>
                                    <img src={person1} alt="" class="post-img" />
                                </div>
                                <div class="pos-text">
                                    <h3>GI GI HADID</h3>
                                    <small class="small-text">Click By: <span class="text-danger">Moblie</span></small>
                                    <p class="pop">This pic click by MORPH clan. When this clan visit a place this time they see a beautiful see then they are clicxk this pic...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col text-dark text">
                            <div class="pos">
                                <div>
                                    <img src={person2} alt="" class="post-img" />
                                </div>
                                <div class="pos-text">
                                    <h3>Michael Smith</h3>
                                    <small class="small-text">Click By: <span class="text-danger">Tab</span></small>
                                    <p class="pop">This pic click by mogOp clan. When this clan visit a place this time they see a beautiful see then they are clicxk this pic...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="like">
                <div className="container like-me">
                    <div>
                        <h3>Do You Like My Page?</h3>
                        <p>If You Like Interesting Concept Please Follow And Support Thid Page</p>
                    </div>
                    <div>
                        <button class="like-btn">START L&F AND SUPPORT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOME;