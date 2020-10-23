import client from "./db.js";

class Book{
findAll(){
return client.execute("SELECT * FROM book");
}

creat({name,author,price}){
return client.excute(
`INSERT INTO book(name) VALUES(${"哈利波特"})`
)
}
}

const bookModel=new Book();

export const BookAll=async()=>{
return await bookModel.findAll();
}

export const BookSel = async(id) => {
console.info("@@Query id: ", id)
console.log(`SELECT * FROM book WHERE id = ${id}`);
return await client.execute(`SELECT * FROM book WHERE id = ${id}`);
}
