import { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { baseURL } from '../../utils/helpers';

function ResumeDownloadForm() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const downloadResume = document.querySelector(`#downloadResume`) as HTMLElement
    if (downloadResume) {
      setTimeout(() => {
        downloadResume.style.transform = 'translateX(0)'
        downloadResume.classList.remove('fade')
      }, 2000);
    }

  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <Form action={baseURL(`api/resume/download`)} method="post" className="form-container">
        <div className='bottom-0 right-0 position-fixed'>
          <div className="fade me-2 mb-3" id="downloadResume" style={{ transform: 'translateX(150%)', transition: 'all 1.2s ease-in-out' }}>
            <Row>
              <Col>
                <Button type="submit" variant="success" style={{ float: 'right' }} disabled={loading}>
                  <i className="bi bi-download" /> Download Resume
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ResumeDownloadForm;
