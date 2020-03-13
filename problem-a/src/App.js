import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' },
  { id: "C000141", name: "Benjamin L. Cardin", state: "MD", party: "Democrat", phone: "202-224-4524", twitter: "SenatorCardin"}

];

/* Your code goes here */
class Greeting extends React.Component {

}

export class App extends Component {
  render() {
    return (
    <div className="container">

      <h1>US Senators 2019</h1>
      <SenatorTable/>
    </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    let senatorRows = EXAMPLE_SENATORS.map((senator) => {
    return <SenatorRow senator={senator}></SenatorRow>;
    });
    return (
      <table className="table table-bordered">
      <TableHeader cols={["Name", "State", "Phone", "Twitter"]}/>
      <tbody>
        {senatorRows}
      </tbody>
      </table>
    );
  }
}

export class TableHeader extends Component {
  render() {

    let thArray = this.props.cols.map((colNameString) => {
    return <th key={colNameString}>{colNameString}</th>
    })

      let thead = (
      <thead>
        <tr>
          {thArray}
        </tr>
      </thead>
    )
    return thead;
  }
}


export class SenatorRow extends Component {
  render() {
    let senator = this.props.senator;

    return (
      <tr>
        <td>{senator.name}</td>
        <td>{senator.party.substring(0,1)} - {senator.state}</td>
        {/* <td><a href= {this.props.senator.name}>{this.props.senator.name}</a></td> */}
        <td><a href= {"tel:" + this.props.senator.phone}>{this.props.senator.phone}</a></td>
        <td><a href={"https://twitter.com/"+this.props.senator.twitter}>{"@"+this.props.senator.twitter}</a></td>
      </tr>
    );
  }
}
