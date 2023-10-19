const AddProduct = () => {

    const formHandle=e=>{
        e.preventDefault()
        const form=e.target
        const productName=form.productName.value
        const url=form.url.value
        const brand=form.brand.value
        const type=form.type.value
        const price=form.price.value
        const ratings=form.ratings.value
        const description=form.description.value
        const newPhoneData={productName,url,brand,type,price,ratings,description}
        alert(newPhoneData)
    }
  return (
    <>
      <form onSubmit={formHandle} className="flex flex-col gap-4">
        <input
          name="productName"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 focus:outline-none"
          type="text"
          placeholder="Product name"
        />
        <input
          name="url"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 focus:outline-none"
          type="text"
          placeholder="Product image url"
        />
        <select name="brand" className="  select select-bordered w-full text-xl lg:text-2xl pl-2 py-1 border-2 focus:outline-none ">
          <option disabled selected>
            Select brand
          </option>
          <option>samsung</option>
          <option>apple</option>
          <option>realme</option>
          <option>mi</option>
          <option>vivo</option>
          <option>nothing</option>
        </select>
        <select name="type" className="select select-bordered w-full text-xl lg:text-2xl pl-2 py-1 border-2 focus:outline-none ">
          <option disabled selected>
            Select type
          </option>
          <option>phone</option>
          <option>accessories</option>
          <option>computer</option>
          <option>other</option>
          
        </select>
        <input
          name="price"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 focus:outline-none"
          type="number"
          placeholder="Product price"
        />
        <input
          name="ratings"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 focus:outline-none"
          type="number"
          placeholder="rating out of 10"
        />
        <textarea name="description" className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 "  placeholder="Shot description about product"></textarea>
        <button type="submit" className="btn btn-primary ">Add product</button>
      </form>
    </>
  );
};

export default AddProduct;
