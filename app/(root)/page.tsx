import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Min' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage Your Accounts and Transactions On Neo Spring!"
          />
        </header>
      </div>
    </section>
  )
}

export default Home