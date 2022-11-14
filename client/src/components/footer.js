import React, { Component } from 'react'

export class Footer extends Component {

  render() {

    function date(){
        let ano = new Date();
        return ano.getFullYear();
    }

    return (
        <footer className="bg-light text-center text-lg-start">
            
            <div className="text-center p-3">
            © {date()} Copyright 
                <a className="text-dark" > resumenes.uai.cl</a>
            </div>
            
        </footer>
    )
  }
}

export default Footer