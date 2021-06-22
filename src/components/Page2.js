import React, { createRef } from 'react';
import {Link} from 'react-router-dom';


class TechPage2 extends React.Component {
    leftScroll = 0
    sliderRef = createRef();
    sliderContentRef = createRef();
    technologySlideRef = createRef();
    prodSlideRef = createRef();
    postProdSlideRef = createRef();
    selectedColorRef = createRef();
    state = {isOverflowing:null}

    slideLeft = () => {

        //check that leftScroll value must not be greater 
        //than scrollWidth of the slider container
        if(this.leftScroll > this.sliderRef.current.scrollWidth){
            this.leftScroll = this.sliderRef.current.scrollWidth - this.sliderRef.current.offsetWidth;
        }

        this.leftScroll -= this.sliderRef.current.offsetWidth
        this.sliderRef.current.scrollLeft = this.leftScroll;
    }

    slideRight = () => {

        //check that leftScroll value must not be less 
        //than scrollWidth if the slider container
        if(this.leftScroll < 0){
            this.leftScroll = 0;
        }

        this.leftScroll += this.sliderRef.current.offsetWidth
        this.sliderRef.current.scrollLeft = this.leftScroll;
    }

    //this function is only for mobile view
    slideUpDown = (elemRef) => {
            const elem = elemRef.current
            elem.style.transition = "all 2s ease-in-out";

            if(elem.style.display === "none"){
                elem.style.display = "block";
                return
            }
            
            elem.style.display = "none";
          
    }

    selectColor = (e) => {
        const color = this.selectedColorRef.current
        const colorName = e.target.value
        color.style.backgroundColor = colorName
    }

    componentDidMount() {
        this.setState({isOverflowing:this.sliderRef.current.clientWidth < this.sliderRef.current.scrollWidth})
    }

    render() {
        return(
            <div className="page2__container">
                {/* Uploading section */}
                <div className="upload__option">
                    <Link to="/upload" className="upload__phone-btn">
                        Upload
                    </Link>
                </div>
                <div className="upload__files">
                        <div className="upload__container">
                            <div className="upload__content">
                                <span>
                                    file_name.pdf
                                </span>
                                <span className="close__upload">
                                    <ion-icon name="close"></ion-icon>
                                </span>
                            </div>                        
                        </div>
                        <div className="upload__container">
                            <div className="upload__content">
                                <span>
                                    file_name.pdf
                                </span>
                                <span className="close__upload">
                                    <ion-icon name="close"></ion-icon>
                                </span>
                            </div>  
                        </div>

                        <Link to="/upload" className="upload__btn">
                            <ion-icon name="add"></ion-icon>
                        </Link>
                </div>

                <div className="file__container">
                    <div>
                        <span className="file__title">
                            File name
                        </span>
                        <span className="file__name">
                            lamp__stripe__27.5stl
                        </span>
                    </div>
                    <div className="file__options">
                        <div className="file__options__container">
                            <div className="file__options__content">
                                Duplicate
                            </div>
                            <div>
                                <div className="square">&nbsp;</div>
                            </div>
                        </div>
                        <div className="file__options__container">
                            <div className="file__options__content">
                                Delete
                            </div>
                            <div>
                                <div className="square">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Technology section */}
                <div className="tech__container">
                    {/* LEFT SIDE */}
                    <div className="tech__container--left">
                        <div className="tech__container--left-inner">
                            <div className="left-inner__lamp">
                                <img src="../../../img/lampImg.png" alt="lamp" />
                            </div>
                            <div className="left-inner__lamp--scale">
                                <p>Scale:</p>
                                <p>250 x 300 x 200</p>
                            </div>
                            <div className="left-inner__lamp--vol">
                                <p>Volume:</p>
                                <p>242,958.13 mm&sup3;</p>
                            </div>
                            <div className="left-inner__lamp--vol">
                                <p>Volume:</p>
                                <p>242,958.13 mm&sup3;</p>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE */}
                    <div  className="tech__container--middle">
                            <div className="section__heading__container">
                                <h2 className="heading--2">
                                    Technology
                                </h2>
                                <div onClick={() => this.slideUpDown(this.technologySlideRef)} className="downArrow">
                                    <ion-icon name="caret-down"></ion-icon>
                                </div>
                            </div>

                        <div ref={this.technologySlideRef} className="tech__slider">
                            {
                                this.state.isOverflowing ? 
                                    <div className="scroll__btn" onClick={this.slideLeft}>
                                        <ion-icon name="caret-back"></ion-icon>
                                    </div>
                                :
                                    ""
                            }
                            
