import React from 'react';
import './VideosPictures.css';
import social from '../../image/social/37145_Comment.png';
import socia2 from '../../image/social/facebook-like-logo-svg-vector.svg';
import socia3 from '../../image/social/images.png';
import socia4 from '../../image/social/download.png';
import img1 from '../../image/img/1.jpg';
import img2 from '../../image/img/2.jpg';
import img3 from '../../image/img/3.jpg';
import img4 from '../../image/img/4.jpg';
import img5 from '../../image/img/5.jpg';
import img6 from '../../image/img/6.jpg';
import img7 from '../../image/img/7.jpg';
import img8 from '../../image/img/8.jpg';
import img9 from '../../image/img/9.jpg';
import img10 from '../../image/img/10.jpg';
import img11 from '../../image/img/11.jpg';
import img12 from '../../image/img/12.jpg';
import img13 from '../../image/img/13.jpg';
import img14 from '../../image/img/14.jpg';
import img15 from '../../image/img/15.jpg';
import img16 from '../../image/img/16.jpg';
import img17 from '../../image/img/17.jpg';
import img18 from '../../image/img/18.jpg';
import img19 from '../../image/img/19.jpg';
import img20 from '../../image/img/20.jpg';
const VideosPictures = () => {
    return (
        <div>
            <div className="videoToHome">
                <div className="container">
                    <h1>Choose your favourite video and picture </h1>
                    <p>Tell me, Why your favourite video&Picture is best......!</p>
                    <h5 class="ancor"><a href="/home">Home</a> / <a href="/videosPictures">Video&Picture</a></h5>
                </div>
            </div>
            <div>
                <div class="container py-3">
                    <h2>Picture Of The Year <span class="text-danger">#2021</span> </h2>
                    <h5 class="text-secondary">This Year every picture click out teram member expart photographer <span class="text-danger">Kim Khan</span></h5>
                    <div class="row row-cols-4">
                        <div class="col-4">
                            <img src={img7} alt="" width="400px" />
                        </div>
                        <div class="col-4">
                            <img src={img2} alt="" width="400px" />
                        </div>
                        <div class="col-4">
                            <img src={img3} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img4} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img5} alt="" width="300px" />
                        </div>
                        <div class="col-3">
                            <img src={img6} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img1} alt="" width="300px" />
                        </div>
                        <div class="col-3">
                            <img src={img8} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img9} alt="" width="300px" />
                        </div>
                        <div class="col-3">
                            <img src={img10} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img11} alt="" width="300px" />
                        </div>
                        <div class="col-3">
                            <img src={img12} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img13} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img14} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img15} alt="" width="300px" />
                        </div>
                        <div class="col-3">
                            <img src={img16} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img17} alt="" width="400px" />
                        </div>
                        <div class="col-3">
                            <img src={img18} alt="" width="300px" />
                        </div>
                        <div class="col-3">
                            <img src={img19} alt="" width="300px" />
                        </div>
                        <div class="col-3">
                            <img src={img20} alt="" width="300px" />
                        </div>

                    </div>
                </div>
            </div>
            <div class="social-divsection">
                <div class="container py-3">
                    <h2 class="text-primary">Given Here Page Total React:-</h2>
                    <p>I always try to give you best video and give you happy with my video and picture. If you like our videos&Picturs please like,comment,follow& Share and give support....</p>
                    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                        <div class="col">
                            <div class="p-3 border bg-light social-logo">
                                <img src={socia2} alt="" class="social-img" />
                                <h4 class="text-primary">10k Likes</h4>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light social-logo">
                                <img src={social} alt="" class="social-img" />
                                <h4 class="text-primary">5K Comment</h4>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light social-logo">
                                <img src={socia3} alt="" class="social-img" />
                                <h4 class="text-primary">271 Follows</h4>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light social-logo">
                                <img src={socia4} alt="" class="social-img" />
                                <h4 class="text-primary">1k Share</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideosPictures;