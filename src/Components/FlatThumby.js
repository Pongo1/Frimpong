import React, { Component } from 'react';
import myFace from './../img/Cute.jpg';
class Flat extends Component {
    render() {
        return (
            <div>
                <div className='Kard-thumby port-card' style={styles.card}>
                    <div className=' card-body'>
                        <div className='row clearfix'>
                             
                                {/* <p className = 'pull-right'>I am Frimpong Opoku Agyemang, a young Ghanaian w<br/>ho is driven by a variety of passion. I am recognised for 
                                    my dense knowledge in technology and music.<br/> I am soon to be software engineer, and looking for opportunities to develope 
                                    myself more.
                                    </p>
                                <img src={myFace} className='pull-left depth-1 img-anim-select-port' />
                                <br /> */}
                            
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const styles = {
    card: {
        margin: 0,
        minHeight: 300, 
        
    }
}

export default Flat;
