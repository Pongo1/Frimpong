
import React, { Component } from 'react';
import Card from './Card';

class Thumbnail extends Component {
    constructor(props){
        super(props);
        this.$ = window.$;
    }


    start(){
        return this.props.content.map((item, index )=>{
            return <Card Item = { item } theKey = { index } key = {index } />
        });    
    }
   
    render() {
        const styles = {
            card: {
                margin: 15,
                minHeight: 300, 
                background: this.props.color
            },
            Kard: {
                color: this.props.color
            }
        }
        return (
            <div>
                <div className='Kard port-card' style ={styles.card}>
                    <div className=' card-body'>
                        <div className = 'row'>
                            { this.start() }
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
    
}

Thumbnail.defaultProps = {
    color: '#e9e4e4'
}
export default Thumbnail;
