import React, { useState } from 'react';
import styled from 'styled-components';
// import { Card, Button } from 'react-bootstrap';
import db from '../../assets/database.png'
import down from '../../assets/down-arrow.png'
import up from '../../assets/up-arrow.png'

import './Home.css'
import { Doughnut } from 'react-chartjs-2';

const data={
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Card=({ title, duration, subTitle, onClick }) => {
  return (
    <div style={ {
      height: '20%',
      width: '20%',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      display: 'flex',
      padding: '5px',
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: '1px',
      borderBlock: 'solid',
      margin: '5px',
      borderBlockColor: '#aaa',
      borderRadius: '3px',
      flexDirection: 'column',
      fontSize: 12,
    } }>
      <div style={ {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        display: 'flex',
        padding: '5px',
        borderWidth: '1px',

      } } onClick={ onClick }>
        { title }
        <div>

          <img src={ db } style={ { height: '15px' } } />
        </div>
      </div>
      <div>

        { subTitle }
      </div>
      <div>

        { duration }
      </div>
    </div>
  )
}

const CardContainer=({ children, styles, ...rest }) => <div style={ {
  width: '100%',
  margin: '30px',
  marginTop: '100px',
  justifyContent: 'flex-end',
  padding: '30px',
  display: 'flex',
  backgroundColor: '#fff',
  borderRadius: '4px',
  ...styles
} } { ...rest } >{ children }</div>

export const Home=(props) => {
  const [isChartOn, setIsChartOn]=useState(false)

  const [isCollapsed, setIsCollapsed]=useState(false)


  const _oClickOfCard=() => {
    setIsChartOn(!isChartOn)
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <div style={ { flex: 1, height: isChartOn? '20px':'100%', justifyContent: 'space-between', display: 'flex', backgroundColor: '#eee' } }>
        <CardContainer styles={ { height: !isCollapsed? '10px':'40%' } }>
          { isCollapsed? <>  <Card onClick={ _oClickOfCard } title={ 'Automation Data warehouse' } subTitle={ 'Create an AWD database' } duration={ '3-5' } />
            <Card onClick={ _oClickOfCard } title={ 'Automation Data warehouse' } subTitle={ 'Create an AWD database' } duration={ '3-5' } />
            <Card onClick={ _oClickOfCard } title={ 'Automation Data warehouse' } subTitle={ 'Create an AWD database' } duration={ '3-5' } /></>:null }
          <div onClick={ () => setIsCollapsed(!isCollapsed) } >
            { isCollapsed? 'collapse':'Expand' } <img src={ isCollapsed? up:down } style={ { height: '15px' } } />
          </div>
        </CardContainer>
        { isChartOn&&<Doughnut data={ data } /> }
      </div>

    </>

  )
}