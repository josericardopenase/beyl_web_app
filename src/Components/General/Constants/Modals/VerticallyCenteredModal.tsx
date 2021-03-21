import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import useThemes from '../../../../CustomHooks/useThemes';
import Button1 from '../../../../Components/General/Constants/Button/Button1';
import CloseButton from './Components/CloseButton';



interface props{
  title : string,
  children : any,
  footer: any,
  show : any,
  onHide: any,
  size ?: | "sm" | "lg" | "xl" ,
  animated ?: boolean
}


export default function VerticallyCenteredModal(props : props) {

  const themes = useThemes()

   const styles = {
     container: {
      backgroundColor: themes.colors.primary + " !important",
      color: themes.colors.textPrimary,
      padding: 10,
      border: 0,
    } as React.CSSProperties,
    body : {
      borderRadius: 25,
      backgroundColor: themes.colors.primary,
      color: themes.colors.textPrimary,
      border: 0,
      outline : 0
    },
   } 

  
    return (
      <Modal
        show   = { props.show   }
        onHide = { props.onHide }
        size   = { props.size   }
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation= {props.animated ? false : true}
      
      >
        <div style={styles.body} >
        
        <Modal.Header  style={styles.body} >
          <Modal.Title id="contained-modal-title-vcenter" className="w-100 d-flex justify-content-between align-items-center">
          {
            props.title
          }
          <div></div>

          <CloseButton onClick={() => props.onHide()}></CloseButton>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.body}>
          {
            props.children
          }
        </Modal.Body>
        <Modal.Footer style={styles.body}>
          {
            props.footer
          }
        </Modal.Footer>
      </div>
      </Modal>
    );
  }