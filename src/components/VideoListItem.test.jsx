import React from 'react';
import { shallow } from 'enzyme';

import VideoListItem from './VideoListItem';

describe('VideoListItem', () => {
  const video = {
    snippet: {
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/EIyixC9NsLI/default.jpg',
        },
      },
      title: 'Badgers : animated music video : MrWeebl',
      channelTitle: 'Weebl\'s Stuff',
    },
  };
  const onVideoSelect = jest.fn();
  const videoListItem = shallow(<VideoListItem video={video} onVideoSelect={onVideoSelect} />);
  const image = videoListItem.find('img');

  test('image renders src', () => {
    expect(image.props().src).toBe(video.snippet.thumbnails.default.url);
  });

  test('image renders alt', () => {
    expect(image.props().alt).toBe(video.snippet.title);
  });

  test('renders title', () => {
    expect(videoListItem.find('.title').text()).toBe(video.snippet.title);
  });

  test('renders channel', () => {
    expect(videoListItem.find('.channel').text()).toBe(video.snippet.channelTitle);
  });

  test('onVideoSelect function is passed video on click', () => {
    videoListItem.simulate('click');
    expect(onVideoSelect).toHaveBeenCalledWith(video);
  });
});
