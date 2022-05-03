import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { TABLET_BP } from '../styles/variables';
import ExternalLink from './external-link';

import Section from './section';
import Ticket from '../svgs/ticket';

const StyledSection = styled(Section)`
  overflow-x: scroll;
`;

const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;

  td {
    // vertical-align: baseline;
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
  padding-right: 15px;
`;

const VenueColumn = styled(Column)`
  text-align: left;
  padding-right: 15px;
`;

const LocationColumn = styled(Column)`
  text-align: left;
  padding-right: 15px;
`;

const TicketColumn = styled(Column)`
  text-align: right;
`;

const TicketSvg = styled(Ticket)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 90%;
  margin-left: auto;

  @media (min-width: ${TABLET_BP}px) {
    max-width: 70%;
  }
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
        <TicketColumn header>Tickets</TicketColumn>
      </tr>
      {/* <tr><td colSpan="3"><Divider /></td></tr> */}

      {tours.map((tour) => {
        const isPast = new Date(tour.date) < new Date();

        return (
          <React.Fragment key={tour.date + tour.venue + tour.location}>
            <tr><td colSpan="4"><Divider /></td></tr>
            <tr className={isPast ? 'past' : ''}>
              <DateColumn>{tour.date}</DateColumn>
              <VenueColumn>{tour.venue}</VenueColumn>
              <LocationColumn>{tour.location}</LocationColumn>
              {!isPast && tour.ticketUrl && (
                <TicketColumn>
                  <ExternalLink href={tour.ticketUrl}>
                    <TicketSvg />
                  </ExternalLink>
                </TicketColumn>
              )}
            </tr>
          </React.Fragment>
        );
      })}

    </tbody>
  </Table>
);

function TourSection({ tours, anchor }) {
  return (
    <StyledSection anchor={anchor}>
      <h1>Tour dates</h1>
      {tours ? rendeTourTable(tours) : renderNoTours()}

      <ContactUs>
        Want us to play live? <ExternalLink href="mailto:leslieleftmusic@gmail.com"><u>Contact us!</u></ExternalLink>
      </ContactUs>
    </StyledSection>
  );
}

TourSection.defaultProps = {
  anchor: '',
  tours: [],
};

TourSection.propTypes = {
  anchor: propTypes.string,
  tours: propTypes.arrayOf(propTypes.shape({
    date: propTypes.string.isRequired,
    venue: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    ticketUrl: propTypes.string,
  }).isRequired),
};

export default TourSection;
