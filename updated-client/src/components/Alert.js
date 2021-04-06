import React from 'react';
import Swal from "sweetalert2";

const Alert = (title, text) => {
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    width: 600,
    padding: '3em',
    background: '#fff',
    backdrop: `
    rgba(37, 45, 89, 0.4)
      left top
      no-repeat
    `
  })
}

export default Alert;