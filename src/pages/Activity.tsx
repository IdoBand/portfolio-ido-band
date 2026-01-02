import AnimatedText from '../components/AnimatedText'

const Activity = () => {
  return (
    <main className='page-layout'>
        <AnimatedText text='Activity' className='page-header'/>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7403193467612348421?collapsed=1" height="550" width="504" style={{border: 0}} title="Embedded post"></iframe>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383941551124549632?collapsed=1" height="550" width="504" style={{border: 0}} title="Embedded post"></iframe>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7373074468023291904?collapsed=1" height="550" width="504" style={{border: 0}} title="Embedded post"></iframe>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7356385412375863297?collapsed=1" height="550" width="504" style={{border: 0}} title="Embedded post"></iframe>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7324444705096712192?collapsed=1" height="550" width="504" style={{border: 0}} title="Embedded post"></iframe>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7301703748345643008?collapsed=1" height="550" width="504" style={{border: 0}} title="Embedded post"></iframe>
        </div>
    </main>
  )
}

export default Activity