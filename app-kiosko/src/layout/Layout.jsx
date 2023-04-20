import React from 'react'
import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import Modal from 'react-modal'
import useKiosko from '@/hooks/useKiosko';
import ModalProducto from '@/components/ModalProducto';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

//Estilos para el Modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

//Situamos el Modal
Modal.setAppElement('#__next');


function Layout({children, pagina}) {

  const {modal} = useKiosko()

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

        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          <div className='p-10'>
          {children}
          </div>
          </main>
    </div>

{/*Si Modal es true, renderiza componente*/}
    {modal && (
      <Modal
      isOpen={modal}
      style={customStyles}>
        <ModalProducto />
      </Modal>
    )}

    <ToastContainer />
    </>
  )
}

export default Layout