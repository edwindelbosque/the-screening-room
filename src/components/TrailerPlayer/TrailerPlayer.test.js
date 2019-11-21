import React from 'react';
import { shallow } from 'enzyme';
import { TrailerPlayer } from './TrailerPlayer';

describe('TrailerPlayer', () => {
  let wrapper;
  let youtubeId = 'string';

  beforeEach(() => {
    wrapper = shallow(<TrailerPlayer youtubeId={youtubeId} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
