import React, { Component } from 'react';
import { connect } from 'react-redux';
import photoSelect from '../selectors/selector';

class Details extends Component {
    render() {
        const { photo } = this.props;

        return (
            photo ? <div>
                <h3>О фотографии:</h3>
                <ul>
                    <li>Просмотрено: {photo.views}</li>
                    <li>Понраивлось: {photo.likes}</li>
                    <li>Скаченно: {photo.downloads}</li>
                </ul>
                <h3>Снято:</h3>
                <ul>
                    <li>Модель камеры: {photo.exif.model}</li>
                    <li>ISO: {photo.exif.iso}</li>
                    <li>Экспозиция: {photo.exif.aperture}</li>
                </ul>
            </div> : null
        )
    }
}

const mapState = (state) => ({photo: photoSelect(state)});

export default connect(mapState)(Details);
