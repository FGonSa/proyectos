import React from 'react'
import Head from 'next/head'
import Sidebar from '@/components/Sidebar'

function Layout({children, pagina}) {
  return (
    <>
    <Head>
        <title>Franky Book - {pagina}</title>
        <meta name='description' content='Book Catalog' />
    </Head>

    <div className='md:flex'>
        <aside className='md:w-4/12  xl:w-1/4 2xl:w-1/5'>
            <Sidebar />
        </aside>

        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>{children}</main>
    </div>
    </>
  )
}

export default Layout