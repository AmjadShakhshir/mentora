import React from 'react';
import { Box, Typography } from '@mui/material'
import CaseCard from './CaseCard';
import CaseCardBig from './CaseCardBig';
import { images } from '../../constants';
import CallMadeIcon from '@mui/icons-material/CallMade';

const CaseStudies = () => {
  return (
    <Box component={'section'} padding='60px'>
        {/* Title and Span Area */}
        <Typography variant='h6' sx={{
            fontFamily: 'Recoleta',
            color: '#F5A34C',
            fontWeight: 700,
        }}>Case Studies</Typography>
        <Typography variant='h4' sx={{
            fontFamily: 'Gotham',
            fontWeight: 700,
        }}>How We Scale It.</Typography>

        {/* Grid Area */}
        <Box sx={{
            display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px 0',
        }}>
            {/* Grid 1 */}
            <Box 
            sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gap: 1,
                border: '3px solid #F5A34C',
                borderRadius: '22px'
              }}>
              <Box sx={{ gridRow: 'span 1', gridColumn: '1', height: '100px' }}>
                    <CaseCard title={'$605,000'} spanText={'Total Amount Raised'} />
              </Box>
              <Box sx={{ gridRow: 'span 1', gridColumn: '1', height: '100px' }}>
                    <CaseCard title={'185'} spanText={'Number Of Investors'} />
              </Box>
              <Box sx={{ gridRow: 'span 1', gridColumn: '1', height: '100px' }}>
                    <CaseCard title={'10,000'} spanText={'Members - Community Built'} />
              </Box>
              <Box sx={{ gridRow: 'span 3', gridColumn: 'span 2', height: '320px'}}>
                  <CaseCardBig imgUrl={images.predictiva} altText={'predictiva logo'}
                  title={'Crowdfunding Campaign'} spanText={'A Case Study'} link={'View More'} symbol={<CallMadeIcon />}/>
              </Box>
            </Box>

            {/* Grid 2 */}
            <Box 
            sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gap: 1,
                border: '3px solid #F5A34C',
                borderRadius: '22px'
              }}>
              <Box sx={{ gridRow: 'span 1', gridColumn: '1', height: '100px' }}>
                    <CaseCard title={'$60,000'} spanText={'Revenue In 3 Days'} />
              </Box>
              <Box sx={{ gridRow: 'span 1', gridColumn: '1', height: '100px' }}>
                    <CaseCard title={'20'} spanText={'Investors'} />
              </Box>
              <Box sx={{ gridRow: 'span 1', gridColumn: '1', height: '100px' }}>
                    <CaseCard title={'1000'} spanText={'Members - Community Built'} />
              </Box>
              <Box sx={{ gridRow: 'span 3', gridColumn: 'span 2', height: '320px'}}>
                  <CaseCardBig imgUrl={images.funktel} altText={'predictiva logo'}
                  title={'Mentorship Funnel'} spanText={'A Case Study'} link={'View More'} symbol={<CallMadeIcon />} />
              </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default CaseStudies