                            <div ref={this.sliderRef} className="tech__slider--container">
                                <div ref={this.sliderContentRef} className="tech__slider--content">
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">FDA</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">SLA</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">SLS</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">SLM</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">5</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">6</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">7</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">8</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">9</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                    <div className="tech__slider--card-outer">
                                        <div className="tech__slider--card-inner">
                                            <div className="tech__slider--card-inner__grey-circle">&nbsp;</div>
                                            <h4 className="card__heading">10</h4>
                                            <p className="card__description">Technology use specidied in a brief</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.isOverflowing ? 
                                    <div className="scroll__btn" onClick={this.slideRight}>
                                        <ion-icon name="caret-forward"></ion-icon>
                                    </div>
                                :
                                    ""
                            }
                        </div>

                        <div  className="prod__container">
                            <div  className="section__heading__container">
                                <h2 className="heading--2 prod__container--heading">
                                    Production details
                                </h2>
                                <div onClick={() => this.slideUpDown(this.prodSlideRef)} className="downArrow">
                                    <ion-icon name="caret-down"></ion-icon>
                                </div>
                            </div>
                            
                            <div ref={this.prodSlideRef} className="prod__container--inputs">
                                <div className="input__material">
                                    <label htmlFor="material" className="label">
                                        <span className="label__question">
                                                Material
                                            <span className="question-mark material__question-mark">
                                                &#63;
                                            </span>
                                            <span className="view-sheet">
                                                view specs sheet
                                            </span>
                                        </span>
                                    </label>
                                    <input type="text" name="material" className="input"></input>
                                </div>
                                <div className="input__layer-thickness">
                                    <label htmlFor="layerThickness" className="label">
                                        <span className="label__question">
                                            Layer thicknes
                                            <span className="question-mark">
                                                &#63;
                                            </span>
                                        </span>
                                    </label>
                                    
                                    <select name="layerThickness" className="input select__background">
                                        <option value="low">Low Quality</option>
                                        <option value="medium">Medium Quality</option>
                                        <option value="high">High Quality</option>
                                    </select>
                                </div>
                                <div className="input__infill">
                                    <label htmlFor="infill" className="label">
                                        <span className="label__question">
                                            Infill
                                            <span className="question-mark">
                                                &#63;
                                            </span>
                                        </span>
                                    </label>
                                    <select name="infill" className="input select__background">
                                        <option value="pla">PLA</option>
                                        <option value="medim">Medium Quality</option>
                                        <option value="high">High Quality</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div  className="post-prod__container">
                            <div className="section__heading__container">
                                <h2 className="heading--2">
                                    Post production process
                                </h2>
                                <div onClick={() => this.slideUpDown(this.postProdSlideRef)} className="downArrow">
                                    <ion-icon name="caret-down"></ion-icon>
                                </div>
                            </div>
                            <div ref={this.postProdSlideRef} className="post-prod__container--inputs">
                                <div className="input__color">
                                    <label htmlFor="color" className="label">Color</label>
                                    <div className="color__container">
                                        <div ref={this.selectedColorRef} className="color__selected">
                                            &nbsp;
                                        </div>
                                        <select name="color" onChange={(e) => this.selectColor(e)} className="input select__background color__select">
                                            <option value="red">Red</option>
                                            <option value="yellow">Yellow</option>
                                            <option value="green">Green</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div className="input__finish">
                                    <label htmlFor="finish" className="label">Finish</label>
                                    <select name="finish" className="input select__background">
                                        <option value="glossy">Glossy</option>
                                        <option value="medium">Medium Quality</option>
                                        <option value="high">High Quality</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="tech__container--right">
                        <h2 className="heading--2">Pricing</h2>
                        <div>
                            <div>   
                                <label htmlFor="priority" className="label">Priority</label>
                            </div>
                            <select name="priority" className="priority__select-box select__background">
                                <option value="5day">
                                        5 day 
                                    standard
                                    </option>
                                <option value="medium">Medium Quality</option>
                                <option value="high">High Quality</option>
                            </select>
                        </div>

                        <div className="quality__container">
                            <div className="label">Quality</div>
                            <div className="quality__content">
                                <span className="quality__dec-inc">
                                    <ion-icon name="remove"></ion-icon>
                                </span>
                                <span className="quality__num">
                                    1
                                </span>
                                <span className="quality__dec-inc">
                                    <ion-icon name="add"></ion-icon>
                                </span>
                            </div>
                        </div>

                        <div className="price">
                            &#8377; 5,24,920
                        </div>

                        <div className="cost-break-down">
                            Cost break down
                        </div>

                        <div className="instructions">
                            Instructions
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TechPage2