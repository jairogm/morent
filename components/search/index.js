import Swap from "/public/icons/swap.svg"
export const Search = () => {

 
  return (
    <section className='w-full border flex flex-col justify-center items-center box-border p-2 relative' >

      <div className='w-[327px] h-[120px] bg-white rounded-md mb-9 border'>

      </div>

      <div className='w-[64px] h-[64px] md:w-[60px] md:h-[60px] absolute  top-[104px] mx-auto left-0 right-0 border bg-blue-dark rounded-md flex justify-center items-center'>
          <Swap />
      </div>

    </section>
  )
}
