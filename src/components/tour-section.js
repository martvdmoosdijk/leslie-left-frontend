import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { TABLET_BP } from '../styles/variables';
import Link from './external-link';

import Section from './section';

const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;

  td {
    vertical-align: baseline;
  }

  tr.past {
    opacity: 0.5;
  }
`;

const Column = styled.td`
  font-weight: ${(props) => (props.header ? 'bold' : 'normal')};
  font-size: ${(props) => (props.header ? '130%' : '100%')};
`;

const DateColumn = styled(Column)`
  white-space: nowrap;
  padding-right: 15px;
`;

const VenueColumn = styled(Column)`
  text-align: left;
  white-space: nowrap;
  padding-right: 15px;
`;

const LocationColumn = styled(Column)`
  text-align: right;
`;

const Divider = styled.div`
  background-color: white;
  opacity: 0.2;
  height: 1px;
  margin: 10px 0;

  @media (min-width: ${TABLET_BP}px) {
    margin: 15px 0;
  }
`;

const NoTours = styled.div`
  text-align: center;
`;

const ContactUs = styled.p`
  margin-top: 30px;
  text-align: center;

  @media (min-width: ${TABLET_BP}px) {
    margin-top: 50px;
  }
`;

const renderNoTours = () => (
  <NoTours>Unfortunately, Leslie Left has no live shows planned.</NoTours>
);

const rendeTourTable = (tours) => (
  <Table>
    <tbody>

      <tr>
        <DateColumn header>Date</DateColumn>
        <VenueColumn header>Venue</VenueColumn>
        <LocationColumn header>Location</LocationColumn>
      </tr>
      {/* <tr><td colSpan="3"><Divider /></td></tr> */}

      {tours.map((tour) => (
        <React.Fragment key={tour.date + tour.venue + tour.location}>
          <tr><td colSpan="3"><Divider /></td></tr>
          <tr className={tour.isPast ? 'past' : ''}>
            <DateColumn>{tour.date}</DateColumn>
            <VenueColumn>{tour.venue}</VenueColumn>
            <LocationColumn>{tour.location}</LocationColumn>
          </tr>
        </React.Fragment>
      ))}

    </tbody>
  </Table>
);

const TourSection = ({ tours, anchor }) => (
  <Section anchor={anchor}>
    <h1>Tour dates</h1>
    {tours ? rendeTourTable(tours) : renderNoTours()}

    <ContactUs>
      Want us to play live? <Link href="mailto:leslieleftmusic@gmail.com"><u>Contact us!</u></Link>
    </ContactUs>
  </Section>
);

TourSection.defaultProps = {
  anchor: '',
  tours: [],
};

TourSection.propTypes = {
  anchor: propTypes.string,
  tours: propTypes.arrayOf(propTypes.shape({
    date: propTypes.string,
    venue: propTypes.string,
    location: propTypes.string,
  })),
};

export default TourSection;
