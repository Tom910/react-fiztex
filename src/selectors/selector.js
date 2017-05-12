import { createSelector } from 'reselect';

const selector = createSelector(
    state => state.photos,
    state => state.selected,
    (photos, selected) => photos.find(item => item.id === selected)
);

export default selector;