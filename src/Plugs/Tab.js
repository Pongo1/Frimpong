import React, { Component } from 'react';
import myFace from './../img/Cute.jpg';
class Tab extends Component {
    constructor(props){
        super(props);

        this.$ = window.$;
    }


    tabClick(myKey){
        let keys = ['edu-key','profile-key','skills-key','pro-key','contact-key']; 
        let restOfKeys = keys.filter(item =>{
            return myKey !== item;
        });

        this.$('.'+myKey).addClass('btn btn-info');

        restOfKeys.forEach(item =>{
            this.$('.'+item).removeClass('btn btn-info');
        });
    }
    render() {
        return (
            <div style = {styles.firstDiv } className=''>
                <ul class="nav  nav-tabs" role='tablist'>
                    <li class="nav-item">
                        <a class="nav-link btn btn-info  profile-key" data-toggle="tab" href="#profile" role="tab"
                         onClick={()=>{
                            this.tabClick('profile-key');
                        }}>Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class=" nav-link skills-key" data-toggle="tab" href="#skills" 
                            onClick={() => {
                                this.tabClick('skills-key');
                            }}
                        role="tab">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link edu-key" data-toggle="tab" 
                            onClick={() => {
                                this.tabClick('edu-key');
                            }}
                        href="#education" role="tab">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link pro-key" data-toggle="tab" 
                            onClick={() => {
                                this.tabClick('pro-key');
                            }}
                        href="#projects" role="tab">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link contact-key" data-toggle="tab" 
                            onClick={() => {
                                this.tabClick('contact-key');
                            }}
                        href="#contact" role="tab">Contact</a>
                    </li>
                </ul>

               
                <div class="tab-content">
                    <div class="tab-pane fade in show active" id="profile" role="tabpanel">
                                
                        <div className='card card-finish' style ={ styles.card } >
                            <div className = 'card-body'>
                                <div className='row'>
                                    <div className ='col-md-4'>
                                        <img src={ myFace } className = 'profile-pic depth-1'/>
                                    </div>
                                    <div className = 'col-md-8'> 
                                        <h3>Frimpong Opoku Agyemang</h3>
                                        <h6 className = 'text text-default'>I spill quality</h6>
                                        <p className ='fonty'>Akwaaba! Nice to meet you too.<br/>
                                            I am a young Ghanaian who is driven by my numerous passions and blessed with lots of talent. 
                                            I am well recognised for my superb architecture in code, and brilliant touch to the piano.
                                            Feel free to explore my other tabs to learn more about me, and contact me if need be. 
                                            I will be waiting.<br/>
                                           <span className ='text text-danger'> "help me grow, or get away! ~Frimpong"</span>
                                        </p>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className ='card-footer'>
                                <small>
                                    <a href='mailto:mrfimpong@gmail.com'> mrfimpong@gmail.com </a>
                                </small>
                            </div>
                        </div>
                    </div>
                                        
                    <div class="tab-pane fade" id="skills" role="tabpanel">
                            
                        <div className= 'card card-finish'> 
                            <div className = 'card-body' style ={styles.card }>
                                <div className = 'row'>
                                    <div className='col-md-8'> 
                                        <h3>Experience</h3>
                                        <small className ='pull-right labe label-info'></small>
                                        <h5 className = 'text text-info'>CTO of Commcyle</h5>
                                            <h6 className = 'fonty'>
                                                Served for two years as the chief technology officer of commcycle. 
                                                Built their entire platform for their stock management, and sales.
                                            </h6>
                                        
                                        <h5 className='text text-info'>Intern of EDTECH</h5>
                                        <h6 className='fonty'>
                                            Interned as the assistant tech-officer in a student run organisation in the African Leadership Academy. 
                                            I built -merge write: an online platform to help poor writers learn from very good writers with their examples. 

                                            </h6>
                                        

                                        <h5 className='text text-info'>Founder of CODING CLUB</h5>
                                        <h6 className='text fonty'>
                                            As it's name suggests, an organisation that is built to educate individuals in a variety of languages. 

                                            </h6>
                                        
                                    </div>
                                    <div className='col-md-4 side-pane'>
                                        <h5>Languages</h5>
                                        <div class="progress">
                                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar"
                                                style={styles.php} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">PHP (Laravel)</div>
                                        </div>
                                        <div class="progress">
                                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar"
                                                style={styles.react} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Javascript (React)</div>
                                        </div>
                                        <div class="progress">
                                            <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar"
                                                style={styles.python} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Python</div>
                                        </div>
                                        <div class="progress">
                                            <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar"
                                                style={styles.cSharp} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">C# </div>
                                        </div>
                                        <div class="progress">
                                            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar"
                                                style={styles.visualB} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Visual Basic</div>
                                        </div>
                                        <div class="progress">
                                            <div className="progress-bar bg-default progress-bar-striped progress-bar-animated" role="progressbar" 
                                            style={ styles.java} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">Java</div>
                                        </div>
                                        <hr />
                                        <div class="progress">
                                            <div className="progress-bar bg-elegant progress-bar-striped progress-bar-animated" role="progressbar"
                                                style={styles.python} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">Git</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                                {/* <div className = 'card-footer'> 
                                </div> */}
                        </div>

                    </div>
                                        
                    <div class="tab-pane fade" id="projects" role="tabpanel">
                            
                        <div className = 'row'>
                            <div className = 'col-md-6' > 
                                <div className='card card-finish'>
                                    <div className='card-body' style={styles.cardP}>
                                        <div className='row'>
                                            
                                            <p className = 'commcycle'>
                                                <i className = 'fa fa-shopping-cart'></i><br/> 
                                            </p>
                                            <p className = 'place-font text text-muted'>Commcycle</p>
                                            <a href='commcycle.co'
                                                target="_blank" class="btn  btn-sm btn-elegant place-font" >Go</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' >
                                <div className='card card-finish'>
                                    <div className='card-body' style={styles.cardP}>
                                        <div className='row'>
                                            <p className='commcycle'>
                                                <i className='fa fa-pencil'></i><br />
                                                
                                            </p>
                                            <p className='place-font text text-muted'>Merge Write</p>
                                            <div class="input-group form-group mb-3">
                                                <center>
                                                    <a href='https://github.com/Pongo1/Merge-write-june' 
                                                target="_blank" class="btn  btn-sm btn-elegant place-font" >Go</a>

                                                </center>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                                
                    <div class="tab-pane fade" id="contact" role="tabpanel">
                            
                        <div className= 'card card-finish' style={styles.card}>
                                <div className = 'card-body'>
                                    <div className='row '> 
                                        <div className='col-md-4'>
                                            <center> 
                                            <p style={styles.contactFontAwe}><i className='fa fa-phone text text-muted'></i></p>
                                            <h4 className='fonty' style={styles.contactFont} >Telephone</h4>
                                            <small style={styles.contactFont} className='fonty'>+233243983364 / +233270946328 / +233506656035</small>
                                            </center> 
                                        </div>
                                        <div className ='col-md-4'> 
                                            <center>
                                                <p style={styles.contactFontAwe}><i className='fa fa-globe text text-muted'></i></p>
                                                <h4 className='fonty' style={styles.contactFont}>Address</h4>
                                                <small style={styles.contactFont} className ='fonty'>Ablekuma Fanmilk - Ghana, United Baylor street. House number 49. (A.G.B.A)</small>
                                            </center> 
                                        </div>
                                        <div className='col-md-4'> 
                                        <center>
                                                <p style={styles.contactFontAwe}><i className='fa fa-user text text-muted' ></i></p>
                                            <h4 className='fonty' style={styles.contactFont}> Social/Dev Media</h4>
                                            <div style ={ styles.contactFont } > 
                                                <a href='https://web.facebook.com/frimpong.opokuagyemang' className ='btn btn-primary btn-sm' target="_blank"><i className = 'fa fa-facebook'></i></a>
                                                <a href='https://www.instagram.com/_oasports_/' className='btn btn-blue-grey btn-sm' target="_blank"><i className='fa fa-instagram'></i></a>
                                                <a href='https://github.com/Pongo1' className='btn btn-elegant btn-sm' target="_blank"><i className='fa fa-github'></i></a>
                                            </div>
                                        </center> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class = 'tab-pane fade' id ='education' rol='tabpanel'> 
                        <div className =  'card card-finish'>
                            <div className='card-body' style={styles.card}>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <h3>Education <span className = 'fa fa-graduation-cap'></span></h3>
                                        <small className='pull-right labe label-info'></small>
                                        <h5 className='text text-info'>Deoke Foundation School (JHS)</h5>
                                        <h6 className='fonty'>
                                            This is where I completed my Junior High education.
                                                </h6>
                                        <small className='text text-warning'>2013</small>
                                        <hr />
                                        <h5 className='text text-info'>Saint Thomas Aquinas (SHS)</h5>
                                        <h6 className='fonty'>
                                           Where I completed Senior High Education
                                                </h6>
                                        <small className='text text-warning'>2013 - 2016</small>

                                        <hr />
                                        <h5 className='text text-info'>African Leadership Academy.</h5>
                                        <h6 className='text fonty'>
                                            Completed a two year leadership / A-level course in Johanesburg, South Africa. 
                                                </h6>
                                                <small className ='text text-warning'>2016 - 2018</small>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                                    

                </div>
            </div>
        );
    }
}

const styles ={
    contactFont:{
        margin:'auto'
    },
    contactFontAwe: {
        margin: 'auto', 
        fontSize:'7rem'
    },
    php:{
        width:'95%'
    },
    react: {
        width: '90%'
    },
    python: {
        width: '80%'
    },
    cSharp: {
        width: '60%'
    },
    visualB: {
        width: '50%'
    },
    java: {
        width: '30%'
    },
    firstDiv:{
        marginTop:100
    },
    cardP:{
        minHeight: 300
    },
    card:{
        minHeight:400
    }
}
export default Tab;
