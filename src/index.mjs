import express  from "express";

const app = express();

app.use(express.json());
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3500;
const data = [
  {
    productCategoryId: 1,
    productCategoryCode: "P001",
    productCategoryName: "Foods",
  },
];

app.get("/product-categories", (request, response) => {
  return response.status(200).send(data);
});

app.get("/product-categories/:id", (request, response) => {
  console.log(request.params);
  const paredId = parseInt(request.params.id);
  if (isNaN(paredId)) {
    return response.sendStatus(400);
  }
  const findUser = data.find((d) => {
    return d.productCategoryId === paredId;
  });
  if (!findUser) {
    return response.sendStatus(404);
  }
  return response.status(200).send(findUser);
});

app.post("/product-categories", (request, response) => {
  const { body } = request;
  const newUser = {
    productCategoryId: data[data.length - 1].productCategoryId + 1,
    productCategoryCode: `P${(
      parseInt(data[data.length - 1].productCategoryCode.slice(1)) + 1
    )
      .toString()
      .padStart(3, "0")}`,
    ...body,
  };
  data.push(newUser);
  return response.status(201).send(newUser);
});

app.patch("/product-categories/:id",(request,response)=>{
    const {body , params: { id } } = request;
    const parseId = parseInt(id)
    if(isNaN(parseId)){
        return response.sendStatus(400)
    }
    const findUserIndex = data.findIndex((d)=>{
        return d.productCategoryId === parseId;
    })
    if(findUserIndex === -1){
        return response.sendStatus(404)
    }
    data[findUserIndex] = {...data[findUserIndex], ...body}
    return response.sendStatus(200)
})

app.delete('/product-categories/:id',(request , response)=>{
    const{
        params: {id}
    } = request;
    const parseId = parseInt(id)
    if(isNaN(parseId)){
        return response.sendStatus(400)
    }
    const findUserIndex = data.findIndex((d)=>{
        return d.productCategoryId === parseId;
    })
    if(findUserIndex === -1){
        return response.sendStatus(404)
    }
    data.splice(findUserIndex , 1)
    return response.sendStatus(200)
})



app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
