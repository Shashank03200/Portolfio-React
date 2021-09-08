import { Button , Modal} from 'react-bootstrap';

const EmailModal = (props) => {

  return (
    <>
      <Modal show={props.showModal} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title >{props.success ==='success' ? 'Success':'Error'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.success==='success' ? 'Your details were sent successfully to me': 'Error sending details'}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Alright
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
 
export default EmailModal;