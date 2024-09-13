import { BiCartAlt } from "react-icons/bi"; 
import { useParams } from "react-router-dom"
import { useGetProductByIdMutation, useGetProductCommentsQuery } from "../../redux/api/products-api"
import { useEffect } from "react"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Company from "../../components/company/Company"
import { IProduct } from "../../types"

const Details = () => {
  const {id} = useParams<{id: string}>()
  const [getProductById, {data}] = useGetProductByIdMutation<{data: IProduct[]}>()
  const {data: comments} = useGetProductCommentsQuery()

  useEffect(() => {
    getProductById(Number(id))
  }, [id])
  return (
    <>
    <Header/>
    <div>
      <section className="py-16">
        <div className="w-full max-w-[1240px] mx-auto">
            <div>
              {
                 data  && (

                  <div key={data.id} className="flex items-start gap-[40px] w-full">
                  <div className="flex items-center gap-5 flex-col w-full max-w-[530px] text-center">
                      <div className="w-full bg-[#F7F8FA] flex items-center justify-center">
                    <img src={data.thumbnail} alt={data.title} />
                      </div>
                    <div>

                      <h3 className="text-[#272727] text-[17px] font-medium title leading-relaxed">
                        {data.description}
                      </h3>
                      <span className="text-[#1d252c] text-xl font-medium title leading-relaxed text-green-500 mt-2 inline-block">
                      🚚 FREE SHIPPING
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <h1 className="text-[#272727] text-[26px] font-medium title leading-[57.60px]">
                        {data.title}
                      </h1>
                      <div className="flex items-start gap-[100px]  w-full ">
                        <div>
                          
                      <span className="text-[#56b280] text-[26px] font-semibold title leading-[57.60px]">
                        ${data.price}
                      </span>
                      <div>
                        
                       <span className="text-[#272727] text-lg font-normal text leading-relaxed">
                          Quantity
                        </span>
                        <div>
                          <div className="flex items-center gap-4 mt-2 border-2 border-[#56b280] w-full max-w-[80px]">
                            <button className="w-8 h-8 bg-[#F7F8FA] text-[#272727] text-xl font-medium flex items-center justify-center rounded">+</button>
                            <span className="text-[#272727] text-xl font-medium">1</span>
                            <button className="w-8 h-8 bg-[#F7F8FA] text-[#272727] text-xl font-medium flex items-center justify-center rounded">-</button>
                          </div>
                        </div>
                      </div>
                        </div>
                        <div className="flex items-start gap-5 flex-col">
                            <div className="flex items-center p-4 gap-2">
                              <input type="checkbox" />
                              <span className="text-[#272727] text-base font-normal text leading-none">
                              One time purchase  
                              </span>
                            </div>            
                            <div className="flex items-start border-2 p-4 rounded flex-col border-[#e6e6e6] gap-2">
                              <div className="flex items-center gap-2">
                              <input type="checkbox" />
                                <span  className="text-[#272727] text-base font-normal text leading-none">
                              Subscribe and delivery every 
                                </span>
                              <select name="" id="">
                                <option value="1">1 weeks</option>
                                <option value="2">2 weeks</option>
                                <option value="3">3 weeks</option>
                              </select> 
                              </div>
                              <p className="">{data.description}</p> 
                            </div>            

                              <button className="bg-[#56b280] text-white text-base flex items-center mt-[67px]  gap-5 font-medium text leading-none py-4 w-full justify-center px-20 rounded">
                                <BiCartAlt size={20} /> + Add to cart
                              </button>         
                        </div>
                      </div>
                      <p>
                        
                      </p>
                    </div>
                  </div>
                  </div>
                )
               }
            </div>
        </div>
      </section>
    </div>
    <Footer/>
    <Company/>
    </>
  )
}

export default Details