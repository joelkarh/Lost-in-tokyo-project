    /****** NAVIGATION + INTRO  *******/
    const Navitem = ({className , href, children, logo}) => (
    <li className={`mh2-ns f6 f4-1 tc ${className}`}>
    <a className="white no-underline" href={href}> {logo ? <img src ='../images/logo.svg' className ="db center logo" /> : children }</a></li>
    );

    const Nav = () => (
        <nav className='pt3 pt4-ns mb4 mb0-ns'>
        <ul className="list flex flex-wrap flex-nowrap-ns 
        justify-between items-center pa0 ma0"> 
        {menu.map ((item, index) => (
        <Navitem key = {index}{...item}/>)
        )
    }
                
        </ul>
        </nav>
    );
    const Highlight = ({ color, children})=> (
        <span className={`relative highlight highlight-${color}`}>
            <span className="relative z-2">{children}</span>
        </span>
        );

    const Intro = () =>(
        <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
            <div className="mb3 mb4-ns ">
                <Highlight color='aqua'>Lost in Tokyo </Highlight> is a directory of fun places to see, play in and <Highlight color='yellow'>explore</Highlight>,
                in <Highlight color ="blue">Tokyo</Highlight>, Japan.{' '}
            </div>
            <div>
            From <Highlight>museums</Highlight> and <Highlight color="blue">galleries</Highlight>, to <Highlight color="pink">robot restaurants</Highlight>, and <Highlight>kitten cafes </Highlight> Tokyo is the gift that keeps on giving.
        <Highlight color="yellow">Dattebayo!</Highlight> {' '}
        </div>
        </div>
    );

    /*********  ATTRACTIONS *****/
    class Attraction extends React.Component {
        // constructor sets up our component
        constructor(props){
            // used to get our state working
            super(props);
            // here we set our default state
            this.state={
                showInfo : false,

            };
            // here we tell our toggleInfo about 'this' by using bind()
            // otherwhise things like setState will not work 
            this.toggleInfo = this.toggleInfo.bind(this);
            this.closeInfo = this.closeInfo.bind(this);
        }
        //our own method 
        toggleInfo(){
            this.setState((prevState,props)=> {
                //console.log(prevState.showInfo);
                return {showInfo : !prevState.showInfo}});
            //console.log('this got toggled!');
        }
        closeInfo(){
            //here we use setState the usual way because we dont need 
            //access to the previous state, we're just force setting the 
            //showInfo to be false 
            this.setState({showInfo:false})
        }
        render(){
            const { image, className, link} = this.props;
            const {showInfo} = this.state;
            return (
            <div 
            className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer
            attraction ${className}`}
            onMouseEnter={this.toggleInfo}
            // this runs when our mouse leaves attractionn element
            onMouseLeave = {this.closeInfo}> 
                    <div className ="relative">
                            {/* //we do a test to see wheter our showinfo is true */}
                            {/* here we remmeber to pass down all of our props and state*/}

                    <Overlay {...this.props}{...this.state}/>
                    <img className="db" src={`../images/${image}`}/> 
                </div>
            </div>    
            
            );
        }
    }
    const Overlay = ({showInfo,title,description, link}) =>(
    <div className ="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay " style={{transform: showInfo ? 'none' : 'translatey(-100%)'}}>
    <div>
        <a href={link} className=' underline-hover link dim blue f4 f3-ns mt0 mb2 lh-title'>{title} {/*<h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>*/}</a>
        <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
    </div>
</div>);
                    // APP COMPENENT
    const App = () => (
        <div>
        <div className="min-vh-100 ph4 flex flex-column">
            <Nav/>  
            <Intro/> 
        </div>
        <div className="flex flex-wrap container">
        {attractions.map((attraction, index) =>( // altijd index bij
            <Attraction key={index} {...attraction} />
        ))} 
            
            {/* our attractions list component */}
            </div>
        </div>
    )

    ReactDOM.render(<App/>,
    document.getElementById('root'));

