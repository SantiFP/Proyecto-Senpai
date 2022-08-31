import React from 'react';


export const FormLogin = (props) => {
    return (
        <>
        <section className= "mt-2 md:float-left md:w-2/5 ">
            
          <form  className="flex flex-col w-11/12 mx-auto "> 

                <input className="input mt-5 p-2 pl-5 py-3 placeholder-blue-500 font-semibold 
                md:py-4 lg:py-4 lg:mt-3" type="text" placeholder={props.placeHolder} />
                
          </form> 

        </section>

        </>
    )
}

export const FormSignUp = (props) => {
  return(

    <>
      <section className="mt-4 ">

        <form  className="flex flex-col w-11/12 mx-auto "> 

            <input className="input py-4 pl-5 placeholder-blue-500 font-semibold 
            lg:py-3" type="text" placeholder={props.placeHolder} />

        </form>

      </section>

    </>
  )
}

export const FormTypeRadio = () => {

  return(
    <>
      <section>
        
            <h1 className="mt-5 mb-4 font-semibold text-xl">Choose your plan</h1>

            {/* <!-- Distintos <p> con distintos saltos de linea para cada resolución (móvil,tablet y desktop) --> */}

            <p className="text-xs lg:hidden">According with your plan we have an specific <br /> catalogue of movies</p>

            <p className="text-xs hidden lg:block">According with your plan we have an specific catalogue of movies</p>

            <form className="mt-5 ml-16 font-semibold text-xl text-left md:w-3/12 md:mx-auto lg:w-1/5 lg:mx-auto ">
            
                <input type="radio" id="latin" name="signUp" value="latin" />
                <label className="md:pl-14" htmlFor="latin">Latino +</label><br />
    
                <input type="radio" id="inter" name="signUp" value="inter" />
                <label className="md:pl-14" htmlFor="inter">International +</label><br />
    
                <input className="mt-6" id="art" type="radio" name="signUp" value="art" />
                <label className="md:pl-14" htmlFor="art">Art +</label>
            
            </form>
    
      </section>


    </>
  )
}

