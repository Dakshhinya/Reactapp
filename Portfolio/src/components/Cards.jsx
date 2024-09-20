
const Cards = ({CardLayout}) => {
    return (
        <>
        {CardLayout.map((carddata,index)=>
        
    (
        <div class="box flex justify-center items-center space -x-8" key={index}>
            <span></span>
            <div class="content">
                <h2>{carddata.title}</h2>
            </div>
        </div>


    ))
            }
        </>
        
       
    )
}

export default Cards