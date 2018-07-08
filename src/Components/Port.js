import React, { Component } from 'react';
import Begin from './First'; 
import Thumbnail from './Thumbnail';
import Flat from './FlatThumby';
class Port extends Component {
    constructor(props){
        super(props); 
        this.showPage = new Begin();
        this.talents = [
            {
                title:'Drummer',
                body:'I a very talented drummer. I have been playing for almost five years!'

            }, 
            {
                title:'Pianist', 
                body:'I am a very good piano player. I have been in the game for almost three years'
            }
    ]; 
    this.programmingSkills =[
        { 
            title:'LARAVEL(PHP)', 
            body:"I have built on the php laravel framework. I am well versed in the content of this framework, and  well aware of it's power and uses. I have had two years of experience with this language", 
            link:"http:/commcycle.co"
        },
        {
            title:'Python', 
            body: "This is my favorite language. I have used python for a wide variety of purposes such as scraping the web for different data, and creating windows apple applications with User Interface. I have had over three years of experience with this language.", 
            link:''
        },
        {
            title:'React(Js)', 
            "body":'I have mastered the contents of this javascript framework. This portfolio page was made with react.', 
            link:''
        }, 
        {
            title:'C-Sharp C#)', 
            body:' I have had more than three years of experience with this windows application developement language. ',
            link:''
        }, 
        {
            title:'Visual Basic', 
            body:"The first programming language I ever learnt. I tinkered with visual studio, and was very successful in absorbing it's content, before I moved to C#. ", 
            link:''
        }
        
    ]; 

    this.schoolsAttended = [
        {
            title:"Deoke Foundation School", 
            body:'Where I completed Junior High School', 
            link:''
        }, 
        {
            title:'Saint Thomas Aquinas Senior High School', 
            body:'Where I completed Senior High School', 
            link:''
        }, 
        {
            title:'African Leadership Academy',
            body:'I completed a two year A-Level course in South AFrican, Johanesburg'
        }
    ]; 

    this.experience = [
        {
            title:'Founder of -Coding Club',
            body:" An organisation that is geared towards enlightening the youth who are interested in taking up tech-related courses in the university",
            link:''
        }, 
        {
            title:" CTO of Commcycle", 
            body:" An organisation that recycles and polishes old items for sale and for donation. I created their entire online system.", 
            link:''
        }, 
        {
            title:'Intern of EDTECH( ALA Student Org.)', 
            body:' I served as an assistant technology officer. I built ~merge-write: an online platform that is set to enable poor writers to learn from examples of very good writers.'
        }
    ];
        
    }

    
    render() {
        return (
            <div>
                <div className = 'container'> 
                    <div className = 'row'>
                        <div className='col-md-10 col-lg-10 offset-md-1 col-sm-10 col-xs-12 col-md-12' >
                                {/* <div className ='begin-div'> 
                                    <Begin />
                                </div> */}
                           <div className ='portfolio-div' style = {styles.portfolio}>
                                <Thumbnail  content = { this.talents } />
                                <Thumbnail content={this.programmingSkills}  />
                                <Thumbnail content={this.experience} />
                                <Thumbnail content={this.schoolsAttended}/>

                                <button className='btn btn-elegant pull-right'
                                    onClick={() => {
                                        this.showPage.showPageWithFade('portfolio-div','begin-div')
                                    }}>
                                    <i className='fa fa-bars'></i>
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}
const styles = {
    cols:{
        marginTop:-100
    }, 
    portfolio: {
        opacity:1
    }
}
export default Port;
//FIND ME 
//NN333ma FO) PDF