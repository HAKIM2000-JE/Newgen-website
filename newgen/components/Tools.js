

function Tools({icon , title}) {
    return (
        <div>
           
            <div className="grid place-items-center  bg-white   w-64   h-64  p-9 shadow-lg rounded-xl ">
                <img src={icon} height={100} width={100} alt="" />
                <h3 className="text-black font-xl font-semibold">{title}</h3>
            </div>
            
        </div>
    )
}

export default Tools
