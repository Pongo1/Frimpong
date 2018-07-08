import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            
                <div className='col-md-6' key={ this.props.theKey} style ={ styles.mainCard }>
                    <div className='card'> 
                        <div className='card-body pane clearfix' style = { styles.card }>
                            <div className ='the-title'>
                                <h3>{this.props.Item.title}</h3>
                            </div>
                            <div className = 'the-body'> 
                                <p>{this.props.Item.body}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
        );
    }
}

const styles = {
    card: {
        minHeight:250, 
        maxHeight: 250,
        overflowY: 'scroll'
    }, 
    mainCard :{
        marginTop:10, 
        marginBottom:10
    }
}
export default Card;
