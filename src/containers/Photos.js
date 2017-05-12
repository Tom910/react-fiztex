import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PHOTO_SELECT, PHOTO_FETCH } from '../constants/photos';
import loadPhoto from '../actions/loadPhoto';

class Photo extends Component {
    handleClick = () => {
        this.props.handleSelect(this.props.id);
    };

    render() {
        const { url } = this.props;

        return (
            <div>
                <img src={url} onClick={this.handleClick} />
            </div>
        )
    }
}

class Photos extends Component {
    constructor() {
        super();

        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        this.props.loadPhoto();
    }

    render() {
        const { photos, selectPhoto } = this.props;

        return (
            <div className="masonry">
                {photos.length ?
                    photos.map(item =>
                        <Photo key={item.id} id={item.id} handleSelect={selectPhoto} url={item.urls.regular} />
                    ) : 'Загрузка фотографий'
                }
            </div>
        );
    }
}
const mapState = (state) => ({ photos: state.photos });
const mapDispatch = (dispatch) => ({
    loadPhoto: () => dispatch({ type: PHOTO_FETCH }),
    selectPhoto: (id) => dispatch({ type: PHOTO_SELECT, selectId: id })
});

export default connect(mapState, mapDispatch)(Photos);
