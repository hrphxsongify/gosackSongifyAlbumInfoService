import React from 'react';
import { shallow } from 'enzyme';
import AlbumInfo from '../components/AlbumInfo.jsx';

describe('album info tests', () => {
  it('renders album info', () => {
    const albumInfo = {
      imageId: 0,
      name: 'testies',
      year: 1942
    };

    const wrapper = shallow(<AlbumInfo albumInfo={albumInfo} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.album-info')).toBeDefined();
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders album info', () => {
    const albumInfo = {
      imageId: 0,
      name: 'testies',
      year: 1942
    };
    const wrapper = shallow(<AlbumInfo albumInfo={albumInfo} />);

    // Check if an element in the Component exists
    expect(wrapper.contains(<div className="album__name">testies</div>)).toBeTruthy();
  });
});
