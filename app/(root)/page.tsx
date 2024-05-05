import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Min', lastName: 'Khant', email: 'min@mandalaymorningstar.com' }

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

        <TotalBalanceBox 
          accounts={[]}
          totalBanks={4}
          totalCurrentBalance={13000.25}
        />
        </header>
        
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 11245.2}, {}]}
      />
    </section>
  )
}

export default Home