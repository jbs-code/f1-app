import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <p className='text-shadow'>Puedes revisar el código de esta aplicación{' '}
                <a
                    className='footer-link'
                    href='https://github.com/jbs-code/f1-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    aquí
                </a>
            </p>
        </footer>
    )
}

export default Footer