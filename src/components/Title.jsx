import contactImage from '../assets/contact-image.png'

export default function Title() {
    return (
        <div className='title'>
            <img src={contactImage} alt="contact image" className='contact-image' />
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <h6>laurasmith.website</h6>
            <div className='title-btn'>
                <button className='email-btn'>Email</button>
                <button className='linkedin-btn'>LinkedIn</button>
            </div>
        </div>
    )
}