

export const Movie = ({ data,overview,textTitle}) => {
         

    return (
      <div className="relative" >

            <div className="thumby cursor-pointer" onMouseEnter={() => textTitle(data.title)}
              onMouseLeave={() => textTitle('')} >
                
              <img className="thumbnail " onMouseEnter={() => overview(data.overview)}
              onMouseLeave={() => overview('')}
              src={"https://image.tmdb.org/t/p/w500"+[data.poster_path]} alt="img" />
             
            </div>
        
        
      </div>
    )
  }
  

