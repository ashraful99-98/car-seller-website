import React from 'react';
import './Post.css';
import computer from '../../image/apple-devices.png';
import person1 from '../../image/person/person-8.jpg';
import person2 from '../../image/person/person-9.jpg';
import person3 from '../../image/person/person-10.jpg';
import person4 from '../../image/person/person-18.jpg';
const Post = () => {
    return (
        <div>
            <div className="postToHome">
                <div className="container">
                    <h1>Post Ka Postmortem......!</h1>
                    <h5 class="ancor"><a href="/home">Home</a> / <a href="/post">Post</a></h5>
                </div>
            </div>
            <div className='py-4 post-me'>
                <div className="container d-flex py-4 px-2">
                    <div>
                        <img src={computer} alt="" />
                    </div>
                    <div className='post-gigi'>
                        <div>
                            <h2>OUR MAIN FEATURES</h2>
                        </div>
                        <div>
                            <h3>Carefully Crafted Design</h3>
                            <p>This page i will create all section very cearfully. Actually team work is very importent. The all cradit gose to my team they support me every setuation.</p>
                        </div>
                        <div>
                            <h3>Free Updates & Support</h3>
                            <p>Support is most importent if you open a big project. If you work team wise you need mustly group support. I will compayer my web-site Top 10 bigest website.</p>

                        </div>
                        <div>
                            <button class="post-btn">VIEW ALL FEATURES</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="healthy">
                <div className="container">
                    <div className="health-info">
                        <h5 class="text-s">Team Of Web-site</h5>
                        <h1 class="mb-3 font-bold">They work headly and try to give her best...</h1>
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col cart-to">
                                <div class="card h-80 p-1 cart-box">
                                    <div class="img-div">
                                        <img class="img-thumbnail rounded-circle card-img" src={person1} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Ama Watson</h5>
                                        <small class="text-danger">Admin</small>
                                        <p class="card-text">She is admin in our website. She is hardworking person.  Her clicking picture is so awesome.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-80 p-1 cart-box">
                                    <div class="img-div">
                                        <img class="img-thumbnail rounded-circle card-img" src={person2} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Ali Shake</h5>
                                        <small class="text-danger">Editor</small>
                                        <p class="card-text">He edit  in our website. He edit our all post in website. Her clicking picture is so awesome. Pray for us.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-80 p-1 cart-box">
                                    <div class="img-div">
                                        <img class="img-thumbnail rounded-circle card-img" src={person3} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Kim Khan</h5>
                                        <small class="text-danger">Photographer</small>
                                        <p class="card-text">He is photographer in our team. He click beautiful picture in close eyes. Her clicking picture is so awesome. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-80 p-1 cart-box">
                                    <div class="img-div">
                                        <img class="img-thumbnail rounded-circle card-img" src={person4} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Gi Gi Hadid</h5>
                                        <small class="text-danger">CareTaker wedsite</small>
                                        <p class="card-text">She edit our post in website. She is hardworking person.Her clicking picture is so awesome.  Pray for us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;