import React from 'react';
import { shallow } from 'enzyme';
import AlbumInfo from '../components/AlbumInfo.jsx';

const currentAlbumData = {
  name: '',
  year: 0,
  tracks: []
};

describe('AlbumInfo', () => {
  it('should do some shit', () => {
    const component = shallow(<AlbumInfo albumInfo={currentAlbumData} />);
    expect(component).toMatchSnapshot();
  });
});

// describe('album info tests', () => {
//   it('renders album info', () => {
//     const albumInfo = {
//       imageId: 0,
//       name: 'testies',
//       year: 1942
//     };

//     const wrapper = shallow(<AlbumInfo albumInfo={albumInfo} />);

//     // Expect the wrapper object to be defined
//     expect(wrapper.find('.album-info')).toBeDefined();
//     // expect(wrapper.find('.item')).toHaveLength(items.length);
// //   });
// });
