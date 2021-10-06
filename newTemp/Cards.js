import React from 'react';
import cards from './Data';
export default class Cards extends React.Component {

    constructor() {
        super();
        this.state = {
            btnarry:[true,true,true,true,true,true,true,true,true]
        }
   }
    
    Star=(start)=> {
        if (start > 0) {
            let arr = [];
            for (let i = 0; i < start; i++) {
                arr.push(<i class="fas fa-star"></i>);
            }
            return arr;
        }
 
    }
    changebtn = (evt) => {
       
        let btn = [...this.state.btnarry];
        let upd = btn[evt - 1];
       let change = !upd;
        btn[evt - 1] = change;
        console.log(btn);
        this.setState({ btn });
    }
    givebtn = (ele) => {
        console.log('givebtn called');
        console.log(this.state.btnarry);
        if ((this.state.btnarry[ele.id ]) == true)
            return <a href="#" class="btn btn-success" onClick={() => { this.changebtn(ele.id) }} id={ele.id}>{ele.btitle}</a>
            else
            return <a href="#" class="btn btn-danger" onClick={() => { this.changebtn(ele.id) }} id={ele.id}>Remove from Cart</a>
    }
    
    
render(){
    return (
        
        <>
            {console.log('render called')}
            <div class="container px-4 px-lg-5 mt-4">
               <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    cards.map(element => {
                        
                        return (
                            <div class="card  text-center mb-5 mr-5" key={element.id}>
                                <img class="card-img-top" src={element.img} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{element.title}</h5>
                                 
                                    {this.Star(element.star)}
                                    
                                    <p class="card-text">{element.Price}</p>
                                    {
                                        this.state.btnarry[element.id-1] ? <a href="#" disabled={this.state.btnarry[element.id-1]} class="btn btn-success" onClick={() => { this.changebtn(element.id) }} id={element.id}>{element.btitle}</a>
                                    
                                    : <a href="#" class="btn btn-primary" onClick={() => { this.changebtn(element.id) }} id={element.id}>{element.btitle}</a>

                                    }
                                
                                   
                                </div>
                            </div>
                        );
                    })
                }
               </div>
          </div>
        </>
        
    );
}
    
}
