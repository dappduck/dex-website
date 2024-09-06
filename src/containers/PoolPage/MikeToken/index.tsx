import React from 'react';
import Marquee from 'react-fast-marquee';
import { Typography } from '@src/components/Typography';
import { Box, Flex, Image } from '@chakra-ui/react';
import textTokenItem from './textTokenItem';

const textTokenSlide: React.FC = () => {
  const listPartner = [
    {
      title: 'textTOKEN',
    },
    {
      title: 'textTOKEN',
    },
    {
      title: 'textTOKEN',
    },
    {
      title: 'textTOKEN',
    },
  ];
  return (
    <Flex flexDirection={'column'} mt='80px'>
      <Flex transform='rotate(2.3deg)' zIndex={999}>
        <textTokenItem
          direction='left'
          colorPrimary={'#1ED760'}
          bgPrimary={'#212924'}
        />
      </Flex>
      <textTokenItem
        direction='right'
        colorPrimary={'#414E5A'}
        bgPrimary={'#161717'}
      />
    </Flex>
  );
};

export default textTokenSlide;
