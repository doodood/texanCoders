import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import './Card.scss'

class Card extends Component {
    render () {
        return (
            <Aux>
                {/* <div className="card">
                    
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a>
                </div> */}
                <div className="scrolling-wrapper-flexbox">
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                    <div className="card">
                    <img className="card__image" src="http://via.placeholder.com/640x360"/>
                    <figcaption className="card__caption">
                        Short desc of the image
                    </figcaption>
                    <a href="/">Plus d'info &rarr;</a></div>
                </div>
            </Aux>
        );
    }
}

export default Card;