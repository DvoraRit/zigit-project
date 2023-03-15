import React from 'react'
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import { Fragment } from 'react';
import UserProjects from '../components/UserProjects';
export default function Info() {
    
      return (
     <Fragment>
          <Header />
          <UserProfile />
          <UserProjects />
     </Fragment>
      )
    }
    