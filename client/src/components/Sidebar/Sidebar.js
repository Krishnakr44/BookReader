import React from 'react'
import RecentPosts from './RecentPosts'
import { LinkContainer } from 'react-router-bootstrap'
const Sidebar = ({ postTitles }) => {
  return (
    <>
      <div>
        <h2 className='text-center'>Sidebar</h2>

        <RecentPosts postTitles={postTitles} />
        <div>
          <h3>AR Models</h3>
          <LinkContainer to='/humanskull'>
            <li className='links'>Human Skull</li>
          </LinkContainer>
          <LinkContainer to='/dna'>
            <li className='links'>Deoxyribonucleic acid</li>
          </LinkContainer>
          <LinkContainer to='/tasmaniantiger'>
            <li className='links'>Tasmanian Tiger</li>
          </LinkContainer>
          <LinkContainer to='/freshwatergoby'>
            <li className='links'>Freshwater Goby</li>
          </LinkContainer>
          <LinkContainer to='/hovervan'>
            <li className='links'>Hover van</li>
          </LinkContainer>
          <LinkContainer to='/meccanocar'>
            <li className='links'>Meccano Car</li>
          </LinkContainer>
        </div>
      </div>
    </>
  )
}

export default Sidebar
