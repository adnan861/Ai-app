import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Video from '../components/images/video.mp4';
const VideoModal = (props) => {
  return (
    <>
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                
            </Modal.Header>
            <Modal.Body>
                <iframe src={Video} title="YouTube video" allowfullscreen></iframe>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default VideoModal
