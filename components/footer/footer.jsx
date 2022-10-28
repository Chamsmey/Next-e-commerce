import Image from 'next/image'
import Style from './Footer.module.css'
const Footer = () => {
    return ( 
      <footer className='mix-blend-multiply bg-green-300 w-full fixed  bottom-0'>
        <p className='text-center p-2'>
        Powered by{' '}

        fakeapi.com

        </p>
    
    </footer>
     );
}
 
export default Footer;