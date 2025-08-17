
import './App.css';
import ProductForm from './components/ProductForm';
// import Item from './components/Item'; 
// import ItemDate from './components/ItemDate';
// import Card from './components/Card';
import Products from './components/Products';


function App() {

  const response=[
    {
      itemName:"ariel",
      itemDay:"3",
      itemMonth:"june",
      itemYear:"2020"
    },
    {
      itemName:"surf",
      itemDay:"28",
      itemMonth:"jan",
      itemYear:"1967"
    },
    {
      itemName:"powder",
      itemDay:"3",
      itemMonth:"may",
      itemYear:"1968"
    },
    {
      itemName:"harppic",
      itemDay:"3",
      itemMonth:"july",
      itemYear:"2023"
    },
  ];
  
  function addProduct(product){
    console.log("inside app js")
    console.log(product)
    response.push(product)
  }

  return (
     
     <div>


       <ProductForm addProduct={addProduct}></ProductForm>
       <Products data={response}></Products>
       {/* <Card>
        <Item name={response[0].itemName}>
        hello i am childern
       </Item>
       <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear} ></ItemDate>

       <Item name={response[1].itemName} ></Item>
       <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

       <Item name={response[2].itemName}></Item>
       <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear} ></ItemDate>

        <Item name={response[3].itemName}></Item>
       <ItemDate day={response[3].itemDay} month={response[3].itemMonth} year={response[3].itemYear} ></ItemDate>
        <div className="App"><h1>Hello parin</h1></div>
       </Card> */}
     </div>
  );
}

export default App;
