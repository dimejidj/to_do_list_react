class ToDoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      toDoList: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.handleComp = this.handleComp.bind(this);
  };

  
  handleClick(event){
    this.setState({
      input: event.target.value
    })
    };
  
  handleSubmit(){
    if(this.state.input != ''){
    this.setState((state) => ({
      toDoList: state.toDoList.concat(state.input),
      input: ''
    }))}
  };
  
  handleEnterPress(e){
    if(e.key === 'Enter'){
      this.setState((state) => ({
      input: '',
      toDoList: state.toDoList.concat(state.input)
    }))}
  };
  
  handleReset(){
  this.setState((state) => ({
    input: '',
    toDoList: []
  }))};
  
  handleDel(el){
    const newArr = this.state.toDoList.slice();
    const listVal = el.currentTarget.value;
    const varInd = newArr.indexOf(listVal);
    const lowCut = newArr.slice(0, varInd);
    const upCut = newArr.slice(varInd + 1);
    const newState = lowCut.concat(upCut);
    this.setState((state) => ({
      toDoList: newState
    }))
  }
  
  handleComp(el){
    const val = el.currentTarget;
    if(val.classList.contains('listBtnDone') == false){
      val.classList.add('listBtnDone')
    } else{
      val.classList.remove('listBtnDone')
    }};
  
  render(){
   let items = this.state.toDoList.map((val, ind) => { return <button onClick={this.handleComp} id={ind}  className="listBtn" value={val}><li key={ind}>{val}<button className="del" value={val} type="button" onClick={this.handleDel}>x</button></li></button>})
                                          
    return(
    <div className="wrapper">
        <input value={this.state.input} onChange={this.handleClick} onKeyPress={this.handleEnterPress}></input>
        <button className="pageBtn" type="button" onClick={this.handleSubmit}>Submit</button>
        <button className="pageBtn" type="button" onClick={this.handleReset}>Reset</button>
        <h2>My "TO DO" List:</h2>
         <ul>{items}</ul>
    </div>
        )
  }
};

ReactDOM.render(<ToDoList />, document.getElementById('app'));
