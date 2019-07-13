  
class MyApp extends React.Component{
  constructor(props){
		super(props)
		this.state={
			Amount:'',
			dispancedNotes:{
			notesOf_1:'',
			notesOf_2:'',
			notesOf_5:'',
			notesOf_10:'',
			notesOf_20:'',
			notesOf_50:'',
			notesOf_100:'',
			notesOf_200:'',
			notesOf_500:'',
			notesOf_2000:''
			},
			Total_notes_despensed:''
		}
		this.dispanceNotes = this.dispanceNotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}
	componentDidMound(){
	}
  
  handleChange(e){
     this.setState({ Amount: e.target.value });
  }
	 dispanceNotes () {
     let amount = this.state.Amount;
		 let Actualamount = Number(amount);
		 let totalNotes = 0;
		 if(Actualamount > 2000){
			 this.setState( (Actualamount) => {
				 dispancedNotes.notesOf_2000 = Actualamount % 2000;
			 });
			 totalNotes = Actualamount % 2000;
			 Actualamount:Actualamount / 2000;
		 }else if(Actualamount > 500){
			 this.setState(  (Actualamount) =>{
				 dispancedNotes.notesOf_500 = (Actualamount % 500)
			 });
			 totalNotes += Actualamount % 500;
			 Actualamount: (Actualamount / 500);
		 }else if(Actualamount > 200){
			 this.setState( (Actualamount) => {
				 dispancedNotes.notesOf_200 = (Actualamount % 200)
			 });
			 totalNotes += Actualamount % 200;
			 Actualamount: (Actualamount / 200);
		 }else if(Actualamount > 100){
			 this.setState((Actualamount) => {
				 dispancedNotes.notesOf_100 = (Actualamount % 100)
			 });
			 totalNotes += Actualamount % 100;
			 Actualamount: (Actualamount / 100);
		 }else if(Actualamount > 50){
			 this.setState( (Actualamount)=> {
				 dispancedNotes.notesOf_50 = (Actualamount % 50)
			 });
			 totalNotes += Actualamount % 50;
			 Actualamount: (Actualamount / 50);
		 }else if(Actualamount > 20){
			 this.setState((Actualamount) => {
				 dispancedNotes.notesOf_20 = (Actualamount % 20)
			 });
			 totalNotes += Actualamount % 20;
			 Actualamount: (Actualamount / 20);
		 }else if(Actualamount > 10){
			 this.setState((Actualamount) => {
				 dispancedNotes.notesOf_10 = (Actualamount % 10)
			 });
			 totalNotes += Actualamount % 10;
			  Actualamount: (Actualamount / 10);
		 }else if(Actualamount > 5){
			 this.setState((Actualamount) => {
				 dispancedNotes.notesOf_5 : (Actualamount % 5);
			 });
			 totalNotes += Actualamount % 5;
			 Actualamount: (Actualamount / 5);
		 }else if(Actualamount > 2){
			 this.setState((Actualamount) => {
				 dispancedNotes.notesOf_2 = (Actualamount % 2)
			 });
			 totalNotes += Actualamount % 2;
			  Actualamount: (Actualamount / 2)
		 }else if(Actualamount > 1){
			 totalNotes += Actualamount % 1;
			 this.setState((Actualamount) => {
				 dispancedNotes.notesOf_1 = (Actualamount % 1),
				 Total_notes_despensed = totalNotes
			 });
			 
		 }
	 }
  
  render(){
		return(
		<div>
		<div class="container">
	<header class="text-center">
		<h1>ATM Money Dispenser</h1>
	</header>
	<div class="row atm-screen">
		<div class="col-md-6">
			<div class="atm-window">
				<h2 class="text-center">Welcome To ATM</h2>
				<form name="ATM">
					<div class="form-group">
						<label for="atmAmount">Enter the Amount</label>
						<input type="text" class="form-control" name="atmAmount" 
              onChange={ this.handleChange }
              id="amount" value ={this.Amount} />
					</div>
					<div class="form-group">
						<button type="button" class="btn btn-primary btn-lg btn-block"
              onClick = {this.dispanceNotes()}
              >Get Money</button>
					</div>
				</form>
			</div>
		</div>
		<div class="col-md-6">
			<div class="note-chart">
				<p>You will get following amount</p>
				<table class="table">
					<tbody>
						<tr>
							<td><span id="note1"></span>{this.state.dispancedNotes.notesOf_1} notes of Rs 1</td>
							<td><span id="note2"></span>{this.state.dispancedNotes.notesOf_2} notes of Rs 2</td>
						</tr>
						<tr>
							<td><span id="note5"></span>{this.state.dispancedNotes.notesOf_5} notes of Rs 5</td>
							<td><span id="note10"></span>{this.state.dispancedNotes.notesOf_10} notes of Rs 10</td>
						</tr>
						<tr>
							<td><span id="note20"></span>{this.state.dispancedNotes.notesOf_20} notes of Rs 20</td>
							<td><span id="note50"></span>{this.state.dispancedNotes.notesOf_50} notes of Rs 50</td>
						</tr>
						<tr>
							<td><span id="note100"></span>{this.state.dispancedNotes.notesOf_100} notes of Rs 100</td>
							<td><span id="note200"></span>{this.state.dispancedNotes.notesOf_200} notes of Rs 200</td>
						</tr>
						<tr>
							<td><span id="note500"></span>{this.state.dispancedNotes.notesOf_500} notes of Rs 500</td>
							<td><span id="note2000"></span>{this.state.dispancedNotes.notesOf_2000} notes of Rs 2000 </td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="2"><strong>Total notes Dispensed <span id="total">{this.state.Total_notes_despensed}</span></strong></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
  </div>
		</div>
		);
	}
  
}

ReactDOM.render(
  <MyApp>
  </MyApp>,
  document.getElementById('app')
);


// Here is the codepen link.
// https://codepen.io/harshit_chhipa/pen/NZmQVV
