import React from 'react';
import { Box, Typography } from '@mui/material'
import CaseCard from './CaseCard';
import CaseCardBig from './CaseCardBig';
import { images } from '../../constants';
import CallMadeIcon from '@mui/icons-material/CallMade';
import BudgetSlider from './BudgetSlider';
import { Buttons } from "../../components";

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
        <Box component={'section'} sx={{
            display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px 0',
        }}>
            {/* Grid 1 */}
            <Box component={'section'}
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
            <Box component={'section'}
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

            {/* Grid 3 */}
              <Box component={'section'} bgcolor={'#77adcb'} color={'white'}
            sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gap: 1,
                border: '3px solid #F5A34C',
                borderRadius: '22px'
              }}>
                <Box component={'section'} borderRadius= '22px' padding={'20px 40px'} alignSelf={'center'}>
                    <Typography variant='h2' fontWeight={700} fontSize={'2.7rem'}>E-Book</Typography>
                    <Typography>Design, Implementation, Marketing</Typography>
                    <Typography variant='h2' fontWeight={700} fontSize={'2.7rem'}>$20,000</Typography>
                    <Typography>Revenue Generated</Typography>
                </Box>
                <Box>
                    <img src={images.book} alt="Bodybuilding magazine" />
                </Box>
              </Box>

              {/* Grid 4 */}
              <Box component={'section'} bgcolor={'#f5a34c'} color={'white'}
            sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gap: 1,
                border: '3px solid #F5A34C',
                borderRadius: '22px',
              }}>
                <Box component={'section'} borderRadius= '22px' padding={'30px 40px'} alignSelf={'center'}>
                    <Typography variant='h2' fontWeight={700} fontSize={'2.7rem'}>Tailor-Fit Offer For Your Audience</Typography>
                </Box>
                <Box borderRadius={'22px'} padding={'5px'} >
                    <img height={'200px'} width={'200px'} src={images.scissor} alt="white scissor" />
                </Box>
              </Box>

              {/* Grid 5 */}
              <Box component={'section'} bgcolor={'#f7a608'} color={'white'}
            sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gap: 1,
                border: '3px solid #F5A34C',
                borderRadius: '22px',
              }}>
                <Box component={'section'} borderRadius= '22px' padding={'20px 40px'} alignSelf={'center'}>
                    <Typography variant='h2' fontWeight={700} fontSize={'2.7rem'}>Merch</Typography>
                    <Typography>Design, Implementation</Typography>
                    <Typography variant='h2' fontWeight={700} fontSize={'2.7rem'}>$20,000</Typography>
                    <Typography>Revenue Generated</Typography>
                </Box>
                <Box>
                    <img src={images.screen1} alt="screen with ads of Evolve" />
                </Box>
              </Box>

              {/* Grid 6 */}
              <Box component={'section'} bgcolor={'#486d9a'} color={'white'}
            sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gap: 1,
                border: '3px solid #F5A34C',
                borderRadius: '22px',
              }}>
                <Box component={'section'} borderRadius= '22px' padding={'30px 40px'} alignSelf={'flex-start'}>
                    <Typography variant='h2' fontWeight={700} fontSize={'2.7rem'}>Business Profile</Typography>
                </Box>
                <Box borderRadius={'22px'} padding={'5px'} >
                    <img src={images.screen} alt="white scissor" />
                </Box>
              </Box>
              {/* Grid 7 */}
              <Box component={'section'} bgcolor={'black'} color={'white'}
            sx={{
                padding: '60px',
                border: '3px solid #F5A34C',
                borderRadius: '22px',
                gridColumn: 'span 2',
                gridRow: 'span 3',
              }}>
                  <Typography variant='h6' sx={{
                      fontFamily: 'Recoleta',
                      color: '#F5A34C',
                      fontWeight: 700,
                      pb: '20px',
                  }}>Our Bread And Butter</Typography>
                  <Typography variant='h2'sx={{
                    fontFamily: 'Gotham',
                    fontWeight: 700,
                    fontSize: '3rem',
                    maxWidth: '80%'
                    }}>Unleash The Power Of Community: Watch Your Brand Soar With Advocates</Typography>
                  <Typography variant='body2'
                  fontWeight={300}
                  maxWidth={'60%'}
                  pb={'20px'}
                  >Our Product Is Designed For Growing Startups, Established Companies, And Influencers Seeking New Growth Opportunities And Increased Revenue, By Helping Them Increase Acquisition, Distribute Content, And Grow Revenue Efficiently.</Typography>
                  <Box component={'section'} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                  }}>
                    <BudgetSlider />
                    <Buttons text='Make It Happens'/>
                  </Box>
              </Box>
        </Box>
    </Box>
  )
}

export default CaseStudies