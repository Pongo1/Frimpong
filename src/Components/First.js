
import myFace from './../img/Cute.jpg';

import React, { Component } from 'react';

class Begin extends Component {

        constructor(props){
            super(props); 
            this.$ = window.$;
        }
        

    animatePicEntry(){
        this.$('.img-anim-select').animate({opacity:1},800);
        setTimeout(() => {
            this.$('.img-anim-select').css({
                'left': '20px',
                'transition': '.5s ease-in all'
            });
            this.$('.correct-center-margin').animate({opacity:1},1000); 

            setTimeout(() => {
                this.$('.correct-center-margin').css({ 
                    'transform': 'rotateX(0deg)', 
                    'transition': '.5s ease-in all'
                });
            }, 9000);
        }, 1000);
                
       
    }
   
    showPageWithFade(leavingPageClass, comingPageClass) {
        this.$('.' + leavingPageClass).css({
            'opacity': 0,
            'transition': '0.3s ease-out all'
            // 'display':'none'
        });
        setTimeout(() => {
            this.$('.' + leavingPageClass).css({
                'display': 'none'
            });
        }, 400);

        //COMING PAGE

        setTimeout(() => {
            this.$('.' + comingPageClass).css({
                'display': 'block',
                'opacity': 0
            });

            setTimeout(() => {
                this.$('.' + comingPageClass).css({
                    'opacity': 1,
                    'transition': '0.3s ease-in all'

                })
            }, 200);
        }, 400);

    }

    componentDidMount = () => {
      this.animatePicEntry();
    };

    render() {
        return (
            <div>
                <div className="container begin-container" >
                    <div className='row'>
                        <div className='col-md-8 col-lg-8 offset-md-2 col-sm-8 col-xs-12 col-md-12'>
                            <img src={myFace} className='profile-pic depth-1 img-anim-select' /> <br />
                            <div className='correct-center-margin clearfix'>
                                <p className='fonty'>
                                    Hi, my name is Frimpong Opoku Agyemang. <br />
                                    Thou art welcome!<br />
                                    <small className='text text-danger'>"help me grow, or get away! ~Frimpong"</small>
                                </p>
                                <button className='btn btn-deep-orange round-me pull-right'
                                    onClick = {()=>{
                                        this.showPageWithFade('begin-div','portfolio-div')
                                    }}>
                                    <i className='fa fa-forward'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Begin;